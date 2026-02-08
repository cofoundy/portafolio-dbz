import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.enum(['fintech', 'media', 'wellness', 'tech', 'education']),
    role: z.string(),
    metrics: z.string().optional(),
    url: z.string().url().optional(),
    logo: z.string(),
    gridSize: z.enum(['small', 'medium', 'large']).default('medium'),
    order: z.number(),
    active: z.boolean().default(true),
  }),
});

const books = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    synopsis: z.string(),
    isbn: z.string().optional(),
    publisher: z.string(),
    date: z.string(),
    cover: z.string(),
    buyLinks: z.array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      })
    ).default([]),
    bestseller: z.boolean().default(false),
  }),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({}).passthrough(),
});

export const collections = { projects, books, site };
