import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['Defeitos', 'Manutenção', 'Marcas', 'Guias']),
      publishDate: z.date(),
      updatedDate: z.date().optional(),
      readingTime: z.string(),
      image: image(),
      imageAlt: z.string(),
      author: z.string().default('Equipe Editorial'),
      relatedSlugs: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
