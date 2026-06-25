import { MetadataRoute } from 'next';
import { rules } from '@/data/rules';
import { docsData } from '@/data/docs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://epic.sh';

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/changelog`, lastModified: new Date() },
    { url: `${baseUrl}/docs`, lastModified: new Date() },
  ];

  const ruleRoutes = rules.map((rule) => ({
    url: `${baseUrl}/rules/${rule.id}`,
    lastModified: new Date(),
  }));

  const docRoutes = Object.keys(docsData).map((slug) => ({
    url: `${baseUrl}/docs/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...ruleRoutes, ...docRoutes];
}
