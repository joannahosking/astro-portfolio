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

export const collections = {
  projects: projectsCollection,
};
