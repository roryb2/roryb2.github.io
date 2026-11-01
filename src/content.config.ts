import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      // Shown instead of the year when set, e.g. '2021–2022'.
      period: z.string().optional(),
      role: z.string(),
      category: z.enum(['analytics-engineering', 'data-science', 'bi']),
      tags: z.array(z.string()).default([]),
      stack: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      // Lower numbers appear first. Projects with the same order fall back to newest first.
      order: z.number().default(100),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      links: z
        .object({
          repo: z.url().optional(),
          demo: z.url().optional(),
          notebook: z.url().optional(),
          paper: z.url().optional(),
        })
        .default({}),
      draft: z.boolean().default(false),
    }),
});

const lab = defineCollection({
  loader: glob({ base: './src/content/lab', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      status: z.enum(['active', 'paused', 'shipped']),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      link: z.url().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects, lab };
