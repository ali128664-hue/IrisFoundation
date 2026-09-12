import { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { PaymentMethods } from '@/components/donate/PaymentMethods';
import { DonationForm } from '@/components/donate/DonationForm';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ShieldCheck, Heart, Droplets, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Donate to Clean Water for Schools - Bank Transfer',
  description:
    'Support Iris Foundation. 100% transparent manual donations via Bank Transfer to fund Reverse Osmosis clean water plants in Pakistani schools.',
  path: '/donate',
  keywords: [
    'Donate RO plant',
    'Sponsor a school water filter',
    'Sadaqah Jariyah water Pakistan',
    'Bank Transfer donation NGO Pakistan',
  ],
});

export default function DonatePage() {
  return (
    <>
      <PageHero
        label="Direct Humanitarian Support"
        title="SUPPORT IRIS "
        highlight="FOUNDATION"
        description="Your contribution can help us bring clean water to schools and support communities through meaningful humanitarian initiatives."
      >
        <div className="flex flex-wrap gap-3 justify-center text-xs md:text-sm font-semibold text-white/90">
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> Direct Manual Transfer
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#4FC3F7]" /> Zero Online Payment Gateway Fees
          </span>
          <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-md flex items-center gap-2">
            <Droplets className="w-4 h-4 text-[#E91E8C]" /> 100% Dedicated to Clean Water
          </span>
        </div>
      </PageHero>

      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-6">
          {/* 3 Step Flow Indicator */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: '01',
                title: 'Choose Payment Option',
                desc: 'Select Bank Transfer and copy verified credentials.',
              },
              {
                step: '02',
                title: 'Transfer & Keep Receipt',
                desc: 'Complete transfer from your banking app or wallet and save the transaction screenshot.',
              },
              {
                step: '03',
                title: 'Share Proof on WhatsApp',
                desc: 'Fill our short confirmation form or message us directly on WhatsApp for verification.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] font-bold text-base flex items-center justify-center shrink-0">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A2E] text-base mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left: Official Payment Channels */}
            <div className="lg:col-span-6 space-y-6">
              <div className="mb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white px-3.5 py-1.5 rounded-xl border border-gray-200 shadow-sm inline-block">
                    <Image
                      src="/logo.png"
                      alt="Iris Foundation"
                      width={160}
                      height={80}
                      className="h-9 sm:h-10 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8B2FC9] bg-[#8B2FC9]/10 px-3 py-1.5 rounded-full">
                    Step 1: Verified Channels
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-[#1A1A2E] mt-2">
                  Official Contribution Accounts
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Copy account numbers securely using the one-click buttons below.
                </p>
              </div>

              <PaymentMethods />
            </div>

            {/* Right: Confirmation Submission Form */}
            <div className="lg:col-span-6 space-y-6">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E91E8C] bg-[#E91E8C]/10 px-3 py-1 rounded-full">
                  Step 2: Submit Details
                </span>
                <h2 className="text-3xl font-bold text-[#1A1A2E] mt-2">
                  Verify Your Contribution
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Once sent, enter your transaction reference number to log your donation.
                </p>
              </div>

              <DonationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}