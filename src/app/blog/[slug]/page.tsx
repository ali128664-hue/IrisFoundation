import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as gm } from '@/lib/metadata';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Button } from '@/components/ui/Button';
import { blogItems, getBlogBySlug } from '@/data/blog';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

export async function generateStaticParams() {
  return blogItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getBlogBySlug(slug);
  if (!item) return {};
  return gm({
    title: item.title,
    description: item.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getBlogBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <section className="relative min-h-[50vh] flex items-end bg-[#1A1A2E] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#2D1B4E] to-[#1A1A2E]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
          <Button href="/blog" variant="ghost" size="sm" className="mb-6 text-white/80 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
          </Button>

          <span className="inline-block bg-[#8B2FC9] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
            {item.category.replace('-', ' ')}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {item.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#4FC3F7]" /> {formatDate(item.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#E91E8C]" /> Dispatched by {item.author}
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-lg border-b border-gray-100 pb-12">
              {item.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-[#F8F7FF] rounded-3xl border border-gray-100">
            <div>
              <h4 className="font-bold text-[#1A1A2E] text-lg">Support Iris Foundation Initiatives</h4>
              <p className="text-gray-500 text-sm mt-1">Help fund the next school Reverse Osmosis filtration unit.</p>
            </div>
            <Button href="/donate" variant="donate" size="md">
              💗 DONATE NOW
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}