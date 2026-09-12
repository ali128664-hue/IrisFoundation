import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { WHATSAPP_URL, WHATSAPP_GENERAL_MESSAGE } from '@/config/constants';
import { Heart, Sparkles, HandHeart, Briefcase, MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Get Involved & Support Clean Water',
  description:
    'Discover meaningful ways to support Iris Foundation: donate, sponsor an RO school plant, volunteer skills, partner as a corporation, or become an ambassador.',
  path: '/get-involved',
});

const avenues = [
  {
    icon: Heart,
    title: 'Direct Donation',
    description: 'Support our core operational fund. Every contribution funds water testing, filtration membranes, and school maintenance.',
    cta: '💗 DONATE NOW',
    href: '/donate',
    featured: true,
  },
  {
    icon: Sparkles,
    title: 'Sponsor a School RO Plant',
    description: 'Adopt an entire school on our priority waiting list. Receive a dedicated project plaque, full installation report, and testing audits.',
    cta: 'Sponsor a Project',
    href: '/donate',
    featured: false,
  },
  {
    icon: HandHeart,
    title: 'Volunteer Your Time',
    description: 'Join on-the-ground survey teams, technical plumbing crews, student hygiene educators, or media and documentation staff.',
    cta: 'Apply to Volunteer',
    href: '/volunteer',
    featured: false,
  },
  {
    icon: Briefcase,
    title: 'Corporate & Institutional Partnerships',
    description: 'Align your corporate social responsibility (CSR) portfolio with verifiable clean water and education milestones across Pakistan.',
    cta: 'Explore Partnerships',
    href: '/partners',
    featured: false,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        label="Join The Movement"
        title="Get "
        highlight="Involved"
        description="Whether through financial support, school sponsorship, on-the-ground volunteering, or institutional partnership, you can bring safe drinking water to children in need."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {avenues.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.1}>
                <div
                  className={`rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-between ${
                    a.featured
                      ? 'bg-gradient-to-br from-[#8B2FC9]/5 via-white to-[#E91E8C]/5 border-[#8B2FC9]/30 ring-2 ring-[#8B2FC9]/10'
                      : 'bg-white border-gray-100 hover:border-[#8B2FC9]/20'
                  }`}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center mb-6">
                      <a.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">{a.title}</h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {a.description}
                    </p>
                  </div>
                  <div>
                    <Button
                      href={a.href}
                      variant={a.featured ? 'donate' : 'primary'}
                      size="md"
                    >
                      {a.cta}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Direct WhatsApp Callout */}
          <ScrollReveal className="mt-16 bg-[#25D366]/10 border border-[#25D366]/30 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-3">
              Want to Discuss a Custom Initiative?
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base mb-6 leading-relaxed">
              Connect directly with our operations team on WhatsApp to coordinate bulk sponsorships, memorial donations, or institutional alliances.
            </p>
            <a
              href={`${WHATSAPP_URL}?text=${WHATSAPP_GENERAL_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-full shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              💬 Chat With Us on WhatsApp
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}