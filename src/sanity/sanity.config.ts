import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schema';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'your-project-id';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export default defineConfig({
    name: 'default',
    title: 'Dream Big Studio',

    projectId,
    dataset,

    plugins: [structureTool()],

    schema: {
        types: schemaTypes,
    },

    basePath: '/studio'
});
