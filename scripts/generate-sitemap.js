import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';

if (!projectId) {
    console.error('Error: VITE_SANITY_PROJECT_ID not found in environment variables.');
    process.exit(1);
}

const client = createClient({
    projectId,
    dataset,
    useCdn: false, // Ensure fresh data
    apiVersion: '2023-05-03',
});

const SITE_URL = 'https://www.dbpro.digital';

const staticRoutes = [
    '/',
    '/about',
    '/services',
    '/why-us',
    '/portfolio',
    '/blog',
    '/contact',
    '/terms',
    '/privacy',
];

async function generateSitemap() {
    console.log('Generating sitemap...');

    try {
        // Fetch dynamic routes (blog posts)
        const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, _updatedAt }`);

        const dynamicRoutes = posts.map(post => ({
            url: `/blog/${post.slug}`,
            lastModified: post._updatedAt,
        }));

        const allRoutes = [
            ...staticRoutes.map(route => ({ url: route, lastModified: new Date().toISOString() })),
            ...dynamicRoutes
        ];

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
                .map((route) => {
                    return `
  <url>
    <loc>${SITE_URL}${route.url}</loc>
    <lastmod>${new Date(route.lastModified).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.url === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
                })
                .join('')}
</urlset>`;

        const publicDir = path.resolve(__dirname, '../public');
        // Ensure public folder exists
        if (!fs.existsSync(publicDir)) {
            fs.mkdirSync(publicDir);
        }

        fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
        console.log(`✅ Sitemap generated at ${path.join(publicDir, 'sitemap.xml')}`);
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
