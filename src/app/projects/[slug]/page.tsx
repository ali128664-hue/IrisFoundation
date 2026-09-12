import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as gm } from '@/lib/metadata';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { projects, getProjectBySlug } from '@/data/projects';
import { MapPin, Users, Calendar, ArrowLeft, School } from 'lucide-react';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return gm({
    title: project.title,
    description: project.description,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const statusConfig = {
    completed: { label: 'Operational & Tested', variant: 'success' as const },
    'in-progress': { label: 'Under Active Installation', variant: 'warning' as const },
    planned: { label: 'Surveyed & Planned', variant: 'info' as const },
  };

  return (
    <>
      <section className="relative min-h-[55vh] flex items-end bg-[#1A1A2E] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D1B4E] to-[#1A1A2E]" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#8B2FC9]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4FC3F7]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Button href="/our-work" variant="ghost" size="sm" className="mb-6 text-white/80 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Project Portfolio
          </Button>

          <div className="flex flex-wrap gap-2.5 mb-4">
            <Badge variant="water">RO Water Plant</Badge>
            <Badge variant={statusConfig[project.status].variant}>
              {statusConfig[project.status].label}
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <School className="w-4 h-4 text-[#4FC3F7]" /> {project.school}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#8B2FC9]" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#E91E8C]" /> {project.studentsReached} Students Served
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> Initiated {project.date}
            </span>
          </div>

          {(project.motto || project.phone) && (
            <div className="mt-6 flex flex-wrap items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/15">
              {project.motto && (
                <div className="text-white text-sm">
                  <span className="text-[#4FC3F7] font-semibold">School Motto:</span> &ldquo;{project.motto}&rdquo;
                </div>
              )}
              {project.phone && (
                <div className="text-white text-sm flex items-center gap-2 border-l border-white/20 pl-4">
                  <span className="text-[#8B2FC9] font-semibold">Phone:</span> {project.phone}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#F8F7FF]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-[#1A1A2E]">
                Project Gallery
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Video First if exists */}
                {project.videoUrl && (
                  <div className="sm:col-span-2 lg:col-span-3 relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                    <video
                      src={project.videoUrl}
                      controls
                      playsInline
                      poster={project.image}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Main Image if no video and not in gallery */}
                {!project.videoUrl && project.image && !project.gallery.includes(project.image) && (
                  <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
                    <img
                      src={project.image}
                      alt={`${project.school} Main`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Gallery Images */}
                {project.gallery?.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
                  >
                    <img
                      src={img}
                      alt={`${project.school} site photo ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}