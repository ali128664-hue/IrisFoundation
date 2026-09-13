'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects } from '@/data/projects';
import { MapPin, Users, Calendar, ArrowRight, School } from 'lucide-react';

const projectPositions: Record<string, { x: number; y: number; label: string }> = {
  'malka-hans': { x: 69, y: 44, label: 'Govt High School' },
  'pakpattan-villages': { x: 65, y: 47, label: 'Pakpattan Rural' },
  'iqbal-junior-model-school-malka-hans': { x: 67, y: 42, label: 'Iqbal Model School' },
  'govt-girls-high-school-malka': { x: 71, y: 45, label: 'Govt Girls School (PEIMA)' },
  'urgent-pakpattan-schools-phase2': { x: 67, y: 49, label: 'Awaiting Schools' },
};

export function ProjectMap() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('malka-hans');
  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section className="py-24 bg-[#F8F7FF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-16">
          <SectionLabel className="mb-4">
            <MapPin className="w-3.5 h-3.5" /> Geographic Footprint
          </SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mt-4 leading-tight">
            Interactive Pakistan{' '}
            <span className="bg-gradient-to-r from-[#8B2FC9] to-[#4FC3F7] bg-clip-text text-transparent">
              Project Map
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore verified and planned RO water plant installations across schools in Malka Hans, Pakpattan, Lahore, Multan, and vulnerable communities across Pakistan.
          </p>

          {/* Quick Select Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {projects.map((p) => {
              const meta = projectPositions[p.id];
              const isSelected = p.id === activeProject.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B2FC9] text-white shadow-md shadow-[#8B2FC9]/25 scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {p.id === 'malka-hans' ? '🌟 Malka Hans' : meta?.label || p.city}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-xl">
          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 relative flex items-center justify-center p-4 bg-gradient-to-br from-[#1A1A2E] to-[#2D1B4E] rounded-3xl min-h-[460px] overflow-hidden">
            {/* Soft grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Stylized Pakistan Outline SVG */}
            <svg
              viewBox="0 0 400 480"
              className="w-full max-w-[360px] h-auto drop-shadow-[0_0_20px_rgba(79,195,247,0.2)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M170 30 C 230 20, 270 50, 290 90 C 310 130, 280 160, 310 190 C 330 210, 300 250, 280 270 C 260 300, 240 330, 220 370 C 190 410, 160 440, 130 450 C 110 440, 115 410, 130 380 C 120 350, 90 320, 70 310 C 40 280, 50 250, 80 230 C 90 200, 120 180, 140 150 C 150 110, 130 60, 170 30 Z"
                fill="url(#pakistanGradient)"
                stroke="#4FC3F7"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
              <defs>
                <linearGradient id="pakistanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B2FC9" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#4FC3F7" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#1A1A2E" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Project Pins */}
            {projects.map((p) => {
              const pos = projectPositions[p.id] || { x: 50, y: 50, label: p.city };
              const isSelected = activeProject.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none transition-transform ${
                    isSelected ? 'scale-125 z-20' : 'scale-100 z-10 hover:scale-110'
                  }`}
                  aria-label={`Select ${p.title}`}
                >
                  <span
                    className={`absolute -inset-2 rounded-full transition-opacity ${
                      isSelected
                        ? 'bg-[#4FC3F7]/40 animate-ping opacity-75'
                        : 'opacity-0 group-hover:opacity-50 bg-white/20'
                    }`}
                  />
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-lg transition-colors border-2 ${
                      isSelected
                        ? 'bg-[#4FC3F7] text-[#1A1A2E] border-white shadow-[0_0_20px_#4FC3F7]'
                        : p.id === 'malka-hans'
                        ? 'bg-[#FFB703] text-[#1A1A2E] border-white hover:scale-110'
                        : 'bg-[#8B2FC9] text-white border-white/60 hover:bg-[#A845EC]'
                    }`}
                  >
                    💧
                  </div>
                  <span
                    className={`absolute top-full mt-1.5 left-1/2 -translate-x-1/2 text-[10px] md:text-[11px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap shadow-md transition-all ${
                      isSelected
                        ? 'bg-white text-[#1A1A2E]'
                        : 'bg-black/60 text-white/80 group-hover:bg-white group-hover:text-[#1A1A2E]'
                    }`}
                  >
                    {pos.label}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-white/60">
              Click any node to inspect school RO installation
            </div>
          </div>

          {/* Project Details Spotlight */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="water">RO Water Installation</Badge>
              <Badge
                variant={
                  activeProject.status === 'completed'
                    ? 'success'
                    : activeProject.status === 'in-progress'
                    ? 'warning'
                    : 'info'
                }
              >
                {activeProject.status === 'completed'
                  ? 'Operational'
                  : activeProject.status === 'in-progress'
                  ? 'In Progress'
                  : 'Planned'}
              </Badge>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-2">
              {activeProject.title}
            </h3>

            <div className="flex items-center gap-2 text-[#8B2FC9] font-semibold text-sm mb-4">
              <School className="w-4 h-4" />
              <span>{activeProject.school}</span>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              {activeProject.description}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-[#F8F7FF] border border-gray-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#8B2FC9]/10 flex items-center justify-center text-[#8B2FC9]">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Students Served</p>
                  <p className="font-bold text-[#1A1A2E] text-base">{activeProject.studentsReached}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4FC3F7]/10 flex items-center justify-center text-[#0288D1]">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Timeline / Year</p>
                  <p className="font-bold text-[#1A1A2E] text-base">{activeProject.date}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={`/projects/${activeProject.slug}`} variant="primary" size="md">
                View Project Details <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/donate" variant="donate" size="md">
                💗 Sponsor Next School
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}