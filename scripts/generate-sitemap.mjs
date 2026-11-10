import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const site = 'https://utkarshkarale.github.io';
const today = new Date().toISOString().split('T')[0];

// Helper to get real last modified date from Git for each individual page/file
function getFileLastMod(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const gitDate = execSync(`git log -1 --format=%cd --date=short -- "${filePath}"`, { encoding: 'utf-8' }).trim();
      if (gitDate) return gitDate;
      const stat = fs.statSync(filePath);
      return stat.mtime.toISOString().split('T')[0];
    }
  } catch (e) {
    // fallback
  }
  return today;
}

// 40 Individual Site Routes mapped to their exact source code file
const pageDefinitions = [
  // Flagship & Core Landing Pages
  { loc: `${site}/`, file: 'src/pages/index.astro', priority: '1.0', changefreq: 'weekly' },
  { loc: `${site}/flowrupee`, file: 'src/pages/flowrupee/index.astro', priority: '1.0', changefreq: 'weekly' },
  { loc: `${site}/projects/flowrupee`, file: 'src/content/projects/flowrupee.md', priority: '1.0', changefreq: 'weekly' },
  { loc: `${site}/projects/statusgrid`, file: 'src/content/projects/statusgrid.md', priority: '1.0', changefreq: 'weekly' },
  { loc: `${site}/leadpluck`, file: 'src/pages/leadpluck/index.astro', priority: '1.0', changefreq: 'weekly' },
  { loc: `${site}/webstickly`, file: 'src/pages/webstickly/index.astro', priority: '1.0', changefreq: 'weekly' },

  // Content Hubs
  { loc: `${site}/projects/`, file: 'src/pages/projects/index.astro', priority: '0.9', changefreq: 'weekly' },
  { loc: `${site}/blog/`, file: 'src/pages/blog/index.astro', priority: '0.9', changefreq: 'weekly' },

  // Flagship Technical Articles
  { loc: `${site}/blog/automatic-expense-tracking-sms-india/`, file: 'src/content/blog/automatic-expense-tracking-sms-india.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/blog/why-personal-finance-tracking-fails-in-india-flowrupee/`, file: 'src/content/blog/why-personal-finance-tracking-fails-in-india-flowrupee.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/blog/building-statusgrid-web-technologies-for-festival-posters/`, file: 'src/content/blog/building-statusgrid-web-technologies-for-festival-posters.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/blog/understanding-ai-image-metadata/`, file: 'src/content/blog/understanding-ai-image-metadata.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/blog/webstickly-launch-and-automations/`, file: 'src/content/blog/webstickly-launch-and-automations.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/blog/ssh-cloudflare-tunnel/`, file: 'src/content/blog/ssh-cloudflare-tunnel.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/blog/lalpari-nostalgia-website/`, file: 'src/content/blog/lalpari-nostalgia-website.mdx', priority: '0.8', changefreq: 'monthly' },
  { loc: `${site}/blog/google-chat-webhook-bug/`, file: 'src/content/blog/google-chat-webhook-bug.md', priority: '0.8', changefreq: 'monthly' },
  { loc: `${site}/blog/oasis-infobyte-internship/`, file: 'src/content/blog/oasis-infobyte-internship.md', priority: '0.7', changefreq: 'yearly' },
  { loc: `${site}/blog/termux-ssh-tunnel/`, file: 'src/content/blog/termux-ssh-tunnel.md', priority: '0.7', changefreq: 'yearly' },

  // Individual Projects & Products
  { loc: `${site}/projects/cleanupload/`, file: 'src/content/projects/cleanupload.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/projects/monitoro/`, file: 'src/content/projects/monitoro.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/projects/leadpluck/`, file: 'src/content/projects/leadpluck.md', priority: '0.85', changefreq: 'monthly' },
  { loc: `${site}/projects/cartext-ai/`, file: 'src/content/projects/cartext-ai.md', priority: '0.8', changefreq: 'monthly' },
  { loc: `${site}/projects/bitqr/`, file: 'src/content/projects/bitqr.md', priority: '0.8', changefreq: 'monthly' },
  { loc: `${site}/projects/shuddhainbox/`, file: 'src/content/projects/shuddhainbox.md', priority: '0.8', changefreq: 'monthly' },
  { loc: `${site}/projects/era-voice-assistant/`, file: 'src/content/projects/era-voice-assistant.md', priority: '0.75', changefreq: 'monthly' },
  { loc: `${site}/projects/facial-expression-detection/`, file: 'src/content/projects/facial-expression-detection.md', priority: '0.75', changefreq: 'monthly' },
  { loc: `${site}/projects/finance-flow/`, file: 'src/content/projects/finance-flow.md', priority: '0.75', changefreq: 'monthly' },
  { loc: `${site}/projects/contact-manager/`, file: 'src/content/projects/contact-manager.md', priority: '0.7', changefreq: 'yearly' },
  { loc: `${site}/projects/cricket-game/`, file: 'src/content/projects/cricket-game.md', priority: '0.7', changefreq: 'yearly' },
  { loc: `${site}/projects/guess-the-number/`, file: 'src/content/projects/guess-the-number.md', priority: '0.7', changefreq: 'yearly' },
  { loc: `${site}/projects/weather-app/`, file: 'src/content/projects/weather-app.md', priority: '0.7', changefreq: 'yearly' },

  // Standalone App Experiences & Utilities
  { loc: `${site}/daymark/`, file: 'src/pages/daymark/index.astro', priority: '0.8', changefreq: 'monthly' },
  { loc: `${site}/webstickly/wall/`, file: 'src/pages/webstickly/wall.astro', priority: '0.8', changefreq: 'weekly' },
  { loc: `${site}/autotune/`, file: 'src/pages/autotune/index.astro', priority: '0.75', changefreq: 'monthly' },
  { loc: `${site}/spidy/`, file: 'src/pages/spidy.astro', priority: '0.75', changefreq: 'monthly' },

  // Privacy, Legal & Policies
  { loc: `${site}/flowrupee/policy/`, file: 'src/pages/flowrupee/policy.astro', priority: '0.6', changefreq: 'monthly' },
  { loc: `${site}/flowrupee/delete-account/`, file: 'src/pages/flowrupee/delete-account.astro', priority: '0.6', changefreq: 'monthly' },
  { loc: `${site}/leadpluck/privacy/`, file: 'src/pages/leadpluck/privacy.astro', priority: '0.6', changefreq: 'monthly' },
  { loc: `${site}/webstickly/privacy/`, file: 'src/pages/webstickly/privacy.astro', priority: '0.6', changefreq: 'monthly' },
  { loc: `${site}/daymark/privacy/`, file: 'src/pages/daymark/privacy.astro', priority: '0.6', changefreq: 'monthly' },
];

const pages = pageDefinitions.map(p => ({
  ...p,
  lastmod: getFileLastMod(p.file),
}));

// Build version stamp
let buildVersion = '';
try {
  buildVersion = execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim();
} catch (e) {
  buildVersion = Date.now().toString(36);
}
if (!buildVersion) buildVersion = Date.now().toString(36);

const versionPayload = JSON.stringify({
  version: buildVersion,
  buildTime: new Date().toISOString(),
  date: today
}, null, 2);

function generateUrlsetXml(withStylesheet = false) {
  const xslt = withStylesheet ? '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n' : '';
  return `<?xml version="1.0" encoding="UTF-8"?>
${xslt}<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
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
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}/sitemap-0.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${site}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;
}

// Write to public folder
const publicDir = path.resolve('public');
fs.writeFileSync(path.join(publicDir, 'sitemap-0.xml'), generateUrlsetXml(true));
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), generateUrlsetXml(true));
fs.writeFileSync(path.join(publicDir, 'sitemap-index.xml'), generateSitemapIndexXml());
fs.writeFileSync(path.join(publicDir, 'version.json'), versionPayload);

// Write to dist folder if it exists
const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'sitemap-0.xml'), generateUrlsetXml(true));
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), generateUrlsetXml(true));
  fs.writeFileSync(path.join(distDir, 'sitemap-index.xml'), generateSitemapIndexXml());
  fs.writeFileSync(path.join(distDir, 'version.json'), versionPayload);
  if (fs.existsSync(path.join(publicDir, 'sitemap.xsl'))) {
    fs.copyFileSync(path.join(publicDir, 'sitemap.xsl'), path.join(distDir, 'sitemap.xsl'));
  }
}

console.log(`Generated comprehensive sitemaps with ${pages.length} unique URLs and dynamic git lastmod dates!`);
