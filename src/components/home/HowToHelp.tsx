'use client';
import Link from 'next/link';
import { Heart, Sparkles, HandHeart, Briefcase, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';

const cards = [
  {
    icon: Heart,
    title: 'Donate',
    description:
      'Support our mission with a financial contribution. Every donation brings clean water to more children.',
    cta: 'Donate Now',
    href: '/donate',
    color: '#E91E8C',
    emoji: '💗',
  },
  {
    icon: Sparkles,
    title: 'Sponsor',
    description:
      'Help sponsor a complete school RO water plant project and transform an entire school community.',
    cta: 'Sponsor a School',
    href: '/donate',
    color: '#8B2FC9',
    emoji: '🌟',
  },
  {
    icon: HandHeart,
    title: 'Volunteer',
    description:
      'Give your time and skills to support RO plant installations, outreach, and community programs.',
    cta: 'Volunteer With Us',
    href: '/volunteer',
    color: '#4FC3F7',
    emoji: '✋',
  },
  {
    icon: Briefcase,
    title: 'Partner',
    description:
      'Work with Iris Foundation as a corporate or community partner to create lasting impact.',
    cta: 'Become a Partner',
    href: '/partners',
    color: '#FF6B35',
    emoji: '🤝',
  },
];

export function HowToHelp() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">Get Involved</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4">
            How You Can{' '}
            <span className="bg-gradient-to-r from-[#8B2FC9] to-[#E91E8C] bg-clip-text text-transparent">
              Help
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="group relative p-8 rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white to-gray-50" />
                <div className="relative flex flex-col flex-1">
                  <div className="text-4xl mb-4">{card.emoji}</div>
                  <h3 className="text-xl font-bold text-[#1A1A2E] mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 font-semibold text-sm transition-colors"
                    style={{ color: card.color }}
                  >
                    {card.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
