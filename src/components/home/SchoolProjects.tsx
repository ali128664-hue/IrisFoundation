import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { getFeaturedProjects } from '@/data/projects';

export function SchoolProjects() {
  const projects = getFeaturedProjects(4);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-6">
          <div>
            <SectionLabel className="mb-4">🏫 School Projects</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4">
              RO Water Projects
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2 max-w-xl">
              Real installations providing safe, tested drinking water across schools in Malka Hans, Pakpattan, and beyond.
            </p>
          </div>
          <Button href="/our-work" variant="secondary" size="md">
            All Projects <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>

        {/* Urgent Callout Box for remaining schools */}
        <ScrollReveal className="mt-12">
          <div className="bg-gradient-to-r from-amber-500/10 via-[#8B2FC9]/5 to-transparent border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                ⚠️ Critical Ground Reality: Pakpattan & Malka Hans
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-[#1A1A2E]">
                Dozens More Schools in This Region Still Suffer From Contaminated Water
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Groundwater in surrounding rural villages carries dangerously high TDS and pathogenic bacteria. School children regularly fall ill with stomach fever and waterborne diseases, forcing high absenteeism. Installing RO water filtration plants is urgently required to protect these vulnerable children.
              </p>
            </div>
            <Button href="/donate" variant="donate" size="lg" className="shrink-0 shadow-lg">
              💗 Sponsor a School Plant
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
