import fs from 'node:fs';
import path from 'node:path';

const site = 'https://utkarshkarale.github.io';
const today = new Date().toISOString().split('T')[0];

const pages = [
  // Flagship & Core Landing Pages (Priority 1.0)
  { loc: `${site}/`, priority: '1.0', changefreq: 'weekly', lastmod: today },
  { loc: `${site}/projects/flowrupee`, priority: '1.0', changefreq: 'weekly', lastmod: today },
  { loc: `${site}/projects/statusgrid`, priority: '1.0', changefreq: 'weekly', lastmod: today },
  { loc: `${site}/leadpluck`, priority: '1.0', changefreq: 'weekly', lastmod: today },
  { loc: `${site}/webstickly`, priority: '1.0', changefreq: 'weekly', lastmod: today },

  // Hub Pages (Priority 0.9)
  { loc: `${site}/projects/`, priority: '0.9', changefreq: 'weekly', lastmod: today },
  { loc: `${site}/blog/`, priority: '0.9', changefreq: 'weekly', lastmod: today },

  // Flagship Technical Articles (Priority 0.85)
  { loc: `${site}/blog/automatic-expense-tracking-sms-india/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/why-personal-finance-tracking-fails-in-india-flowrupee/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/building-statusgrid-web-technologies-for-festival-posters/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/understanding-ai-image-metadata/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/webstickly-launch-and-automations/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/ssh-cloudflare-tunnel/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/lalpari-nostalgia-website/`, priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/google-chat-webhook-bug/`, priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/blog/oasis-infobyte-internship/`, priority: '0.7', changefreq: 'yearly', lastmod: today },
  { loc: `${site}/blog/termux-ssh-tunnel/`, priority: '0.7', changefreq: 'yearly', lastmod: today },

  // Individual Projects & Products (Priority 0.85 - 0.75)
  { loc: `${site}/projects/cleanupload/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/monitoro/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/leadpluck/`, priority: '0.85', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/cartext-ai/`, priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/bitqr/`, priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/shuddhainbox/`, priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/era-voice-assistant/`, priority: '0.75', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/facial-expression-detection/`, priority: '0.75', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/finance-flow/`, priority: '0.75', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/projects/contact-manager/`, priority: '0.7', changefreq: 'yearly', lastmod: today },
  { loc: `${site}/projects/cricket-game/`, priority: '0.7', changefreq: 'yearly', lastmod: today },
  { loc: `${site}/projects/guess-the-number/`, priority: '0.7', changefreq: 'yearly', lastmod: today },
  { loc: `${site}/projects/weather-app/`, priority: '0.7', changefreq: 'yearly', lastmod: today },

  // Standalone App Experiences & Utilities (Priority 0.8)
  { loc: `${site}/daymark/`, priority: '0.8', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/webstickly/wall/`, priority: '0.8', changefreq: 'weekly', lastmod: today },
  { loc: `${site}/autotune/`, priority: '0.75', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/spidy/`, priority: '0.75', changefreq: 'monthly', lastmod: today },

  // Privacy, Legal & Account Deletion Policies (Priority 0.6)
  { loc: `${site}/flowrupee/policy/`, priority: '0.6', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/flowrupee/delete-account/`, priority: '0.6', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/leadpluck/privacy/`, priority: '0.6', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/webstickly/privacy/`, priority: '0.6', changefreq: 'monthly', lastmod: today },
  { loc: `${site}/daymark/privacy/`, priority: '0.6', changefreq: 'monthly', lastmod: today },
];

function generateSitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages
  .map(
    p => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

function generateSitemapIndexXml() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}/sitemap-0.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Write to public folder
const publicDir = path.resolve('public');
fs.writeFileSync(path.join(publicDir, 'sitemap-0.xml'), generateSitemapXml());
fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), generateSitemapIndexXml());

// Write to dist folder if it exists
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap-0.xml'), generateSitemapXml());
  fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), generateSitemapIndexXml());
}

console.log(`Generated comprehensive sitemap with ${pages.length} prioritized URLs!`);
