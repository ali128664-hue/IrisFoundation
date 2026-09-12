'use client';
import { useState } from 'react';
import { Copy, Check, Building2 } from 'lucide-react';
import { BANK_DETAILS, WHATSAPP_URL } from '@/config/constants';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement('textarea');
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 bg-[#8B2FC9]/10 hover:bg-[#8B2FC9]/20 text-[#8B2FC9] rounded-xl text-sm font-semibold transition-all"
    >
      {copied ? (
        <><Check className="w-4 h-4" /> Copied!</>
      ) : (
        <><Copy className="w-4 h-4" /> {label}</>
      )}
    </button>
  );
}

export function PaymentMethods() {
  return (
    <div className="space-y-6">
      {/* Bank Transfer */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-[#1A1A2E] to-[#2D1B4E] px-8 py-5 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white/60 text-xs uppercase tracking-widest">Option 01</p>
            <h3 className="text-white font-bold text-lg">Bank Transfer</h3>
          </div>
        </div>
        <div className="px-8 py-6 space-y-4">
          {[
            { label: 'Bank Name', value: BANK_DETAILS.bankName },
            { label: 'Account Title', value: BANK_DETAILS.accountTitle },
            { label: 'Account Number', value: BANK_DETAILS.accountNumber },
            { label: 'IBAN', value: BANK_DETAILS.iban },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 py-3 border-b border-gray-50 last:border-0"
            >
              <div>
                <p className="text-gray-400 text-xs">{item.label}</p>
                <p className="text-[#1A1A2E] font-semibold mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="pt-2">
            <CopyButton
              text={`Bank: ${BANK_DETAILS.bankName}\nAccount Title: ${BANK_DETAILS.accountTitle}\nAccount Number: ${BANK_DETAILS.accountNumber}\nIBAN: ${BANK_DETAILS.iban}`}
              label="Copy Account Details"
            />
          </div>
        </div>
      </div>

      {/* WhatsApp Confirmation Instruction */}
      <div className="bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] rounded-3xl border border-[#25D366]/20 p-6">
        <p className="text-gray-700 font-medium mb-4 text-center">
          After sending your donation, please contact us on WhatsApp and share your payment
          details or screenshot so we can confirm your contribution.
        </p>
        <div className="flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
