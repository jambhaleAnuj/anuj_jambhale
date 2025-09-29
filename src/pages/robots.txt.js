export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://www.jambhaleanuj.tech/sitemap.xml

# Specific optimization for search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}