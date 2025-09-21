import { defineCollection, z } from 'astro:content';

// Определяем коллекцию для блога
const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        category: z.string(),
        isFeatured: z.boolean().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
};