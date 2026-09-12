import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = gm({
  title: 'Privacy Policy',
  description:
    'Iris Foundation’s privacy commitment. How we handle donor information, contact inquiries, and manual verification details.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Data Stewardship"
        title="Privacy "
        highlight="Policy"
        description="We protect donor trust and communication details with high standards of confidentiality and security."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">1. Information We Collect</h2>
              <p className="text-sm text-gray-600">
                When you submit a donation confirmation or inquiry form, we collect your name, phone number, email, and transaction reference identifier. We do not operate an online credit/debit payment gateway and do not collect or store bank card numbers or personal account PINs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">2. How Information is Used</h2>
              <p className="text-sm text-gray-600">
                Data provided is strictly utilized to reconcile manual bank transfers, issue acknowledgment messages, and respond to volunteer or partnership requests.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">3. No Commercial Sharing</h2>
              <p className="text-sm text-gray-600">
                Iris Foundation never sells, rents, or exchanges donor lists with commercial marketing entities or outside brokers. All donor data remains strictly confidential within our authorized verification personnel.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">4. WhatsApp Channel Privacy</h2>
              <p className="text-sm text-gray-600">
                When sending payment screenshots via WhatsApp, communications are protected by WhatsApp’s end-to-end encryption protocols. Screenshots are archived solely for internal accounting and audit compliance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}