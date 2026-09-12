import { Metadata } from 'next';
import { SITE_CONFIG } from '@/config/constants';

export function generateMetadata({
  title,
  description,
  path = '',
  image,
  keywords,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  const desc = description || SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || '/images/og-default.jpg';

  const defaultKeywords = [
    'RO water plants in schools',
    'clean water for schools Pakistan',
    'safe drinking water schools',
    'reverse osmosis plant Pakistan',
    'school water projects Lahore Karachi Multan',
    'clean water NGO Pakistan',
    'donate RO water plant',
    'Iris Foundation Pakistan',
    'humanitarian water charity',
    'child health clean water Pakistan',
  ];

  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description: desc,
    keywords: keywords ? [...keywords, ...defaultKeywords] : defaultKeywords,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description: desc,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_CONFIG.name}`,
      description: desc,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'geo.region': 'PK',
      'geo.placename': 'Pakistan',
      'geo.position': '30.3753;69.3451',
      'ICBM': '30.3753, 69.3451',
      'llms-txt': '/llms.txt',
    },
  };
}
