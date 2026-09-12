import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { Building2, School, Users, Globe, ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Partners & CSR Collaborations',
  description:
    'Collaborate with Iris Foundation. Corporate partnerships, school adoptions, international grants, and institutional sponsorships for clean drinking water.',
  path: '/partners',
});

const partnerCategories = [
  {
    icon: Building2,
    title: 'Corporate CSR Alliances',
    description: 'Direct your corporate social responsibility funding toward turnkey school RO plant projects with auditable impact documentation.',
  },
  {
    icon: School,
    title: 'School & University Networks',
    description: 'Partner as an alumni association or academic body to co-fund clean water filtration systems in less privileged sister institutions.',
  },
  {
    icon: Globe,
    title: 'International Foundations & Grants',
    description: 'Collaborate with Iris Foundation as an on-the-ground executing partner across provinces in Pakistan with verified reporting.',
  },
  {
    icon: Users,
    title: 'Community Organizations & Welfare Trusts',
    description: 'Combine local knowledge and volunteer networks to identify urgent school water vulnerabilities and maintain operational plants.',
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        label="Strategic Alliances"
        title="Institutional "
        highlight="Partnerships"
        description="Partner with Iris Foundation to bring industrial-grade clean water infrastructure to schools and communities that need it most."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {partnerCategories.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.1}>
                <div className="p-8 md:p-10 rounded-3xl bg-[#F8F7FF] border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center mb-6">
                      <p.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">{p.title}</h2>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-gray-200/50">
                    <Button href="/contact" variant="primary" size="sm">
                      Discuss Collaboration <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#1A1A2E] to-[#2D1B4E] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4FC3F7] bg-[#4FC3F7]/15 px-3 py-1 rounded-full inline-block mb-4">
                Corporate Social Responsibility (CSR)
              </span>
              <h3 className="text-2xl md:text-4xl font-bold mb-4">
                Full Transparency, Laboratory Audits, and Measurable Deliverables
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
                All partnered school RO water projects include baseline water testing reports, video installation documentation, post-commissioning TDS logs, and ongoing quarterly maintenance reporting.
              </p>
              <Button href="/contact" variant="donate" size="lg">
                Request Corporate Partnership Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}