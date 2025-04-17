const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Website base URL
const BASE_URL = 'https://www.avdevelopment.in';

// Extract all routes from your App.js structure
const routes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString()
  },
  {
    url: '/services',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  {
    url: '/founder',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString()
  },
  // Add all section anchors (hash links)
  {
    url: '/#skills',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/#facilities',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/#plans',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/#projects',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/#connect',
    changefreq: 'monthly',
    priority: 0.6
  }
];

// Generate sitemap
async function generateSitemap() {
  try {
    const sitemapStream = new SitemapStream({
      hostname: BASE_URL,
      xmlns: {
        news: false,
        xhtml: true,
        image: false,
        video: false
      }
    });

    const writeStream = fs.createWriteStream('./public/sitemap.xml');
    sitemapStream.pipe(writeStream);

    // Add all routes
    routes.forEach(route => {
      sitemapStream.write(route);
    });

    sitemapStream.end();

    // Wait for the stream to finish
    await streamToPromise(sitemapStream);
    console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  } catch (e) {
    console.error('❌ Error generating sitemap:', e);
  }
}

generateSitemap();