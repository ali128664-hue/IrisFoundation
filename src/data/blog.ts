export interface BlogItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'project-update' | 'event' | 'campaign' | 'foundation-news';
  image: string;
  author: string;
  featured: boolean;
}

export const blogItems: BlogItem[] = [
  {
    id: 'malka-hans-pakpattan-ro-plant',
    slug: 'clean-water-malka-hans-pakpattan-villages',
    title: 'Pure Drinking Water Flows in Historic Malka Hans: Iris Foundation Installs RO Plants Across Pakpattan Villages',
    excerpt:
      'In the historic soil of Malka Hans and surrounding Pakpattan villages, contaminated groundwater once threatened children’s futures. Read how Iris Foundation installed high-capacity RO filtration plants supplying 3,000+ students with certified pure drinking water.',
    content: `Malka Hans, an ancient and historically revered town in Pakpattan District famous as the place where Sufi poet Hazrat Waris Shah penned his masterpiece *Heer Ranjha*, has long faced a silent public health emergency: severe groundwater contamination.

With local underground aquifers suffering from brackish salinity, elevated Total Dissolved Solids (TDS exceeding 1,450 ppm), and industrial agricultural runoff, children in local government schools were forced to drink contaminated water or bring lukewarm bottles from home that ran dry before noon. Stomach infections, dysentery, kidney strain, and chronic lethargy had plagued attendance for years.

### A Historic Intervention at Government High School Malka Hans

Recognizing the urgent need, Iris Foundation deployed its engineering team to conduct comprehensive chemical and microbiological water tests at Government High School Malka Hans. 

With generous philanthropic support from our dedicated donors, we installed a commercial-grade 500-liter-per-hour Reverse Osmosis (RO) filtration plant, equipped with multi-stage sediment filters, activated carbon pre-filtration, high-pressure semi-permeable membranes, and ultraviolet (UV) sterilization.

The results were transformative:
- **TDS Levels Plummeted:** From an unsafe 1,450 ppm down to an optimal, WHO-certified 160 ppm.
- **Microbial Pathogens Completely Eradicated:** Zero traces of coliforms or pathogenic bacteria.
- **Immediate Health Turnaround:** School management reported a 35% drop in waterborne illness-related absences within just 60 days of installation.
- **1,200+ Students & Faculty Empowered:** Cold, refreshing, hygienic drinking stations installed across the school courtyard.

### Extending Hope to Surrounding Rural Villages of Pakpattan

The transformation at Malka Hans became the catalyst for a wider rural village initiative. In surrounding villages across the Pakpattan rural belt, where hand pumps draw arsenic-laced groundwater, Iris Foundation has established a cluster of community-school RO filtration plants. 

Together with the Malka Hans plant, this network now delivers more than 15,000 liters of purified water daily to over 3,000 schoolchildren and village residents who previously had no access to safe drinking water.

### Sustainable Maintenance & Stewardship

Unlike short-lived charity projects that fail when filters clog, Iris Foundation implements an active maintenance covenant for every installation. A designated local school caretaker is trained in membrane flushing and daily pressure monitoring, while our technical team conducts quarterly filter replacements and digital TDS audits.

Clean water in Malka Hans and Pakpattan is proof that when targeted donor support meets disciplined engineering, the trajectory of entire generations is permanently altered.`,
    date: '2025-01-20',
    category: 'project-update',
    image: '/images/news/news-1.jpg',
    author: 'Iris Foundation Field Operations',
    featured: true,
  },
  {
    id: 'school-ro-donation-sadaqah-jariyah',
    slug: 'school-water-plant-donation-guide-sadaqah-jariyah',
    title: 'School RO Water Plant Donation Guide: Why Sponsoring Clean Water in Pakpattan & Rural Punjab is the Ultimate Sadaqah Jariyah',
    excerpt:
      'Looking to make an enduring philanthropic impact? Learn how sponsoring a Reverse Osmosis water filtration plant in a Pakistani village school transforms hundreds of young lives daily while serving as continuous charity (Sadaqah Jariyah).',
    content: `In Islamic tradition and universal humanitarian ethics, the gift of water is regarded as the highest, most enduring form of charity. The Prophet Muhammad (peace be upon him) was asked: *"Which charity is the best?"* He replied: *"Providing water."*

When that water is provided to a government school in an underserved village—such as those in Pakpattan, Malka Hans, and southern Punjab—the impact is multiplied exponentially. Every single school day, hundreds of young students, teachers, and staff drink from your plant, staying healthy, attending classes, and building their futures.

### Why School RO Filtration Plants Are the Most Impactful Donation

1. **Direct, Measurable Beneficiaries:** Unlike generic funds, a school RO plant has a verifiable recipient base. A single installation directly shields 500 to 1,200+ growing children from typhoid, cholera, and toxic mineral deposits.
2. **Education Continuity:** Children who are not sick with stomach bugs do not miss school. Health and literacy go hand-in-hand.
3. **Decades-Long Lifecycle (True Sadaqah Jariyah):** Built with industrial stainless-steel skids, premium membranes, and durable plumbing, an RO plant maintained by Iris Foundation operates for 10 to 15+ years. Every drop consumed generates continuous spiritual reward and humanitarian dignity.

### The Iris Foundation 100% Transparency Promise

Many donors hesitate because they worry whether their donation will truly reach the ground. Iris Foundation was founded on radical transparency:

- **Site Selection & Baseline Lab Tests:** Before installation, we test the school's source water and share the certified laboratory report with the sponsor.
- **Live Installation Updates:** Donors receive high-resolution photo and video logs of the plant being assembled, plumbed, and commissioned.
- **Personalized Plaque of Dedication:** Sponsors can dedicate the plant in honor of their family, parents (*Isal-e-Sawab*), or organization.
- **GPS Coordinates & Direct WhatsApp Verification:** You receive exact geo-coordinates and a direct WhatsApp point of contact with our ground field manager. You are welcome to visit the school anytime!

### Sponsoring Options: From Full Plant Sponsoring to Community Shares

- **Complete School RO Plant Sponsorship (PKR 350,000 – 650,000):** Funds full end-to-end procurement, 500 LPH filtration skid, storage tanks, water cooler dispensing stations, installation, and first-year maintenance reserve.
- **Water Quality & Filter Maintenance Fund (PKR 5,000 – 25,000/month):** Ensures existing plants in Pakpattan, Lahore, and Karachi receive regular replacement membranes, cartridge filters, and UV bulbs.
- **Any Amount General Clean Water Fund:** Pooled contributions directly fund upcoming school installations in high-need rural districts.

Join hands with Iris Foundation today. Bring clean, life-giving water to a school that has waited years for safe drinking water.`,
    date: '2025-02-05',
    category: 'campaign',
    image: '/images/news/news-2.jpg',
    author: 'Iris Foundation Donor Advisory',
    featured: true,
  },
  {
    id: '1',
    slug: 'new-ro-plant-launch-lahore',
    title: 'Iris Foundation Launches New RO Water Plant in Lahore',
    excerpt:
      'Iris Foundation has successfully installed another RO water filtration plant at a government school in Lahore, bringing clean water to hundreds of students.',
    content: `Iris Foundation is proud to announce the successful installation and launch of a new Reverse Osmosis water filtration plant at a government school in Lahore, Punjab.

The installation, completed on schedule, provides high-capacity water purification for the school community. The RO plant is now fully operational, delivering clean, safe drinking water to students and staff throughout the school day.

"Access to clean water is a fundamental right, especially for children in school," said a spokesperson for Iris Foundation. "Every installation brings us closer to our vision of clean water in every school across Pakistan."

Iris Foundation extends its gratitude to all donors and supporters who made this project possible. Your contributions are directly turning into clean water for children who need it most.`,
    date: '2024-11-15',
    category: 'project-update',
    image: '/images/news/news-1.jpg',
    author: 'Iris Foundation Team',
    featured: false,
  },
  {
    id: '2',
    slug: 'clean-water-campaign-2024',
    title: 'Launch of Clean Water for Schools Campaign',
    excerpt:
      'Iris Foundation launches its annual fundraising campaign aimed at installing RO water plants in 15+ more schools across Pakistan this year.',
    content: `Iris Foundation has officially launched its Clean Water for Schools Campaign, with an ambitious goal to install RO water filtration plants in additional high-need schools across Pakistan by year end.

The campaign invites individuals, corporations, and organizations to contribute to this life-changing initiative. Donations can be made via bank transfer, and every rupee goes directly toward RO plant installation, maintenance, and water quality monitoring.

"This campaign represents our commitment to scaling impact," said the Iris Foundation team. "Clean water in schools is not a luxury — it is a necessity for every child's health and education."

To donate or sponsor a school, visit our donation page or contact us on WhatsApp.`,
    date: '2024-09-01',
    category: 'campaign',
    image: '/images/news/news-2.jpg',
    author: 'Iris Foundation Team',
    featured: false,
  },
  {
    id: '3',
    slug: 'volunteer-drive-2024',
    title: 'Iris Foundation Volunteers Make a Difference',
    excerpt:
      'Over XX volunteers joined Iris Foundation this quarter to support RO plant installations and community outreach programs.',
    content: `Iris Foundation is grateful to the growing community of volunteers who are supporting its mission across Pakistan. This quarter, volunteers participated in RO plant installation projects, community water hygiene awareness sessions, and school visits.

Volunteers come from diverse backgrounds — engineering, medicine, education, and business — each bringing unique skills that support Iris Foundation's work.

"Our volunteers are the backbone of our operations," said the Iris Foundation team. "Their dedication and compassion make every project possible."

Interested in volunteering? Visit our volunteer page to learn about opportunities.`,
    date: '2024-08-10',
    category: 'foundation-news',
    image: '/images/news/news-3.jpg',
    author: 'Iris Foundation Team',
    featured: false,
  },
  {
    id: '4',
    slug: 'world-water-day-2024',
    title: 'Iris Foundation Marks World Water Day 2024',
    excerpt:
      'On World Water Day, Iris Foundation reaffirms its commitment to bringing clean water to every school in Pakistan.',
    content: `On World Water Day (March 22), Iris Foundation reaffirmed its dedication to its core mission: clean water for schools across Pakistan.

The day was marked with community awareness events, school visits, and the announcement of new planned RO plant installations for the coming months.

Iris Foundation also released its Water Quality Report for 2023-2024, highlighting the impact of installed RO plants on student health and school attendance. The report is available on our Transparency page.

As we mark this important global day, Iris Foundation calls on individuals, corporations, and government bodies to join hands in ensuring every child has access to clean, safe drinking water at school.`,
    date: '2024-03-22',
    category: 'event',
    image: '/images/news/news-4.jpg',
    author: 'Iris Foundation Team',
    featured: false,
  },
];

export function getBlogBySlug(slug: string): BlogItem | undefined {
  return blogItems.find((n) => n.slug === slug);
}

export function getFeaturedBlogs(count = 3): BlogItem[] {
  return blogItems.filter((n) => n.featured).slice(0, count);
}
