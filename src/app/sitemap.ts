import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.WEBSITE_URL;

  // Static routes
  const staticRoutes = ['', '/about', '/events', '/charities', '/contact'].map(
    route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8
    })
  );

  // Get all event slugs
  const eventSlugs = [
    'testimonial-dinner',
    'county-championship',
    'taste-of-india-gala-dinner',
    'england-india-test-match',
    'banstead-cc-allstars',
    'rory-burns-testimonial-golf-day',
    'ashes-party-final-event'
  ];

  // Create event routes
  const eventRoutes = eventSlugs.map(slug => ({
    url: `${baseUrl}/events/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...eventRoutes];
}
