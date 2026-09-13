'use client';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, UploadCloud } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/config/constants';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function DonationForm() {
  const [state, setState] = useState<FormState>('idle');
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState<string>('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    amount: '',
    paymentMethod: 'Bank Transfer',
    transactionId: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.fullName.trim()) e.fullName = 'Full name is required';
    if (!formData.phone.trim()) e.phone = 'Phone / WhatsApp number is required';
    if (!formData.transactionId.trim()) e.transactionId = 'Transaction ID / Reference Number is required';
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setState('submitting');

    const donationText = [
      `*Donation Confirmation — Iris Foundation*`,
      `━━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Donor Name:* ${formData.fullName}`,
      `📞 *Phone / WhatsApp:* ${formData.phone}`,
      `📧 *Email:* ${formData.email || 'Not provided'}`,
      `💰 *Donation Amount:* PKR ${formData.amount || 'Not specified'}`,
      `🏦 *Payment Method:* ${formData.paymentMethod}`,
      `🔖 *Transaction ID / Ref:* ${formData.transactionId}`,
      `💬 *Message / Cause:* ${formData.message || 'General Clean Water Fund'}`,
      `━━━━━━━━━━━━━━━━━━━━━`,
      `_I have completed the manual bank transfer and am sharing my details for verification._`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(donationText)}`;
    setLastWhatsAppUrl(whatsappUrl);

    try {
      await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch {
      // Continue to open WhatsApp even if internal API logging encounters issues
    }

    // Direct redirection / open WhatsApp with the donation message
    window.open(whatsappUrl, '_blank');
    setState('success');
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl border transition-all text-[#1A1A2E] placeholder-gray-400 focus:outline-none focus:ring-2 ${
      errors[field]
        ? 'border-red-400 focus:ring-red-200 bg-red-50/20'
        : 'border-gray-200 focus:border-[#8B2FC9] focus:ring-[#8B2FC9]/20 bg-white'
    }`;

  if (state === 'success') {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-3">
          Donation Details Ready on WhatsApp!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto mb-6">
          Aap ki donation details WhatsApp message ki soorat mein tayar kar li gayi hain. Agar WhatsApp khud na khulay, tou neechay diye gaye button par click karein:
        </p>
        <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-6 mb-8 max-w-md mx-auto">
          <p className="text-sm text-gray-800 font-medium mb-3">
            Click below to send receipt & confirm on WhatsApp:
          </p>
          <a
            href={lastWhatsAppUrl || `https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl shadow-md transition-all hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            💬 SEND VIA WHATSAPP NOW
          </a>
        </div>
        <button
          onClick={() => {
            setState('idle');
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              amount: '',
              paymentMethod: 'Bank Transfer',
              transactionId: '',
              message: '',
            });
          }}
          className="text-sm text-gray-500 hover:text-[#8B2FC9] underline font-medium"
        >
          Submit another donation entry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#8B2FC9] to-[#E91E8C] px-8 py-6 text-white">
        <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
          Confirmation
        </span>
        <h2 className="text-2xl font-bold mt-2">HAVE YOU MADE A DONATION?</h2>
        <p className="text-white/80 text-sm mt-1">
          Share your payment details below so our accounts team can promptly confirm your contribution.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. Tariq Mehmood"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={inputClass('fullName')}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
              Phone / WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="0306 6305875"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass('phone')}
            />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass('email')}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
              Donation Amount (PKR)
            </label>
            <input
              type="text"
              placeholder="e.g. 10,000"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className={inputClass('amount')}
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.paymentMethod}
              onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
              className={inputClass('paymentMethod')}
            >
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Transaction ID / Reference Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. TXN-893240 or Bank Transfer Ref"
            value={formData.transactionId}
            onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
            className={inputClass('transactionId')}
          />
          {errors.transactionId && <p className="text-xs text-red-500 mt-1">{errors.transactionId}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Message
          </label>
          <textarea
            rows={3}
            placeholder="Share which school or cause you are supporting..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass('message')}
          />
        </div>

        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-700 text-sm font-semibold mb-1">
            <UploadCloud className="w-5 h-5 text-[#8B2FC9]" />
            Upload Payment Screenshot (Optional)
          </div>
          <p className="text-xs text-gray-500 max-w-sm mx-auto">
            You can also conveniently attach and share your transaction receipt directly to our team via WhatsApp.
          </p>
        </div>

        {state === 'error' && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3 text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>Could not submit details. Please connect directly via WhatsApp.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={state === 'submitting'}
          className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#E91E8C] to-[#8B2FC9] hover:from-[#d8157e] hover:to-[#7b24b5] text-white font-bold text-base tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
          {state === 'submitting' ? 'SENDING DONATION DETAILS...' : 'SEND DONATION DETAILS'}
        </button>
      </form>
    </div>
  );
}