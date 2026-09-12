'use client';
import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Droplets } from 'lucide-react';

const highlights = [
  'RO Reverse Osmosis filtration technology',
  'Serves entire school communities',
  'Regular maintenance & monitoring',
  'Water quality testing included',
  'Long-term community impact',
];

export function MainCampaign() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal direction="left">
            <SectionLabel className="mb-4">
              <Droplets className="w-3 h-3" /> Featured Initiative
            </SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4 mb-6 leading-tight">
              Bringing Clean Water{' '}
              <span className="bg-gradient-to-r from-[#8B2FC9] to-[#4FC3F7] bg-clip-text text-transparent">
                to Schools
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our flagship RO Water Plant initiative installs Reverse Osmosis filtration systems
              in schools across Pakistan, providing students with access to safe, clean drinking water.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Each installation goes through careful assessment, professional installation, testing,
              and staff training — ensuring long-term, sustainable access to clean water for entire
              school communities.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B2FC9] shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/ro-water" variant="primary" size="lg">
              Help Provide Clean Water
            </Button>
          </ScrollReveal>

          {/* Right — Visual */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#8B2FC9]/20 to-[#4FC3F7]/20 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] to-[#2D1B4E]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-48 h-48 rounded-full bg-gradient-to-br from-[#4FC3F7]/40 to-[#8B2FC9]/40 flex items-center justify-center"
                    >
                      <Droplets className="w-24 h-24 text-[#4FC3F7]/70" />
                    </motion.div>
                  </div>
                  {/* Step labels */}
                  {[
                    { label: 'Identify School', pos: 'top-8 left-8' },
                    { label: 'Install RO Plant', pos: 'top-8 right-8' },
                    { label: 'Test & Train', pos: 'bottom-8 left-8' },
                    { label: 'Clean Water', pos: 'bottom-8 right-8' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`absolute ${item.pos} bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2`}
                    >
                      <span className="text-white text-xs font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl px-6 py-4">
                <p className="text-[#8B2FC9] font-bold text-lg">RO Technology</p>
                <p className="text-gray-500 text-sm">Reverse Osmosis Filtration</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
