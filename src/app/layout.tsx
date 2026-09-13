import type { Metadata } from 'next';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingDonate } from '@/components/layout/FloatingDonate';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { SITE_CONFIG } from '@/config/constants';

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — Clean Water for Schools in Pakistan`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Iris Foundation installs Reverse Osmosis (RO) clean water filtration plants in schools across Pakistan. 15+ RO plants, 10+ schools served, and 5,000+ children drinking safer water daily.',
  keywords: [
    'RO water plants in schools',
    'clean water for schools Pakistan',
    'safe drinking water schools',
    'school water filtration plant Lahore',
    'RO plant installation Karachi',
    'water projects Multan',
    'clean water NGO Pakistan',
    'donate water plant school Pakistan',
    'reverse osmosis Pakistan',
    'Iris Foundation Pakistan',
    'humanitarian water foundation',
    'child health clean water Pakistan',
    'water purification for schools',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} — Clean Water for Schools in Pakistan`,
    description:
      'Iris Foundation installs high-capacity RO filtration plants in schools across Pakistan. 15+ RO plants installed, 10+ schools served, 5,000+ students benefiting daily.',
    images: [{ url: '/logo.png', width: 1024, height: 512, alt: 'Iris Foundation Clean Water for Schools Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Clean Water for Schools in Pakistan`,
    description:
      '15+ RO water filtration plants installed in schools across Pakistan. 5,000+ students now have access to safer drinking water.',
    images: ['/logo.png'],
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['NGO', 'NonprofitOrganization'],
      '@id': `${SITE_CONFIG.url}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      logo: `${SITE_CONFIG.url}/logo.png`,
      image: `${SITE_CONFIG.url}/logo.png`,
      description: SITE_CONFIG.description,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressLocality: 'Pakistan',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Punjab, Pakistan' },
        { '@type': 'AdministrativeArea', name: 'Sindh, Pakistan' },
        { '@type': 'AdministrativeArea', name: 'Khyber Pakhtunkhwa, Pakistan' },
        { '@type': 'AdministrativeArea', name: 'Balochistan, Pakistan' },
        { '@type': 'AdministrativeArea', name: 'Islamabad Capital Territory, Pakistan' },
      ],
      knowsAbout: [
        'Reverse Osmosis Water Filtration in Schools',
        'Clean Water for Pakistani School Children',
        'Humanitarian Water Purification Projects',
        'Child Welfare & Pediatric Health',
      ],
      slogan: SITE_CONFIG.tagline,
      sameAs: [
        'https://facebook.com/irisfoundation',
        'https://instagram.com/irisfoundation',
        'https://twitter.com/irisfoundation',
        'https://linkedin.com/company/irisfoundation',
        'https://youtube.com/@irisfoundation',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      publisher: { '@id': `${SITE_CONFIG.url}/#organization` },
      inLanguage: 'en-US',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        {/* Favicon & Brand Icons */}
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        {/* LLM & AI Search Engine Declarations */}
        <link rel="help" type="text/plain" href="/llms.txt" title="LLM Knowledge Base" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="Full LLM Specification" />
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingDonate />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
