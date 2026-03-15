import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    pubDate: z.coerce.date(),
    author: z.string().default('NAHJ Editorial Team'),
    category: z.string().default('Research'),
    type: z.string().default('Essay'),
    readingTime: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
