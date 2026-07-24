import type { IconName } from '@/components/icons/icon-names';

export interface ServiceProcessStep {
  icon: IconName;
  label: string;
}

export const serviceProcessSteps: ServiceProcessStep[] = [
  { icon: 'chat', label: 'Contato pelo WhatsApp com marca, modelo e defeito' },
  { icon: 'calendar', label: 'Agendamento do atendimento em domicílio' },
  { icon: 'search', label: 'Diagnóstico técnico presencial' },
  { icon: 'quote', label: 'Apresentação do orçamento' },
  { icon: 'wrench', label: 'Execução do reparo após aprovação' },
  { icon: 'check-circle', label: 'Teste final de funcionamento' },
];
