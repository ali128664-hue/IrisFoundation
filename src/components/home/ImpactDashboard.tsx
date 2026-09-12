'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { IMPACT_STATS } from '@/config/constants';

export function ImpactDashboard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-[#1A1A2E]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel light className="mb-4">
            Impact Dashboard
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Our Work in{' '}
            <span className="bg-gradient-to-r from-[#4FC3F7] to-[#E91E8C] bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-xl mx-auto">
            Tracking real impact. Numbers updated as verified project data becomes available.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all">
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
