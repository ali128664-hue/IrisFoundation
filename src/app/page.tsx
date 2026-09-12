import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { MainCampaign } from "@/components/home/MainCampaign";
import { WhyWaterMatters } from "@/components/home/WhyWaterMatters";
import { ROProcess } from "@/components/home/ROProcess";
import { SchoolProjects } from "@/components/home/SchoolProjects";
import { ProjectMap } from "@/components/home/ProjectMap";
import { HowToHelp } from "@/components/home/HowToHelp";
import { DonationCTA } from "@/components/home/DonationCTA";
import { generateMetadata as gm } from '@/lib/metadata';

export const metadata: Metadata = gm({
  title: 'Clean Water for Schools in Pakistan — 15+ RO Plants Installed',
  description:
    'Iris Foundation installs commercial-grade Reverse Osmosis (RO) water filtration plants in schools across Pakistan. 15+ RO plants installed, 10+ schools served, and 5,000+ children drinking safer water daily.',
  path: '/',
  keywords: [
    'RO water plants in schools Pakistan',
    'clean drinking water schools Lahore Karachi Multan',
    'school water projects Pakistan',
    'donate RO plant Pakistan',
    'humanitarian water foundation Pakistan',
    '15 RO plants Pakistan',
    '10 schools clean water',
    '5000 students safe water',
  ],
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactNumbers />
      <MainCampaign />
      <WhyWaterMatters />
      <ROProcess />
      <SchoolProjects />
      <ProjectMap />
      <HowToHelp />
      <DonationCTA />
    </>
  );
}