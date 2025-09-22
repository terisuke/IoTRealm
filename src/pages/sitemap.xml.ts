import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://iotrealm-by-cor-inc.pages.dev';

export const GET: APIRoute = async () => {
  // Get all blog posts
  const posts = await getCollection('blog');

  // Static pages
  const staticPages = [
    '',
    'about',
    'services',
    'pricing',
    'articles',
    'services/seo',
    'privacy',
    'terms'
  ];

  // Language codes
  const languages = ['ja', 'en', 'es', 'zh'];

  // Generate URLs for static pages
  const staticUrls = staticPages.flatMap(page => {
    const urls = [];

    // Default (Japanese) URL
    urls.push({
      url: `${site}/${page}`,
      lastmod: new Date().toISOString(),
      changefreq: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? '1.0' : '0.8'
    });

    // Localized URLs
    languages.forEach(lang => {
      if (lang !== 'ja') { // Japanese is default, no prefix needed
        urls.push({
          url: `${site}/${lang}/${page}`,
          lastmod: new Date().toISOString(),
          changefreq: page === '' ? 'daily' : 'weekly',
          priority: page === '' ? '1.0' : '0.8'
        });
      }
    });

    return urls;
  });

  // Generate URLs for blog posts
  const blogUrls = posts.map(post => ({
    url: `${site}/articles/${post.slug}`,
    lastmod: post.data.pubDate ? new Date(post.data.pubDate).toISOString() : new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.7'
  }));

  // Combine all URLs
  const allUrls = [...staticUrls, ...blogUrls];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allUrls.map(({ url, lastmod, changefreq, priority }) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('')}
</urlset>`.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};