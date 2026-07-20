import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '@/site.config';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: `Blog | ${siteConfig.siteName}`,
    description: 'Dicas e informações sobre defeitos, manutenção e marcas de máquinas de lavar.',
    site: context.site ?? siteConfig.siteUrl,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}/`,
      categories: [post.data.category],
    })),
    customData: '<language>pt-BR</language>',
  });
}
