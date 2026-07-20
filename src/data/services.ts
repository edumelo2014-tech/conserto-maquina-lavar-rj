import type { IconName } from '@/components/icons/icon-names';

export interface ServiceItem {
  slug: string;
  icon: IconName;
  title: string;
  description: string;
  longDescription: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'conserto',
    icon: 'wrench',
    title: 'Conserto de Máquina de Lavar',
    description:
      'Reparo de lavadoras com defeitos elétricos, mecânicos ou eletrônicos, após diagnóstico técnico.',
    longDescription:
      'Atendimento voltado à correção de falhas identificadas na máquina de lavar, sempre precedido de uma avaliação que confirma a causa do problema antes da execução do serviço.',
  },
  {
    slug: 'diagnostico',
    icon: 'search',
    title: 'Diagnóstico de Defeitos',
    description:
      'Identificação da causa real do problema antes de qualquer intervenção ou troca de peça.',
    longDescription:
      'Verificação técnica dos componentes elétricos, mecânicos e eletrônicos da lavadora para apontar a origem do defeito com mais precisão, evitando trocas desnecessárias.',
  },
  {
    slug: 'manutencao-preventiva',
    icon: 'shield',
    title: 'Manutenção Preventiva',
    description:
      'Verificação periódica que ajuda a reduzir a chance de falhas e prolongar a vida útil do equipamento.',
    longDescription:
      'Inspeção de mangueiras, filtros, vedações e componentes de desgaste natural, contribuindo para o bom funcionamento contínuo da máquina.',
  },
  {
    slug: 'reparo-eletrico-eletronico',
    icon: 'bolt',
    title: 'Reparo Elétrico e Eletrônico',
    description:
      'Avaliação de fiação, placas e sensores relacionados a falhas de energia, painel ou comando.',
    longDescription:
      'Análise de componentes elétricos e eletrônicos que podem causar travamentos, erros no painel ou ausência de funcionamento da lavadora.',
  },
  {
    slug: 'troca-de-pecas',
    icon: 'cog',
    title: 'Troca de Peças e Componentes',
    description:
      'Substituição de peças desgastadas ou danificadas, conforme identificado no diagnóstico.',
    longDescription:
      'Reposição de itens como correias, rolamentos, bombas, válvulas e outros componentes, sempre com aprovação prévia do cliente.',
  },
  {
    slug: 'teste-de-funcionamento',
    icon: 'check-circle',
    title: 'Teste de Funcionamento',
    description:
      'Verificação final do equipamento após o reparo, conferindo o funcionamento dos ciclos.',
    longDescription:
      'Execução de um ciclo de teste ao final do serviço para confirmar que a máquina voltou a operar corretamente antes da conclusão do atendimento.',
  },
];
