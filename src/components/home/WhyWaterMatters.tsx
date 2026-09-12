'use client';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Droplets, Brain, TrendingUp, Shield } from 'lucide-react';

const facts = [
  {
    icon: Brain,
    title: 'Better Learning',
    description:
      'Proper hydration improves concentration, memory, and cognitive performance. Students who drink clean water throughout the day learn better.',
    color: '#8B2FC9',
  },
  {
    icon: Shield,
    title: 'Fewer Illnesses',
    description:
      'Contaminated water is a leading cause of illness in schools. Clean water dramatically reduces waterborne diseases and school absenteeism.',
    color: '#4FC3F7',
  },
  {
    icon: TrendingUp,
    title: 'Better Attendance',
    description:
      'When children are healthier and schools provide clean water, attendance improves — keeping students in classrooms where they belong.',
    color: '#E91E8C',
  },
  {
    icon: Droplets,
    title: 'Community Health',
    description:
      'Clean water in schools benefits the entire community. Children carry healthy habits home, creating ripple effects of improved health.',
    color: '#00BCD4',
  },
];

export function WhyWaterMatters() {
  return (
    <section className="py-24 bg-[#F8F7FF]">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16 max-w-3xl mx-auto">
          <SectionLabel className="mb-4">Why It Matters</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4 mb-6">
            A Glass of Water Can{' '}
            <span className="bg-gradient-to-r from-[#4FC3F7] to-[#8B2FC9] bg-clip-text text-transparent">
              Change a School Day
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Safe drinking water is not a luxury — it is a foundation for health, learning, and dignity.
            Every child deserves clean water at school.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, i) => (
            <ScrollReveal key={fact.title} delay={i * 0.1}>
              <div className="group p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${fact.color}15` }}
                >
                  <fact.icon className="w-7 h-7" style={{ color: fact.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{fact.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{fact.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
