// Builds sitemap.xml from the pages in src/pages. Pages listed in EXCLUDE stay out.
const SITE = 'https://lvgwildlife.com';
const EXCLUDE = ['/thanks'];

export async function GET() {
  const files = Object.keys(import.meta.glob('./**/*.{astro,md}'));
  const paths = files
    .map((f) => f.replace(/^\.\//, '/').replace(/\.(astro|md)$/, '').replace(/\/index$/, '/'))
    .filter((p) => !p.includes('[') && !EXCLUDE.includes(p))
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)));
  const today = new Date().toISOString().slice(0, 10);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
