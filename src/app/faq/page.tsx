import { Metadata } from 'next';
import { generateMetadata as gm } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { faqItems } from '@/data/faq';

export const metadata: Metadata = gm({
  title: 'Frequently Asked Questions (FAQ) — Clean Water & Donations',
  description:
    'Answers to common questions about Iris Foundation RO water plants in schools, manual donation process (Bank, Easypaisa, JazzCash), and school sponsorships.',
  path: '/faq',
  keywords: [
    'Iris Foundation FAQ',
    'how to donate to Iris Foundation',
    'what is RO water plant in school',
    'Easypaisa donation verification',
    'sponsor a school water plant Pakistan',
    'who maintains school RO plants',
    'clean water charity FAQ Pakistan',
  ],
});

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        label="Clear Answers"
        title="Frequently Asked "
        highlight="Questions"
        description="Everything you need to know about our Reverse Osmosis school plants, manual donation process, and getting involved."
      />

      <section className="py-24 bg-[#F8F7FF]">
        <FAQAccordion />
      </section>
    </>
  );
}