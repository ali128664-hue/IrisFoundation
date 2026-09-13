// ============================================================
// IRIS FOUNDATION — CENTRAL CONFIGURATION
// Update all payment details, contact info, and social links here.
// ============================================================

export const SITE_CONFIG = {
  name: 'Iris Foundation',
  tagline: 'Clean Water. Healthy Children. Stronger Futures.',
  description:
    'Iris Foundation is helping schools and communities access safer drinking water through RO water filtration projects and meaningful social initiatives.',
  url: 'https://irisfoundation.org',
  email: 'info@irisfoundation.net',
  phone: '+92 306 6305875',
  whatsapp: '+92 306 6305875',
  address: 'Pakpattan / Malka Hans, Punjab, Pakistan',
};

export const WHATSAPP_NUMBER = '923066305875';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DONATION_MESSAGE = encodeURIComponent(
  'Hello Iris Foundation! I have made a donation and would like to share my payment details/screenshot for confirmation.'
);
export const WHATSAPP_GENERAL_MESSAGE = encodeURIComponent(
  'Hello Iris Foundation! I would like to get in touch.'
);

// ==========================================
// MANUAL DONATION PAYMENT DETAILS
// ==========================================

export const BANK_DETAILS = {
  bankName: 'Bank of Punjab',
  accountTitle: 'MUNIR HUSSAIN',
  accountNumber: '6020452890900013',
  iban: 'PK36BPUN6020452890900013',
};

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/irisfoundation',
  instagram: 'https://instagram.com/irisfoundation',
  twitter: 'https://twitter.com/irisfoundation',
  linkedin: 'https://linkedin.com/company/irisfoundation',
  youtube: 'https://youtube.com/@irisfoundation',
};

export const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Get Involved',
    href: '/get-involved',
    children: [
      { label: 'Donate', href: '/donate' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Partners', href: '/partners' },
    ],
  },
];

export const IMPACT_STATS = [
  { label: 'RO Plants Installed', value: '15+', icon: 'droplets', numericValue: 15 },
  { label: 'Schools Served', value: '10+', icon: 'school', numericValue: 10 },
  { label: 'Students Benefited', value: '5,000+', icon: 'users', numericValue: 5000 },
  { label: 'Communities Reached', value: '12+', icon: 'heart', numericValue: 12 },
];
