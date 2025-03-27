import { globby } from 'globby';
import prettier from 'prettier';
import fs from 'fs';
import path from 'path';

const WEBSITE_URL = 'https://www.technovitasolution.in';
const PLATFORMS = ['amazon', 'flipkart', 'meesho','myntra','nykaa','ajio','tatacliq','firstcry','aza','zepto','blinkit'];
const SERVICES = [
  'account-management',
  'brand-documentation',
  'ecommerce-advertising',
  'ecommerce-consultation',
  'ecommerce-payment-reconciliation',
  'ecommerce-seller-onboarding',
  'seo-services-and-organic-growth-strategies',
  'store-setup-and-branding-services'
];

// Function to get all static pages
async function getStaticPages() {
  const pages = await globby([
    'src/pages/**/*.{js,jsx}',
    '!src/pages/_*.{js,jsx}',
    '!src/pages/api',
    '!src/pages/**/[*.{js,jsx}',
  ]);

  return pages.map((page) => {
    const path = page
      .replace('src/pages', '')
      .replace(/\.(js|jsx)$/, '')
      .replace(/\/index$/, '');
    return `${WEBSITE_URL}${path}`;
  });
}

// Function to generate dynamic service pages
function getDynamicServicePages() {
  const dynamicPages = [];
  
  // Add service index pages
  SERVICES.forEach(service => {
    dynamicPages.push(`${WEBSITE_URL}/services/${service}`);
  });

  // Add platform-specific service pages
  SERVICES.forEach(service => {
    PLATFORMS.forEach(platform => {
      dynamicPages.push(`${WEBSITE_URL}/services/${service}/${platform}`);
    });
  });

  return dynamicPages;
}

// Function to generate sitemap XML
async function generateSitemap(pages) {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((url) => {
          // Set priority based on URL type
          const priority = url.includes('/services/') ? '0.8' : '0.7';
          const changefreq = url.includes('/services/') ? 'weekly' : 'monthly';
          
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  // Format the XML
  const formatted = await prettier.format(sitemap, {
    parser: 'html',
    printWidth: 120,
  });

  return formatted;
}

export default async function handler(req, res) {
  try {
    // Get all static pages
    const staticPages = await getStaticPages();

    // Get all dynamic service pages
    const dynamicPages = getDynamicServicePages();

    // Combine all pages
    const allPages = [
      ...staticPages,
      ...dynamicPages
    ];

    // Generate sitemap
    const sitemap = await generateSitemap(allPages);

    // Set headers
    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    
    // Send the response
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).json({ error: 'Error generating sitemap' });
  }
}
