import type { ImageMetadata } from 'astro';
import { images } from '@/assets/images';

export interface BrandInfo {
  image: ImageMetadata;
  alt: string;
  title: string;
  description: string;
  href?: string;
}

export const brands: BrandInfo[] = [
  {
    image: images.marcaBrastemp,
    alt: 'Máquinas de lavar Brastemp atendidas',
    title: 'Máquinas de Lavar Brastemp',
    href: '/conserto-de-maquina-de-lavar-brastemp-rj/',
    description:
      'Atendimento a diferentes linhas e modelos, de lavadoras convencionais a versões com mais tecnologia embarcada.',
  },
  {
    image: images.marcaEletrolux,
    alt: 'Máquinas de lavar Electrolux atendidas',
    title: 'Máquinas de Lavar Electrolux',
    href: '/conserto-de-maquina-de-lavar-electrolux-rj/',
    description:
      'Avaliação de falhas elétricas, mecânicas e de programação em modelos populares da marca.',
  },
  {
    image: images.marcaConsul,
    alt: 'Máquinas de lavar Consul atendidas',
    title: 'Máquinas de Lavar Consul',
    href: '/conserto-de-maquina-de-lavar-consul-rj/',
    description: 'Diagnóstico de defeitos comuns em lavadoras de diferentes capacidades e faixas de uso.',
  },
  {
    image: images.marcaSamsung,
    alt: 'Máquinas de lavar Samsung atendidas',
    title: 'Máquinas de Lavar Samsung',
    href: '/conserto-de-maquina-de-lavar-samsung-rj/',
    description:
      'Suporte técnico a modelos com painéis eletrônicos e sistemas de centrifugação mais recentes.',
  },
];
