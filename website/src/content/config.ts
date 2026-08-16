import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const dateStr = z.preprocess((val) => {
  if (val instanceof Date) return val.toISOString().slice(0, 10);
  return val;
}, z.string());

const changelog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/changelog',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    version: z.string(),
    date: dateStr.optional().default(''),
    locale: z.enum(['zh-Hans', 'en']),
    isUnreleased: z.boolean().default(false),
  }),
});

const legal = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/legal',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    slug: z.enum(['privacy', 'terms']),
    locale: z.enum(['zh-Hans', 'en']),
    title: z.string(),
    version: z.string(),
    effectiveDate: dateStr,
    description: z.string(),
  }),
});

export const collections = { changelog, legal };
