'use client';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 rounded-2xl bg-green-50 text-center border border-green-200">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
        <h4 className="text-xl font-bold text-gray-900 mb-1">
          Thank you. Your message has been received.
        </h4>
        <p className="text-gray-600 text-sm">
          Our team will review your message and contact you promptly.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setForm({ name: '', email: '', phone: '', subject: '', message: '' });
          }}
          className="mt-6 text-xs text-[#8B2FC9] underline font-bold cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2FC9] focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            required
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2FC9] focus:outline-none text-sm"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            placeholder="0306 6305875"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2FC9] focus:outline-none text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
            Subject
          </label>
          <input
            type="text"
            placeholder="e.g. School RO Plant Inquiry"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2FC9] focus:outline-none text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={5}
          placeholder="Share details about your question, school recommendation, or collaboration..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8B2FC9] focus:outline-none text-sm"
        />
      </div>

      {status === 'error' && (
        <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>An error occurred. Please try again or reach out on WhatsApp.</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 rounded-full bg-[#8B2FC9] hover:bg-[#7823b0] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
      </button>
    </form>
  );
}