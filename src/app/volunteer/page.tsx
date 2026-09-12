import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Heart, Award, Users, Wrench, Shield, Sparkles } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Volunteer with Iris Foundation',
  description:
    'Join our volunteer corps to support school water plant installations, community hygiene awareness, field logistics, and storytelling across Pakistan.',
  path: '/volunteer',
});

const roles = [
  {
    icon: Wrench,
    title: 'Technical & Engineering Volunteers',
    description: 'Assist plumbing, mechanical setup, civil mounting, and membrane testing during school plant installations.',
  },
  {
    icon: Users,
    title: 'School Hygiene & Awareness Facilitators',
    description: 'Lead fun, interactive water hygiene sessions with primary and high school students to build lifelong clean habits.',
  },
  {
    icon: Sparkles,
    title: 'Media, Photography & Storytelling',
    description: 'Capture authentic photography, document before/after impact, and record video interviews with teachers and students.',
  },
  {
    icon: Shield,
    title: 'Field Logistics & School Coordination',
    description: 'Coordinate with school headmasters, district education authorities, and transport vendors to ensure smooth commissioning.',
  },
];

const perks = [
  'Direct frontline humanitarian experience with measurable outcomes',
  'Official Volunteer Certificate from Iris Foundation leadership',
  'Skill development in clean water technology and project operations',
  'Inclusion in our nationwide youth and professional changemakers network',
];

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        label="Give Your Time"
        title="Volunteer With "
        highlight="Iris Foundation"
        description="Lend your passion, energy, and skills to install clean water systems in schools and uplift marginalized communities."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>Why Volunteer</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] leading-tight">
                Turn Your Compassion Into Clean Water
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                Volunteering with Iris Foundation is not an abstract desk task — it is direct, on-the-ground work that changes student lives. When an RO water plant is turned on and a child drinks clean water for the first time, you are there to witness that transformation.
              </p>
              <div className="space-y-3 pt-2">
                {perks.map((p) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#8B2FC9] shrink-0" />
                    <span className="font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 bg-gradient-to-br from-[#8B2FC9]/10 via-[#F8F7FF] to-[#4FC3F7]/10 p-8 md:p-12 rounded-3xl border border-[#8B2FC9]/20 shadow-sm text-center">
              <Award className="w-16 h-16 text-[#8B2FC9] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Volunteer Application</h3>
              <p className="text-gray-600 text-sm mb-6 max-w-md mx-auto leading-relaxed">
                Connect with our volunteer onboarding team directly. Let us know your city, background, and availability.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" variant="primary" size="md">
                  Submit Volunteer Inquiry
                </Button>
                <Button href="/about" variant="ghost" size="md" className="text-[#8B2FC9] border-[#8B2FC9]">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>

          <ScrollReveal className="text-center mb-12">
            <SectionLabel>Open Capacities</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-3">
              Where We Need Your Support
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.1}>
                <div className="bg-[#F8F7FF] rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center mb-4">
                      <r.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-[#1A1A2E] mb-2">{r.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}