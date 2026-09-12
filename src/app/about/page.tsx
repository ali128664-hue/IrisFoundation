import { Metadata } from 'next';
import Image from 'next/image';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { teamMembers } from '@/data/team';
import { CheckCircle2, Eye, Target, Heart, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'About Iris Foundation',
  description:
    'Learn about Iris Foundation — our mission, vision, values, leadership, and our commitment to clean drinking water for schools across Pakistan.',
  path: '/about',
});

const values = [
  {
    icon: Heart,
    title: 'Compassion First',
    description: 'We act with genuine care for every community we enter, putting human dignity and children’s health at the center of every project.',
  },
  {
    icon: CheckCircle2,
    title: 'Complete Integrity',
    description: 'We maintain absolute transparency in our operations, financial stewardship, and verified installation metrics.',
  },
  {
    icon: Eye,
    title: 'Measurable Impact',
    description: 'We measure success by tangible outcomes: safer water, reduced school absenteeism, and thriving educational communities.',
  },
  {
    icon: Target,
    title: 'Sustainable Infrastructure',
    description: 'We don’t just install filters; we establish long-term maintenance cycles, testing routines, and school ownership.',
  },
];

const timeline = [
  {
    year: 'Foundational Vision',
    event: 'Iris Foundation established in response to widespread waterborne illness affecting primary and secondary students across Pakistan.',
  },
  {
    year: 'First Model Plant',
    event: 'Successfully installed our first commercial-grade Reverse Osmosis plant at a high-density government school in Lahore.',
  },
  {
    year: 'Provincial Expansion',
    event: 'Expanded field operations to schools in Sindh, Punjab, and the Federal Capital, providing verified clean water.',
  },
  {
    year: 'Holistic Programs',
    event: 'Integrated broader humanitarian initiatives including health awareness, education supplies, and community emergency relief.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Iris Foundation"
        title="Who We "
        highlight="Are"
        description="Iris Foundation is an independent humanitarian organization committed to transforming school learning environments through Reverse Osmosis water plants and sustainable social impact initiatives across Pakistan."
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/ro-water" variant="donate" size="md">
            Explore RO Water Plants
          </Button>
          <Button href="/contact" variant="ghost" size="md">
            Connect With Leadership
          </Button>
        </div>
      </PageHero>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <ScrollReveal direction="left">
              <div className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#8B2FC9]/5 via-white to-[#4FC3F7]/5 border border-[#8B2FC9]/15 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center mb-6">
                    <Droplets className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Our Primary Mission</h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    To eliminate the barrier of contaminated drinking water in educational institutions by installing reliable Reverse Osmosis water filtration plants in schools across Pakistan. We ensure students have safe, refreshing water every single school day.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8B2FC9]">
                  <Sparkles className="w-4 h-4" /> Hero Initiative: Clean Water For Schools
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-[#E91E8C]/5 via-white to-[#8B2FC9]/5 border border-[#E91E8C]/15 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#E91E8C]/10 text-[#E91E8C] flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1A1A2E] mb-4">Our Global Vision</h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    A country where no child is denied quality education or exposed to preventable waterborne disease simply because their school lacks safe drinking water. We envision resilient, healthy schools anchored by empowered communities.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E91E8C]">
                  <CheckCircle2 className="w-4 h-4" /> Healthier Children · Stronger Futures
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Narrative Story */}
      <section className="py-24 bg-[#F8F7FF] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white px-6 py-3 rounded-2xl shadow-md border border-gray-100 inline-block">
                <Image
                  src="/logo.png"
                  alt="Iris Foundation"
                  width={240}
                  height={120}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            </div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4">
              Turning Hope Into Flowing Water
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                In many schools across Pakistan, the drinking water source is untreated ground or municipal water loaded with dangerous levels of total dissolved solids (TDS), bacterial colonies, and heavy metals. For young children, drinking this water daily translates directly to stomach ailments, lethargy, fever, and chronic absence.
              </p>
              <p>
                Iris Foundation was formed with an urgent clarity: temporary bottled water deliveries do not solve generational infrastructure problems. Schools need industrial, food-grade Reverse Osmosis filtration systems on premises that run autonomously, safely, and continuously.
              </p>
              <p>
                Each project we undertake involves an intensive lifecycle: chemical water testing, high-capacity plant engineering, rigorous physical installation, teacher training, and ongoing filter upkeep. By anchoring our mission in verified results rather than generic claims, we build lasting trust with donors and school administrations alike.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel>Milestones</SectionLabel>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-4">Our Journey So Far</h2>
          </ScrollReveal>
          <div className="relative border-l-2 border-[#8B2FC9]/20 ml-4 md:ml-32 space-y-12 pl-8">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-[#8B2FC9] border-4 border-white shadow-md" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#8B2FC9] bg-[#8B2FC9]/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                  <p className="text-gray-700 text-lg mt-3 leading-relaxed">{item.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#141424] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel light>Principles</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">Values That Guide Every Drop</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#4FC3F7]/15 text-[#4FC3F7] flex items-center justify-center mb-5">
                      <v.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white">{v.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="text-4xl font-bold text-[#1A1A2E] mt-4">Meet Our Founder</h2>
          </ScrollReveal>
          
          {teamMembers.map((m) => (
            <ScrollReveal key={m.id}>
              <div className="bg-[#F8F7FF] rounded-3xl p-8 md:p-12 border border-[#8B2FC9]/10 shadow-lg flex flex-col md:flex-row gap-10 items-center hover:shadow-xl transition-all">
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                  {m.image ? (
                    <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#8B2FC9]/20 to-[#4FC3F7]/20 flex items-center justify-center text-6xl">
                      👤
                    </div>
                  )}
                </div>
                
                <div className="text-center md:text-left space-y-4">
                  <h3 className="font-bold text-3xl md:text-4xl text-[#1A1A2E]">{m.name}</h3>
                  <div className="inline-block bg-[#8B2FC9]/10 text-[#8B2FC9] font-bold uppercase tracking-wider text-sm px-4 py-1.5 rounded-full mb-2">
                    {m.role}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg pb-4 border-b border-gray-200">
                    {m.bio}
                  </p>
                  <div className="pt-2 text-sm font-semibold text-gray-500">
                    Also the CEO & Owner of <a href="https://Iristours.net" target="_blank" rel="noopener noreferrer" className="text-[#E91E8C] hover:underline">Iristours.net</a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="py-20 bg-gradient-to-r from-[#8B2FC9] to-[#E91E8C] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be Part of the Solution</h2>
          <p className="text-white/80 mb-8 text-base">
            Your partnership or contribution helps us survey and install RO water filtration plants at the next school in line.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/donate" variant="ghost" size="lg">
              💗 Make a Contribution
            </Button>
            <Button href="/our-work" variant="ghost" size="lg">
              View Verified Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}