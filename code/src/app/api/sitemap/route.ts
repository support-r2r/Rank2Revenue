export const GET = async () => {
    const urls = [
      'https://rank2revenue.com.au/',
      'https://rank2revenue.com.au/services',
      'https://rank2revenue.com.au/services/website-development',
      'https://rank2revenue.com.au/services/seo-optimization',
      'https://rank2revenue.com.au/services/social-media-management',
      'https://rank2revenue.com.au/services/content-creation',
      'https://rank2revenue.com.au/services/email-marketing',
      'https://rank2revenue.com.au/about',
      'https://rank2revenue.com.au/contact',
    ];
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            (url) => `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
          </url>
        `
          )
          .join('')}
      </urlset>`;
  
    return new Response(sitemap.trim(), {
      headers: {
        'Content-Type': 'application/xml', // Correct Content-Type for XML
      },
    });
  };
  