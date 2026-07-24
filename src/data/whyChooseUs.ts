import type { IconName } from '@/components/icons/icon-names';

export interface WhyChooseUsItem {
  icon: IconName;
  title: string;
  description: string;
}

export const whyChooseUs: WhyChooseUsItem[] = [
  { icon: 'calendar', title: 'Experiência Desde 2010', description: 'Vivência prática adquirida ao longo de anos de atendimento a máquinas de lavar residenciais.' },
  { icon: 'home-visit', title: 'Atendimento em Domicílio', description: 'Avaliação e, na maioria dos casos, reparo realizado no próprio local.' },
  { icon: 'quote', title: 'Orçamento Antes do Serviço', description: 'O valor é apresentado e aprovado antes da execução de qualquer reparo.' },
  { icon: 'search', title: 'Diagnóstico Técnico', description: 'A causa do defeito é investigada antes da indicação de qualquer solução.' },
  { icon: 'shield', title: 'Garantia Conforme o Reparo', description: 'Prazo e cobertura são informados de acordo com o serviço e a peça utilizada.' },
  { icon: 'chat', title: 'Atendimento Direto pelo WhatsApp', description: 'Comunicação simples, direta e sem burocracia durante todo o processo.' },
];
