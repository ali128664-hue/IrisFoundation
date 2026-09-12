import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, ArrowRight, Video, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/data/projects';

const statusConfig = {
  completed: { label: 'Completed', variant: 'success' as const },
  'in-progress': { label: 'In Progress', variant: 'warning' as const },
  planned: { label: 'Planned', variant: 'info' as const },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusConfig[project.status];
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#8B2FC9]/20 hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
        <div className="aspect-video bg-gradient-to-br from-[#1A1A2E] to-[#2D1B4E] relative overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">🏫</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="water">RO Water</Badge>
            {project.videoUrl && (
              <span className="inline-flex items-center gap-1 bg-black/60 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                <Video className="w-3 h-3 text-[#4FC3F7]" /> Video
              </span>
            )}
          </div>
          <div className="absolute top-4 right-4">
            <Badge variant={status.variant}>{status.label}</Badge>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-bold text-[#1A1A2E] text-lg mb-1 group-hover:text-[#8B2FC9] transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-[#8B2FC9] text-sm font-semibold mb-2">{project.school}</p>

          {project.motto && (
            <p className="text-xs italic text-[#8B2FC9] bg-[#8B2FC9]/10 px-2.5 py-1 rounded-lg mb-3 self-start border border-[#8B2FC9]/15">
              &ldquo;{project.motto}&rdquo;
            </p>
          )}

          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">{project.description}</p>

          {project.phone && (
            <div className="mb-3 text-xs text-gray-500 flex items-center gap-1.5 font-mono">
              <Phone className="w-3 h-3 text-[#8B2FC9]" /> {project.phone}
            </div>
          )}

          <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {project.city}
              </span>
              <span className="flex items-center gap-1 font-medium text-gray-600">
                <Users className="w-3 h-3 text-[#8B2FC9]" /> {project.studentsReached}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-[#8B2FC9] group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
