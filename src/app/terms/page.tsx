import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = gm({
  title: 'Terms & Conditions of Service',
  description:
    'Terms governing the use of the Iris Foundation portal, manual donation guidelines, and educational content.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Institutional Terms"
        title="Terms & "
        highlight="Conditions"
        description="Guidelines and terms governing user interactions with Iris Foundation digital platforms and social programs."
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-gray-700 leading-relaxed">
          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">1. Scope of Operations</h2>
              <p className="text-sm text-gray-600">
                Iris Foundation operates as a social-impact humanitarian entity whose primary hero initiative is installing Reverse Osmosis water filtration plants in educational institutions across Pakistan.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">2. Manual Donation Reconciliations</h2>
              <p className="text-sm text-gray-600">
                Donations are processed via manual bank transfers. Donors are advised to retain transaction slips and contact our official WhatsApp channel for verification and allocation confirmation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-[#F8F7FF] p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#1A1A2E] mb-3">3. Intellectual Property & Brand Assets</h2>
              <p className="text-sm text-gray-600">
                All branding, visual assets, 3D interactive models, and field photography displayed on this site are the property of Iris Foundation and may not be republished without written consent.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}