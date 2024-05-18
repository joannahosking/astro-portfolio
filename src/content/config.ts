import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      shortname: z.string(),
      description: z.string(),
      icon: image(),
    }),
});

const postsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      featuredImage: image(),
    }),
});

export const collections = {
  projects: projectsCollection,
  posts: postsCollection,
};
