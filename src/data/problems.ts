import type { IconName } from '@/components/icons/icon-names';

export interface ProblemItem {
  icon: IconName;
  title: string;
  description: string;
}

export const problems: ProblemItem[] = [
  {
    icon: 'power-off',
    title: 'Máquina de Lavar Não Liga',
    description:
      'Pode estar relacionado à alimentação elétrica, à trava da porta ou a componentes internos do painel.',
  },
  {
    icon: 'gauge',
    title: 'Máquina de Lavar Não Centrifuga',
    description:
      'Nem sempre indica motor queimado — carga desequilibrada, tampa e sensores também podem influenciar.',
  },
  {
    icon: 'droplet',
    title: 'Máquina de Lavar Não Enche',
    description:
      'Pode envolver a válvula de entrada de água, a pressão da rede ou o registro de abastecimento.',
  },
  {
    icon: 'cog',
    title: 'Máquina de Lavar Não Drena',
    description:
      'Costuma estar relacionado à bomba de drenagem, à mangueira de saída ou a obstruções no filtro.',
  },
  {
    icon: 'droplet',
    title: 'Máquina de Lavar Vazando Água',
    description:
      'Pode ter origem em mangueiras, vedações, excesso de sabão ou na instalação do equipamento.',
  },
  {
    icon: 'volume',
    title: 'Máquina de Lavar Fazendo Barulho',
    description:
      'Muitas vezes associado ao nivelamento, à distribuição da carga ou a peças com desgaste.',
  },
  {
    icon: 'wrench',
    title: 'Tambor da Máquina Não Gira',
    description:
      'Pode envolver a correia, o motor, a placa eletrônica ou o acoplamento do tambor.',
  },
  {
    icon: 'alert-triangle',
    title: 'Painel da Máquina Apresenta Erro',
    description:
      'Os códigos de erro ajudam a orientar o diagnóstico, mas dependem de confirmação técnica.',
  },
];
