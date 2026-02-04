import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

if (!projectId) {
    console.error("Configuration must contain `projectId`. Check your .env file.");
}

export const client = createClient({
    projectId: projectId || 'unspecified-project-id', // Fallback to prevent crash
    dataset: dataset,
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}
