import type { IconName } from '@/components/icons/icon-names';

export interface PricingFactor {
  icon: IconName;
  title: string;
  description: string;
}

export const pricingFactors: PricingFactor[] = [
  {
    icon: 'tag',
    title: 'Marca e Modelo do Equipamento',
    description: 'Cada fabricante utiliza componentes e sistemas diferentes, o que influencia o custo do reparo.',
  },
  {
    icon: 'search',
    title: 'Tipo e Complexidade do Defeito',
    description: 'Falhas simples tendem a ter reparo mais rápido, enquanto defeitos combinados exigem mais tempo técnico.',
  },
  {
    icon: 'cog',
    title: 'Necessidade de Substituição de Peças',
    description: 'O valor e a disponibilidade do componente necessário impactam diretamente o orçamento final.',
  },
  {
    icon: 'clock',
    title: 'Idade e Estado de Conservação',
    description: 'Máquinas mais antigas ou desgastadas podem precisar de mais de uma intervenção.',
  },
  {
    icon: 'clipboard-list',
    title: 'Disponibilidade dos Componentes',
    description: 'Peças menos comuns podem levar mais tempo para localizar, o que também afeta o prazo e o custo.',
  },
];
