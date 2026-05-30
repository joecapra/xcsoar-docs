import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/docs' }),
  schema: z.object({
    title: z.string(),
    sidebar_position: z.number(),
    id: z.string().optional(),
  }),
});

export const collections = { docs };
