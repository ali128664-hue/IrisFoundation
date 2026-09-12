import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Camera, Image as ImageIcon, Sparkles } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Field Gallery & Installations',
  description:
    'Visual documentation of school Reverse Osmosis plant commissioning, clean water fountains, student workshops, and community events.',
  path: '/gallery',
});

const categories = ['All Media', 'RO Projects', 'Schools', 'Installation', 'Students', 'Community', 'Events'];

const galleryItems = [
  { id: 1, category: 'RO Projects', tag: 'High-Capacity Plant', title: 'Reverse Osmosis Core System Setup', loc: 'Lahore School' },
  { id: 2, category: 'Students', tag: 'Safe Drinking Water', title: 'Students Filling Bottles with Purified Water', loc: 'Karachi School' },
  { id: 3, category: 'Installation', tag: 'Plumbing & Civil Works', title: 'Food-Grade Piping & Filtration Rack Assembly', loc: 'Multan Project' },
  { id: 4, category: 'Schools', tag: 'School Transformation', title: 'Central Student Water Dispensing Station', loc: 'Islamabad Campus' },
  { id: 5, category: 'Community', tag: 'Local Awareness', title: 'Community Water Hygiene & Care Seminar', loc: 'Peshawar District' },
  { id: 6, category: 'Events', tag: 'World Water Day', title: 'Clean Water Advocacy & Awareness Camp', loc: 'Quetta Region' },
  { id: 7, category: 'RO Projects', tag: 'TDS Testing', title: 'Water Quality Inspection & Sensor Calibration', loc: 'Lahore Site' },
  { id: 8, category: 'Students', tag: 'Classroom Relief', title: 'Healthy Hydration During Summer School Term', loc: 'Sindh Primary' },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="Visual Impact"
        title="Field & Project "
        highlight="Gallery"
        description="A visual walkthrough of our Reverse Osmosis installations, technician testing, and school communities drinking clean water."
      />

      <section className="py-24 bg-[#F8F7FF]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`px-4 py-2 rounded-full text-xs font-bold cursor-pointer transition-all ${
                  i === 0
                    ? 'bg-[#8B2FC9] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                }`}
              >
                {c}
              </span>
            ))}
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.05}>
                <div className="group rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#1A1A2E] to-[#2D1B4E] relative flex items-center justify-center p-6 text-white text-center">
                    <div className="absolute inset-0 bg-[#8B2FC9]/10 group-hover:bg-[#8B2FC9]/20 transition-colors" />
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#4FC3F7] flex items-center justify-center mx-auto mb-2 backdrop-blur-md">
                        <Camera className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] uppercase tracking-widest text-[#4FC3F7] font-semibold">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B2FC9] bg-[#8B2FC9]/10 px-2.5 py-1 rounded-full inline-block mb-2">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-base text-[#1A1A2E] mb-1 group-hover:text-[#8B2FC9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400">{item.loc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center max-w-xl mx-auto">
            <Sparkles className="w-8 h-8 text-[#8B2FC9] mx-auto mb-3" />
            <h4 className="font-bold text-[#1A1A2E] text-lg mb-1">Authentic Field Media Only</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Iris Foundation strictly displays verified images from actual partner school sites. High-resolution galleries and documentation will continue to populate as new school plants enter commissioning.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}