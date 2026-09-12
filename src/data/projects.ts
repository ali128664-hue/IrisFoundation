export interface Project {
  id: string;
  slug: string;
  title: string;
  school: string;
  location: string;
  city: string;
  province: string;
  category: 'ro-water' | 'education' | 'healthcare' | 'community' | 'emergency';
  status: 'completed' | 'in-progress' | 'planned';
  description: string;
  longDescription: string;
  studentsReached: string;
  date: string;
  image: string;
  gallery: string[];
  impact: string[];
  coordinates: { lat: number; lng: number };
  motto?: string;
  phone?: string;
  urduTitle?: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'iqbal-junior-model-school-malka-hans',
    slug: 'iqbal-junior-model-school-malka-hans-ro-plant',
    title: 'RO Water Plant — Iqbal Junior Model School',
    school: 'Iqbal Junior Model School — Malka Hans',
    motto: 'Enter to learn and leave to serve',
    phone: '+92 306 6305875',
    location: 'Malka Hans, Pakpattan, Punjab',
    city: 'Pakpattan',
    province: 'Punjab',
    category: 'ro-water',
    status: 'completed',
    description:
      'Installation of a high-capacity commercial RO water filtration plant providing 1,500+ students and staff with safe, pure drinking water.',
    longDescription:
      'Located in Malka Hans (Pakpattan District, Punjab, Pakistan), Iqbal Junior Model School stands by the noble motto: "Enter to learn and leave to serve" (Phone: +92 306 6305875). For years, students faced severe gastrointestinal infections and seasonal absences due to brackish, high-TDS untreated groundwater. Iris Foundation installed an advanced Reverse Osmosis water filtration plant with multi-stage pre-filters, high-pressure semi-permeable membranes, and child-accessible dispensing taps. Today, students and faculty enjoy safe, crystal-clear drinking water every school day.',
    studentsReached: '850+',
    date: '2024',
    image: '/projects/malka-hans-inauguration.jpg',
    videoUrl: '/projects/iqbal-model-school-video.mp4',
    gallery: [
      '/projects/malka-hans-inauguration.jpg',
      '/projects/malka-hans-water-taps.jpg',
    ],
    impact: [
      'Certified WHO-standard clean drinking water for 850+ students and staff',
      'Groundwater TDS reduced from 1,350 ppm to safe 140 ppm',
      'Dramatically decreased stomach ailments and sickness-related absenteeism',
      'Multi-tap sanitary dispensing counter constructed for safe child access',
    ],
    coordinates: { lat: 30.3452, lng: 73.2678 },
  },
  {
    id: 'govt-girls-high-school-malka',
    slug: 'govt-girls-high-school-malka-ro-plant',
    title: 'Govt Girls High School Malka — گورنمنٹ گرلز ہائی سکول ملکہ',
    school: 'Govt Girls High School Malka (گورنمنٹ گرلز ہائی سکول ملکہ)',
    urduTitle: 'گورنمنٹ گرلز ہائی سکول ملکہ',
    location: 'Malka Hans, Pakpattan District, Punjab, Pakistan',
    city: 'Pakpattan / Malka Hans',
    province: 'Punjab',
    category: 'ro-water',
    status: 'completed',
    description:
      'Industrial-grade RO water purification system installed at Government Girls High School Malka, securing safe hydration for 1,200+ young female learners.',
    longDescription:
      'Clean water access in girls’ schools is critical for health, dignity, and uninterrupted education. At Govt Girls High School Malka (گورنمنٹ گرلز ہائی سکول ملکہ, Pakpattan District), untreated water posed daily threats of waterborne illness. Iris Foundation successfully engineered and commissioned a commercial 500 L/hr RO water filtration plant with stainless-steel storage, advanced sediment stages, and rapid-fill fountains. Over 1,200 girls and teachers now have continuous access to tested, hygienic water, creating a vibrant and disease-free learning atmosphere.',
    studentsReached: '1,200+',
    date: '2024',
    image: '/projects/govt-girls-malka-ro-1.jpg',
    videoUrl: '/projects/govt-girls-malka-video.mp4',
    gallery: [
      '/projects/govt-girls-malka-ro-1.jpg',
      '/projects/malka-hans-students-drinking-1.jpg',
    ],
    impact: [
      'Daily access to tested RO water for 1,200+ female students & teachers',
      'Over 40% reduction in waterborne infections and related medical absences',
      'Food-grade stainless steel storage skid with multi-layer UV disinfection',
      'Empowering girls to focus on education without illness disruptions',
    ],
    coordinates: { lat: 30.3444, lng: 73.2667 },
  },
  {
    id: 'malka-hans',
    slug: 'ro-water-plant-malka-hans-pakpattan',
    title: 'RO Water Plant — Government High School, Malka Hans',
    school: 'Government High School, Malka Hans',
    location: 'Malka Hans, Pakpattan, Punjab',
    city: 'Pakpattan',
    province: 'Punjab',
    category: 'ro-water',
    status: 'completed',
    description:
      'Flagship RO water plant installation in historic Malka Hans, providing 1,200+ students and staff with certified pure drinking water.',
    longDescription:
      'In the historic town of Malka Hans (Pakpattan District), groundwater has long suffered from severe salinity, brackish taste, and heavy total dissolved solids (TDS > 1,400 ppm). Iris Foundation commissioned a commercial 500 L/hr Reverse Osmosis water filtration plant at Government High School Malka Hans. Equipped with high-pressure semi-permeable membranes and multi-stage sediment filtration, the plant eliminates pathogens and heavy minerals. Today, over 1,200 students have safe, refreshing drinking water every school day, eliminating waterborne diseases and revitalizing classroom attendance.',
    studentsReached: '1,200+',
    date: '2024',
    image: '/projects/malka-hans-plant-setup-2.jpg',
    videoUrl: '/projects/malka-hans-ro-operation.mp4',
    gallery: [
      '/projects/malka-hans-plant-setup-2.jpg',
      '/projects/iqbal-model-school-ro-1.jpg',
    ],
    impact: [
      'Daily pure drinking water for 1,200+ students & teachers',
      'Groundwater TDS reduced from 1,450 ppm to WHO standard 160 ppm',
      'Over 35% reduction in student stomach-related absenteeism',
      'On-site water testing and local school operator trained',
    ],
    coordinates: { lat: 30.3444, lng: 73.2667 },
  },
  {
    id: 'urgent-pakpattan-schools-phase2',
    slug: 'urgent-appeal-pakpattan-malka-hans-schools-ro-plants',
    title: 'Urgent Initiative: 10+ Awaiting Schools in Pakpattan & Malka Hans',
    school: '10+ High-Need Schools Awaiting Clean Water',
    location: 'Pakpattan & Malka Hans Belt, Punjab, Pakistan',
    city: 'Pakpattan',
    province: 'Punjab',
    category: 'ro-water',
    status: 'in-progress',
    description:
      'Urgent campaign to install RO water plants in 10+ neighboring schools where children still drink contaminated ground water and suffer from preventable waterborne illnesses.',
    longDescription:
      'While our installations in Malka Hans (including Iqbal Junior Model School and Govt Girls High School) have transformed thousands of young lives, the reality on the ground remains urgent: dozens of other schools in the Pakpattan and Malka Hans rural belt still lack safe drinking water. In these schools, groundwater contains high total dissolved solids (TDS), salinity, and bacterial pathogens. Children drink unsafe water daily, leading to acute stomach ailments, typhoid, chronic fatigue, and high absenteeism. Installing Reverse Osmosis water filtration plants in these schools is not a luxury — it is an urgent, life-saving necessity. Iris Foundation is actively mobilizing donor support to install RO plants across these 10+ critical school sites.',
    studentsReached: '5,000+ Awaiting',
    date: '2025 Campaign',
    image: '/projects/malka-hans-students-drinking-1.jpg',
    videoUrl: '/projects/malka-hans-ro-operation.mp4',
    gallery: [
      '/projects/malka-hans-students-drinking-1.jpg',
      '/projects/iqbal-model-school-ro-1.jpg',
      '/projects/govt-girls-malka-ro-1.jpg',
    ],
    impact: [
      'Targeting 5,000+ vulnerable school students currently drinking unsafe water',
      'Eliminating recurring waterborne illnesses and absenteeism in rural schools',
      'Community and school partnership for daily plant maintenance',
      'Direct Sadaqah Jariyah sponsorship available per school RO plant',
    ],
    coordinates: { lat: 30.3400, lng: 73.3000 },
  },
  {
    id: 'pakpattan-villages',
    slug: 'ro-water-plants-pakpattan-rural-villages',
    title: 'RO Water Filtration Cluster — Pakpattan Rural Villages',
    school: 'Rural Primary & Middle Schools Cluster',
    location: 'Rural Villages Belt, Pakpattan, Punjab',
    city: 'Pakpattan',
    province: 'Punjab',
    category: 'ro-water',
    status: 'completed',
    description:
      'Multi-site RO water plant installations across underserved rural village schools in District Pakpattan.',
    longDescription:
      'Following the success of our Malka Hans flagship installation, Iris Foundation expanded into multiple surrounding rural villages in District Pakpattan. These rural settlements had relied entirely on shallow hand pumps yielding contaminated ground water. Through direct donor sponsorships, we installed dedicated community-school RO filtration units that supply hundreds of village children with tested, pure water, transforming the health outlook of the entire rural belt.',
    studentsReached: '1,800+',
    date: '2024',
    image: '/projects/malka-hans-water-taps.jpg',
    gallery: [
      '/projects/malka-hans-water-taps.jpg',
      '/projects/malka-hans-plant-setup-2.jpg',
    ],
    impact: [
      'Serving 1,800+ children across multiple village school campuses',
      'Eliminated arsenic and microbial pathogens from drinking supplies',
      'Clean water dispensing fountains accessible to village communities',
      'Regular maintenance schedule supported by Iris Foundation',
    ],
    coordinates: { lat: 30.3200, lng: 73.3800 },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count);
}
