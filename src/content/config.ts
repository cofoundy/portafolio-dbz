import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    categoryLabel: z.string(),
    role: z.string(),
    metrics: z.string().optional(),
    achievements: z.array(z.string()).default([]),
    url: z.string().url().optional(),
    logo: z.string(),
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
    order: z.number(),
  }),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({
    // personal.json
    name: z.string().optional(),
    shortName: z.string().optional(),
    roles: z.array(z.string()).optional(),
    tagline: z.string().optional(),
    bio: z.string().optional(),
    socialLinks: z.array(
      z.object({
        platform: z.string(),
        url: z.string(),
        label: z.string(),
      })
    ).optional(),
    email: z.string().email().optional(),
    credibilityLogos: z.array(z.string()).optional(),
    // stats.json
    metrics: z.array(
      z.object({
        label: z.string(),
        display: z.string(),
      })
    ).optional(),
  }),
});

const story = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
      title: z.string(),
      subtitle: z.string(),
      body: z.string(),
      highlight: z.object({
        value: z.string(),
        label: z.string(),
      }).nullable(),
      image: z.union([z.string(), z.array(z.string())]).nullable(),
      cover: z.string().nullable().optional(),
      imageLink: z.string().url().nullable().optional(),
    })
  ),
});

export const collections = { projects, books, site, story };
