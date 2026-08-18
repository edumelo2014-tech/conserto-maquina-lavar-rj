import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.consertomaquinadelavarnorj.com.br',
  trailingSlash: 'always',
  redirects: {
    '/blog/maquina-de-lavar-fazendo-muito-barulho-possiveis-causas/':
      '/blog/barulho-estranho-na-maquina-de-lavar-o-que-pode-ser/',
    '/blog/maquina-de-lavar-nao-centrifuga-o-que-verificar-antes-de-trocar-o-motor/':
      '/blog/maquina-de-lavar-nao-centrifuga-causas-comuns/',
  },
  integrations: [sitemap()],
  image: {
    remotePatterns: [],
  },
  build: {
    format: 'directory',
  },
});
