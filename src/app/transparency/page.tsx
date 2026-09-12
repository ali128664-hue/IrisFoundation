import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { ShieldCheck, FileText, Download, CheckCircle2, Lock, Eye } from 'lucide-react';

export const metadata: Metadata = gm({
  title: 'Transparency, Reports & Governance',
  description:
    'Iris Foundation’s commitment to open governance, verified project installation logs, and financial integrity for donors and school communities.',
  path: '/transparency',
});

const reports = [
  {
    title: 'Annual Audited Financial Overview',
    period: 'Financial Year 2023–2024',
    status: 'Official Report Placeholder (Available Upon Audit Release)',
    size: 'PDF Document',
  },
  {
    title: 'RO Water Quality & Membrane Audit Summary',
    period: 'School Water Assessment Q3–Q4',
    status: 'Verified Field Lab Testing Summary',
    size: 'Technical PDF',
  },
  {
    title: 'School Project Completion Log & Asset Ledger',
    period: 'Annual Provincial Breakdown',
    status: 'Verified Installation Ledger',
    size: 'Operational Report',
  },
  {
    title: 'Donor Funds Utilization & Impact Certification',
    period: 'Humanitarian Relief & Education Allocation',
    status: 'Public Disclosure Statement',
    size: 'Governance Document',
  },
];

export default function TransparencyPage() {
  return (
    <>
      <PageHero
        label="Accountability & Trust"
        title="Transparency & "
        highlight="Governance"
        description="We believe every rupee donated to clean water in schools must be accounted for with absolute rigor, field proof, and institutional integrity."
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Eye,
                title: 'Open Accountability',
                desc: 'All project installations and laboratory tests are open to donor inspection and local educational review.',
              },
              {
                icon: ShieldCheck,
                title: 'No Fabricated Claims',
                desc: 'We strictly report verified installation counts and clearly mark future pipelines as planned.',
              },
              {
                icon: Lock,
                title: 'Direct Fund Allocation',
                desc: 'Capital goes directly to industrial filtration hardware, piping, filter media, and school maintenance.',
              },
            ].map((col) => (
              <ScrollReveal key={col.title}>
                <div className="p-8 rounded-3xl bg-[#F8F7FF] border border-gray-100 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#8B2FC9]/10 text-[#8B2FC9] flex items-center justify-center mb-5">
                      <col.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl text-[#1A1A2E] mb-2">{col.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{col.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mb-12">
            <SectionLabel>Public Documents</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mt-3">
              Official Foundation Disclosures
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Downloadable audit summaries and verifiable compliance filings.
            </p>
          </ScrollReveal>

          <div className="space-y-4 max-w-4xl mx-auto">
            {reports.map((r, i) => (
              <ScrollReveal key={r.title} delay={i * 0.05}>
                <div className="p-6 md:p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#4FC3F7]/15 text-[#0288D1] flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A1A2E] text-base md:text-lg">{r.title}</h4>
                      <p className="text-xs font-semibold text-[#8B2FC9] mt-0.5">{r.period}</p>
                      <p className="text-xs text-gray-400 mt-1">{r.status}</p>
                    </div>
                  </div>

                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 hover:bg-[#8B2FC9] text-gray-700 hover:text-white text-xs font-bold transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5" /> {r.size}
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}