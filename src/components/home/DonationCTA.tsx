'use client';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL, WHATSAPP_DONATION_MESSAGE } from '@/config/constants';
import { Building2, CreditCard, User } from 'lucide-react';

export function DonationCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#1A1A2E]">
      {/* Gradient overlays */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#8B2FC9]/20 to-[#1A1A2E]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B2FC9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4FC3F7]/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal>
          <div className="text-5xl md:text-6xl mb-6">💧</div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Help Us Bring Clean Water{' '}
            <span className="bg-gradient-to-r from-[#4FC3F7] to-[#E91E8C] bg-clip-text text-transparent">
              to More Schools
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            Your support can help create healthier learning environments for children.
            Every donation brings us closer to clean water in every school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button href="/donate" variant="donate" size="xl" className="w-full sm:w-auto">
              💗 Donate Now
            </Button>
            <a
              href={`${WHATSAPP_URL}?text=${WHATSAPP_DONATION_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-lg md:text-xl rounded-full transition-all hover:-translate-y-0.5 w-full sm:w-auto"
            >
              💬 Contact Us
            </a>
          </div>

          {/* Bank Details Card */}
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-left shadow-2xl relative overflow-hidden group hover:border-[#4FC3F7]/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4FC3F7]/10 to-transparent rounded-bl-full pointer-events-none" />
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#4FC3F7]" />
              Direct Bank Transfer
            </h3>
            
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-4 border-b border-white/10">
                <span className="text-white/50 text-sm font-medium w-32 flex items-center gap-2">
                  Bank Name
                </span>
                <span className="text-white font-semibold text-lg">Bank of Punjab</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-4 border-b border-white/10">
                <span className="text-white/50 text-sm font-medium w-32 flex items-center gap-2">
                  <User className="w-4 h-4" /> Account Title
                </span>
                <span className="text-white font-semibold text-lg">MUNIR HUSSAIN</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pb-4 border-b border-white/10">
                <span className="text-white/50 text-sm font-medium w-32 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Account No
                </span>
                <span className="text-white font-mono text-lg tracking-wider">6020452890900013</span>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                <span className="text-white/50 text-sm font-medium w-32 flex items-center gap-2">
                  IBAN
                </span>
                <span className="text-[#4FC3F7] font-mono text-lg md:text-xl tracking-wider font-bold">
                  PK36BPUN6020452890900013
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
