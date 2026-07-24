/**
 * Bairros atendidos por zona. O campo "slug" já existe hoje para que, no
 * futuro, cada bairro possa virar uma página própria (ex: /bairro/{slug}/)
 * apenas trocando o texto simples por um link em NeighborhoodList.astro —
 * sem precisar refazer a estrutura de dados.
 */
export interface Neighborhood {
  nome: string;
  slug: string;
}

export const zonaSulNeighborhoods: Neighborhood[] = [
  { nome: 'Copacabana', slug: 'copacabana' },
  { nome: 'Ipanema', slug: 'ipanema' },
  { nome: 'Leblon', slug: 'leblon' },
  { nome: 'Botafogo', slug: 'botafogo' },
  { nome: 'Flamengo', slug: 'flamengo' },
  { nome: 'Laranjeiras', slug: 'laranjeiras' },
  { nome: 'Jardim Botânico', slug: 'jardim-botanico' },
  { nome: 'Gávea', slug: 'gavea' },
  { nome: 'Humaitá', slug: 'humaita' },
  { nome: 'Urca', slug: 'urca' },
];

export const zonaNorteNeighborhoods: Neighborhood[] = [
  { nome: 'Tijuca', slug: 'tijuca' },
  { nome: 'Méier', slug: 'meier' },
  { nome: 'Vila Isabel', slug: 'vila-isabel' },
  { nome: 'Maracanã', slug: 'maracana' },
  { nome: 'Grajaú', slug: 'grajau' },
  { nome: 'Madureira', slug: 'madureira' },
  { nome: 'Penha', slug: 'penha' },
  { nome: 'Ilha do Governador', slug: 'ilha-do-governador' },
  { nome: 'Bonsucesso', slug: 'bonsucesso' },
  { nome: 'São Cristóvão', slug: 'sao-cristovao' },
];

export const zonaOesteNeighborhoods: Neighborhood[] = [
  { nome: 'Barra da Tijuca', slug: 'barra-da-tijuca' },
  { nome: 'Recreio dos Bandeirantes', slug: 'recreio-dos-bandeirantes' },
  { nome: 'Jacarepaguá', slug: 'jacarepagua' },
  { nome: 'Campo Grande', slug: 'campo-grande' },
  { nome: 'Bangu', slug: 'bangu' },
  { nome: 'Realengo', slug: 'realengo' },
  { nome: 'Santa Cruz', slug: 'santa-cruz' },
  { nome: 'Taquara', slug: 'taquara' },
  { nome: 'Guaratiba', slug: 'guaratiba' },
  { nome: 'Padre Miguel', slug: 'padre-miguel' },
];
