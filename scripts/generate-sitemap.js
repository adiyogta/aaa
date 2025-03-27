const fs = require('fs');
const path = require('path');
const { globSync } = require('glob');

// Your site URL
const WEBSITE_URL = 'https://kicauburung.my.id';
const PAGES_DIR = path.join(process.cwd(), 'src/app');

// Get the current date in YYYY-MM-DD format
const currentDate = new Date().toISOString().split('T')[0];

// Function to generate sitemap
function generateSitemap() {
  try {
    // Get all page routes (excluding api routes, layout files, etc.)
    const pageFiles = globSync(`${PAGES_DIR}/**/page.{js,jsx,ts,tsx}`);
    
    const pages = pageFiles.map(page => {
      // Convert file path to route
      const route = page
        .replace(PAGES_DIR, '')
        .replace(/\/page\.(js|jsx|ts|tsx)$/, '')
        .replace(/\/\(.*\)\//, '/') // Handle route groups
        .replace(/\[([^\]]+)\]/g, ':$1'); // Convert [param] to :param
      
      return route === '' ? '/' : route;
    });

    // Create sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${WEBSITE_URL}${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

    // Write sitemap to public directory
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Create a fallback sitemap with just the homepage
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${WEBSITE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), fallbackSitemap);
    console.log('Created fallback sitemap with homepage only');
  }
}

generateSitemap();