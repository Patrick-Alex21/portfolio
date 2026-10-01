import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    period: z.string(),
    shortDesc: z.string(),
    tags: z.array(z.string()),
    images: z.array(z.string()).default([]),
    link: z.string().url().optional(),
  }),
});

export const collections = { projects };
