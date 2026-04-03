export async function GET() {
  const pages = [
    '', 
    '/about-me', 
    '/ceremony-planning', 
    '/music-services', 
    '/vow-renewal', 
    '/gallery', 
    '/contact-me'
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
    >
      ${pages.map((page) => `
        <url>
          <loc>https://matrimoniesbymary.com${page}</loc>
          <changefreq>monthly</changefreq>
          <priority>${page === '' ? '1.0' : '0.8'}</priority>
        </url>
      `).join('')}
    </urlset>
  `.trim();

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}