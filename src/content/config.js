import { defineCollection, z } from "astro:content";

// const blogCollection = defineCollection({
//   schema: ({ image }) => z.object({
//     title: z.string(),
//     cover: image(),
//   }),
// });

// author: Lana Steiner
// cover: post3-banner.png
// publishDate: 2023-01-01
// title: Building your API Stack
// subheading: The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
// tags:
//   - Design
//   - Research
// aliases:
// cssclasses:

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
        author: z.string(),
        cover: image(),
        publishDate: z.date(),  // z.string().transform((str) => new Date(str)),
        title: z.string(),
        subheading: z.string(),
        tags: z.array(z.string()),
        // aliases: z.string().optional(),
        // cssclasses: z.string().optional(),
    }),
});

export const collections = {
  blog: blogCollection,
};