export interface InformItem {
  title: string;
  description: string;
}

export const informItems: InformItem[] = [
  { title: 'Marca da Máquina', description: 'Identifica o fabricante do equipamento.' },
  { title: 'Modelo do Equipamento', description: 'Costuma estar na etiqueta traseira, lateral, sob a tampa ou perto da porta.' },
  { title: 'Defeito Apresentado', description: 'Descreva o que está acontecendo com o máximo de detalhes possível.' },
  { title: 'Código de Erro no Painel', description: 'Se a máquina exibir algum código, ele ajuda a orientar o diagnóstico.' },
  { title: 'Bairro do Atendimento', description: 'Facilita a organização da visita técnica.' },
  { title: 'Quando o Problema Começou', description: 'Ajuda a entender se o defeito é recente ou recorrente.' },
];
