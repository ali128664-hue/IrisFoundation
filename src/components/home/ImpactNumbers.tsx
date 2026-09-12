'use client';
import { Droplets, School, Users, Heart } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { IMPACT_STATS } from '@/config/constants';

const iconMap = {
  droplets: Droplets,
  school: School,
  users: Users,
  heart: Heart,
};

export function ImpactNumbers() {
  return (
    <section className="py-24 bg-[#F8F7FF] relative overflow-hidden">
      {/* Soft background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B2FC9]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4FC3F7]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">Our Impact</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4">
            Measuring What{' '}
            <span className="bg-gradient-to-r from-[#8B2FC9] to-[#4FC3F7] bg-clip-text text-transparent">
              Matters
            </span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Real numbers reflecting real impact. All statistics will be updated with verified data.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {IMPACT_STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Droplets;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="relative group text-center p-8 rounded-3xl border border-gray-100 hover:border-[#8B2FC9]/30 hover:shadow-2xl transition-all duration-500 bg-white">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8B2FC9]/5 to-[#4FC3F7]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#8B2FC9]/10 to-[#4FC3F7]/10 flex items-center justify-center group-hover:from-[#8B2FC9]/20 group-hover:to-[#4FC3F7]/20 transition-all">
                      <Icon className="w-7 h-7 text-[#8B2FC9]" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
