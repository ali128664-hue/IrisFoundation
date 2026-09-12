export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'donations' | 'ro-water' | 'volunteering' | 'partnerships' | 'foundation' | 'general';
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'How do I donate to Iris Foundation?',
    answer:
      'You can donate via Bank Transfer. Visit our Donate page for full payment details. After making your donation, please contact us on WhatsApp and share your payment screenshot or transaction ID so we can confirm your contribution.',
    category: 'donations',
  },
  {
    id: '2',
    question: 'Is there a minimum donation amount?',
    answer:
      'There is no minimum donation amount. Every contribution, large or small, makes a difference. Even a small donation contributes toward our goal of bringing clean water to more schools.',
    category: 'donations',
  },
  {
    id: '3',
    question: 'How do I confirm my donation was received?',
    answer:
      'After making a donation, please contact us on WhatsApp and share your payment screenshot or transaction reference number. Our team will confirm receipt and provide you with acknowledgment of your contribution.',
    category: 'donations',
  },
  {
    id: '4',
    question: 'Can I donate online using a credit/debit card?',
    answer:
      'Currently, Iris Foundation accepts donations via manual Bank Transfer. We do not have an online card payment gateway at this time. This ensures your full donation reaches us without processing fees.',
    category: 'donations',
  },
  {
    id: '5',
    question: 'Can I sponsor an entire RO water plant for a school?',
    answer:
      'Yes! You can sponsor a complete RO water plant installation for a school. This is one of the most impactful ways to support Iris Foundation. Contact us on WhatsApp or through our contact form to discuss school sponsorship options.',
    category: 'donations',
  },
  {
    id: '6',
    question: 'What is an RO water plant?',
    answer:
      'RO stands for Reverse Osmosis — a water purification technology that removes contaminants, bacteria, viruses, and dissolved solids from water using a semi-permeable membrane. The result is clean, safe drinking water. Iris Foundation installs these plants in schools where access to safe water is a challenge.',
    category: 'ro-water',
  },
  {
    id: '7',
    question: 'How long does an RO plant installation take?',
    answer:
      "A typical RO plant installation takes 1–3 days, depending on the school's infrastructure. Our team handles the entire process including assessment, installation, testing, and staff training.",
    category: 'ro-water',
  },
  {
    id: '8',
    question: 'Who maintains the RO plants after installation?',
    answer:
      'Iris Foundation provides initial maintenance training to school staff. We also conduct periodic monitoring visits to ensure plants are functioning correctly. Filter replacements and maintenance schedules are provided to each school.',
    category: 'ro-water',
  },
  {
    id: '9',
    question: 'How do you select which schools receive RO plants?',
    answer:
      'We prioritize schools based on: lack of existing clean water access, student population size, geographic vulnerability, and community need. We work with local education authorities and community leaders to identify the most impactful placements.',
    category: 'ro-water',
  },
  {
    id: '10',
    question: 'How can I volunteer with Iris Foundation?',
    answer:
      'We welcome volunteers with all skill sets — engineers, healthcare workers, educators, communicators, and more. Visit our Volunteer page to see current opportunities and fill out our volunteer form.',
    category: 'volunteering',
  },
  {
    id: '11',
    question: 'Do I need specific skills to volunteer?',
    answer:
      'Not necessarily. While technical skills are helpful for installation projects, we also need volunteers for community outreach, documentation, fundraising support, and administrative tasks. Every contribution of time and talent matters.',
    category: 'volunteering',
  },
  {
    id: '12',
    question: 'Can organizations partner with Iris Foundation?',
    answer:
      'Yes! We welcome corporate partnerships, school partnerships, NGO collaborations, and community partnerships. Partners can co-fund projects, provide in-kind support, or collaborate on joint initiatives. Contact us to discuss partnership opportunities.',
    category: 'partnerships',
  },
  {
    id: '13',
    question: 'Is Iris Foundation a registered organization?',
    answer:
      'Iris Foundation is a humanitarian organization working for social impact in Pakistan. For details about our registration and governance, please visit our Transparency page.',
    category: 'foundation',
  },
  {
    id: '14',
    question: 'How does Iris Foundation use donations?',
    answer:
      'Donations are used for RO plant procurement and installation, maintenance, community programs, operational costs, and expanding our reach to more schools. We are committed to transparency — our financial reports are available on the Transparency page.',
    category: 'foundation',
  },
  {
    id: '15',
    question: 'Where does Iris Foundation operate?',
    answer:
      'Iris Foundation operates across Pakistan, with projects in Punjab, Sindh, KPK, Balochistan, and the federal capital Islamabad. Our focus is on underserved schools and communities that lack access to basic services.',
    category: 'general',
  },
];

export type FAQCategory = FAQItem['category'];

export const faqCategories: { id: FAQCategory; label: string }[] = [
  { id: 'donations', label: 'Donations' },
  { id: 'ro-water', label: 'RO Water Projects' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'partnerships', label: 'Partnerships' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'general', label: 'General' },
];
