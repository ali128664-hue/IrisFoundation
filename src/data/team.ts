export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Munir Hussain',
    role: 'Founder & Executive Director',
    bio: 'Munir Hussain is a dedicated philanthropist, entrepreneur, and the visionary Founder of Iris Foundation. Recognizing the severe impact of contaminated water on the health and education of school children in Pakistan, he established the foundation to provide sustainable, industrial-grade Reverse Osmosis filtration systems to high-need areas. He is also the proud owner and CEO of Iristours.net, integrating his business acumen with his deep commitment to community welfare, social uplift, and empowering the next generation with basic human necessities.',
    image: '/images/team/munir-hussain.png',
  },
];
