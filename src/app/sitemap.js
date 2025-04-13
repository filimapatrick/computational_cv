export default function sitemap() {
  const baseUrl = 'https://patrickfilima.com';
  
  // Define all your routes
  const routes = [
    '',
    '/about',
    '/experience',
    '/education',
    '/projects',
    '/publications',
    '/research',
    '/skills',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 