import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { blogItems } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Blog & Operational Updates',
  description:
    'Stay informed on recent RO water plant inaugurations, community outreach visits, World Water Day drives, and announcements from Iris Foundation.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Dispatches & Bulletins"
        title="Foundation "
        highlight="Blog"
        description="Follow our continuous efforts on the ground as we commission school filtration plants, launch campaigns, and support Pakistani communities."
      />

      <section className="py-24 bg-[#F8F7FF]">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {blogItems.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <Link href={`/blog/${item.slug}`} className="block group">
                <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-8 items-start justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center shrink-0">
                    <Newspaper className="w-7 h-7" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#8B2FC9] bg-[#8B2FC9]/10 px-3 py-1 rounded-full">
                        {item.category.replace('-', ' ')}
                      </span>
                      {item.featured && (
                        <span className="text-xs font-bold uppercase tracking-wider text-[#E91E8C] bg-[#E91E8C]/10 px-3 py-1 rounded-full">
                          Featured Post
                        </span>
                      )}
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                        <Calendar className="w-3.5 h-3.5" /> {formatDate(item.date)}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#8B2FC9] transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6">
                      {item.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#8B2FC9] group-hover:translate-x-1 transition-transform">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}