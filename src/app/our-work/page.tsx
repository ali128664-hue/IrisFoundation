import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects } from '@/data/projects';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { ProjectMap } from '@/components/home/ProjectMap';
import { Droplets } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Our Work - School RO Water Plants',
  description:
    'Explore Iris Foundation’s primary mission of installing Reverse Osmosis water plants in schools across Pakpattan and Malka Hans.',
  path: '/our-work',
});

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        label="Comprehensive Mission"
        title="Our "
        highlight="Work & Impact"
        description="We are entirely dedicated to solving one of the most critical health crises in Pakistani schools: providing children with pure, laboratory-tested, and safe Reverse Osmosis drinking water inside their school compounds."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">
              <Droplets className="w-3 h-3" /> Flagship Initiative
            </SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-2">
              School Water Projects
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
              Browse our portfolio of completed and upcoming Reverse Osmosis water plant installations across the rural belt.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projects.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.1}>
                <ProjectCard project={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#F8F7FF] py-24">
        <ProjectMap />
      </div>
    </>
  );
}