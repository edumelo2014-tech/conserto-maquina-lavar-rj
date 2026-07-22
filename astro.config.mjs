import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.consertomaquinadelavarnorj.com.br',
  trailingSlash: 'always',
  integrations: [sitemap()],
  image: {
    remotePatterns: [],
  },
  build: {
    format: 'directory',
  },
});
