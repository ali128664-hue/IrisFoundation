import { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ContactForm } from '@/components/contact/ContactForm';
import { SITE_CONFIG, WHATSAPP_URL, WHATSAPP_GENERAL_MESSAGE } from '@/config/constants';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Contact Iris Foundation — WhatsApp, Email & Office',
  description:
    'Reach Iris Foundation directly. Connect on WhatsApp for instant donation verification, school RO plant sponsorship, or general inquiries in Pakistan.',
  path: '/contact',
  keywords: [
    'contact Iris Foundation',
    'WhatsApp Iris Foundation',
    'school water plant inquiry Pakistan',
    'humanitarian contact Lahore Karachi Islamabad',
    'Iris Foundation phone email office',
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Direct Communication"
        title="Contact "
        highlight="Iris Foundation"
        description="Whether you have inquiries regarding school RO water plants, donation confirmations, or partnerships, we welcome your message."
      />

      <section className="py-24 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className="bg-white px-4 py-2 rounded-2xl border border-gray-100 shadow-sm shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Iris Foundation Logo"
                    width={180}
                    height={90}
                    className="h-12 md:h-14 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1A2E] text-sm">Iris Foundation Pakistan</h3>
                  <p className="text-gray-500 text-xs">Official Humanitarian Organization</p>
                </div>
              </div>

              <div>
                <SectionLabel>Reach Us</SectionLabel>
                <h2 className="text-3xl font-bold text-[#1A1A2E] mt-3">
                  Connect With Our Team
                </h2>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  For immediate support and instant donation verification, WhatsApp is our fastest communication channel.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`${WHATSAPP_URL}?text=${WHATSAPP_GENERAL_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center gap-5 hover:bg-[#25D366]/15 transition-colors group block"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#128C7E]">
                      Primary Channel
                    </span>
                    <h4 className="text-lg font-bold text-[#1A1A2E]">Official WhatsApp</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Instant chat & proof submission</p>
                  </div>
                </a>

                <div className="p-6 rounded-3xl bg-white border border-gray-100 flex items-center gap-5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Email Inquiries
                    </span>
                    <p className="text-base font-bold text-[#1A1A2E]">{SITE_CONFIG.email}</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-gray-100 flex items-center gap-5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#4FC3F7]/15 text-[#0288D1] flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Helpline
                    </span>
                    <p className="text-base font-bold text-[#1A1A2E]">{SITE_CONFIG.phone}</p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-white border border-gray-100 flex items-center gap-5 shadow-sm">
                  <div className="w-12 h-12 rounded-2xl bg-[#E91E8C]/10 text-[#E91E8C] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      Headquarters
                    </span>
                    <p className="text-base font-bold text-[#1A1A2E]">{SITE_CONFIG.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Send Us a Message</h3>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                Leave your details and an Iris Foundation representative will respond within 24–48 hours.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}