import { globby } from 'globby';
import prettier from 'prettier';
import fs from 'fs';
import path from 'path';
import { getPosts, getCategories } from '../../lib/wordpress';

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

// Function to get WordPress blog posts
async function getWordPressPosts() {
  try {
    // Get all posts (up to 100 for sitemap)
    const { posts } = await getPosts(1, 100);
    
    // Map posts to URLs
    return posts.map(post => `${WEBSITE_URL}/blog/${post.slug}`);
  } catch (error) {
    console.error('Error fetching WordPress posts for sitemap:', error);
    return [];
  }
}

// Function to get WordPress categories
async function getWordPressCategories() {
  try {
    // Get all categories
    const categories = await getCategories();
    
    // Map categories to URLs
    return categories.map(category => `${WEBSITE_URL}/blog/category/${category.slug}`);
  } catch (error) {
    console.error('Error fetching WordPress categories for sitemap:', error);
    return [];
  }
}

// Function to generate sitemap XML
async function generateSitemap(pages) {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((url) => {
          // Set priority based on URL type
          let priority = '0.7';
          let changefreq = 'monthly';
          
          // Services pages get higher priority
          if (url.includes('/services/')) {
            priority = '0.8';
            changefreq = 'weekly';
          }
          
          // Blog posts get higher priority and more frequent updates
          if (url.includes('/blog/') && !url.includes('/category/')) {
            priority = '0.9';
            changefreq = 'weekly';
          }
          
          // Blog index and category pages
          if (url.endsWith('/blog') || url.includes('/blog/category/')) {
            priority = '0.8';
            changefreq = 'weekly';
          }
          
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
    
    // Get WordPress blog posts
    const blogPosts = await getWordPressPosts();
    
    // Get WordPress categories
    const blogCategories = await getWordPressCategories();

    // Combine all pages
    const allPages = [
      ...staticPages,
      ...dynamicPages,
      ...blogPosts,
      ...blogCategories
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
