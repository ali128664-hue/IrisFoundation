'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

const steps = [
  {
    icon: '💧',
    title: 'Water Enters',
    description: 'Raw water from the source enters the RO system',
    color: '#5B8DB8',
  },
  {
    icon: '🔍',
    title: 'Pre-Filtration',
    description: 'Sediment and large particles are removed first',
    color: '#4FC3F7',
  },
  {
    icon: '⚙️',
    title: 'RO Membrane',
    description: 'Reverse Osmosis removes 99%+ of contaminants',
    color: '#8B2FC9',
  },
  {
    icon: '✨',
    title: 'Purification',
    description: 'UV treatment and final polishing stage',
    color: '#E91E8C',
  },
  {
    icon: '🌳',
    title: 'Clean Water',
    description: 'Pure, safe drinking water is ready',
    color: '#4CAF50',
  },
  {
    icon: '👧',
    title: 'Students Benefit',
    description: 'Children drink clean, healthy water every day',
    color: '#FF6B35',
  },
];

export function ROProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-[#1A1A2E] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel light className="mb-4">
            How It Works
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            The RO Filtration{' '}
            <span className="bg-gradient-to-r from-[#4FC3F7] to-[#8B2FC9] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </ScrollReveal>

        {/* Desktop: Horizontal flow */}
        <div className="hidden md:flex items-start justify-between gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-3 border-2"
                style={{ borderColor: step.color, backgroundColor: `${step.color}15` }}
              >
                {step.icon}
              </div>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                  className="absolute top-8 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-white/10 origin-left"
                />
              )}
              <h3 className="text-white font-bold text-sm mb-1">{step.title}</h3>
              <p className="text-white/40 text-xs leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical flow */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-white/5 rounded-2xl p-4"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl shrink-0"
                style={{ backgroundColor: `${step.color}20` }}
              >
                {step.icon}
              </div>
              <div>
                <h3 className="text-white font-bold">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
