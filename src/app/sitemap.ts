import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/constants';
import { projects } from '@/data/projects';
import { blogItems } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/our-work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/get-involved`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/donate`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/volunteer`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/partners`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/transparency`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogItems.map((n) => ({
    url: `${base}/blog/${n.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}