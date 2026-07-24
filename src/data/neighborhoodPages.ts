import type { ImageMetadata } from 'astro';
import { images } from '@/assets/images';

export interface NeighborhoodPageData {
  slug: string;
  path: string;
  nome: string;
  /** Preposição usada antes do nome do bairro nos títulos/headings gerados (ex: "em Bangu RJ", "na Tijuca RJ"). */
  preposition: string;
  zona: 'Zona Norte' | 'Zona Sul' | 'Zona Oeste';
  zonaHref: string;
  sibling: { nome: string; href: string };
  heroImage: ImageMetadata;
  heroImageAlt: string;
  heroImageTitle: string;
  eyebrow: string;
  lead: string;
  empresaParagraphs: string[];
  atendimentoParagraphs: string[];
  atendimentoClosingBefore: string;
  atendimentoClosingAfter: string;
  servicosLede: string;
  problemasLede: string;
  marcasLede: string;
  tecnicoDomicilioParagraphs: string[];
  comoFuncionaLede: string;
  precoLede: string;
  valeAPenaParagraph: string;
  porQueEscolherLede: string;
  informarLede: string;
  desligarLede: string;
  ctaTitle: string;
  ctaDescription: string;
}

const zonaNorteHref = '/conserto-de-maquina-de-lavar-na-zona-norte-rj/';
const zonaSulHref = '/conserto-de-maquina-de-lavar-na-zona-sul-rj/';
const zonaOesteHref = '/conserto-de-maquina-de-lavar-na-zona-oeste-rj/';

export const neighborhoodPages: NeighborhoodPageData[] = [
  {
    slug: 'tijuca',
    path: '/conserto-de-maquina-de-lavar-em-tijuca-rj/',
    nome: 'Tijuca',
    preposition: 'na',
    zona: 'Zona Norte',
    zonaHref: zonaNorteHref,
    sibling: { nome: 'Méier', href: '/conserto-de-maquina-de-lavar-no-meier-rj/' },
    heroImage: images.heroTecnico,
    heroImageAlt: 'Técnico avaliando máquina de lavar em residência na Tijuca, Rio de Janeiro',
    heroImageTitle: 'Conserto de máquina de lavar na Tijuca RJ',
    eyebrow: 'Atendimento na Tijuca',
    lead: 'Atendimento residencial na Tijuca, bairro tradicional da Zona Norte do Rio de Janeiro, com diagnóstico técnico da lavadora antes de qualquer orçamento ser apresentado.',
    empresaParagraphs: [
      'A Tijuca é um dos bairros mais tradicionais da Zona Norte do Rio de Janeiro, com prédios residenciais mais antigos ao redor da Praça Saens Peña e da Rua Conde de Bonfim, além de ruas mais íngremes próximas à Floresta da Tijuca. Essa variedade de tipos de instalação — de apartamentos compactos a casas em ladeiras — é considerada já na primeira avaliação da máquina de lavar.',
      'Como em qualquer atendimento, a lavadora é avaliada no local antes de qualquer orçamento, e o reparo só é executado depois da sua aprovação.',
    ],
    atendimentoParagraphs: [
      'Conheço bem a rotina de atendimento na Tijuca: prédios com portaria, vagas de garagem que exigem manobra para acessar a área de serviço e, em alguns trechos próximos à Praça Saens Peña, trânsito mais intenso em horários de pico. Esses detalhes entram no planejamento do horário da visita.',
      'Em ruas mais íngremes perto da Floresta da Tijuca, o acesso pode exigir um pouco mais de atenção logística, o que também é considerado ao combinar o atendimento.',
    ],
    atendimentoClosingBefore: 'Também atendemos regularmente o ',
    atendimentoClosingAfter: ', bairro vizinho na Zona Norte.',
    servicosLede: 'Reparo e manutenção de lavadoras residenciais para moradores da Tijuca, sempre com diagnóstico antes da execução.',
    problemasLede: 'Sintomas que aparecem com frequência em atendimentos residenciais na Tijuca — reconhecê-los ajuda a descrever melhor o defeito.',
    marcasLede: 'Atendimento a diferentes fabricantes e modelos de lavadoras residenciais na Tijuca.',
    tecnicoDomicilioParagraphs: [
      'Grande parte dos apartamentos e casas da Tijuca permite avaliação e reparo da máquina de lavar diretamente no local, sem necessidade de transporte do equipamento.',
      'Quando o defeito exige recursos que não estão disponíveis em domicílio, a retirada técnica é explicada antes de qualquer decisão.',
    ],
    comoFuncionaLede: 'Um fluxo simples do primeiro contato até o teste final do equipamento, adaptado à rotina de quem mora na Tijuca.',
    precoLede: 'Fatores que costumam pesar mais no valor final do orçamento para moradores da Tijuca.',
    valeAPenaParagraph: 'Idade do equipamento, estado de conservação e disponibilidade de peças ajudam a decidir se o reparo compensa. Essas informações são orientativas e não substituem o diagnóstico técnico.',
    porQueEscolherLede: 'Princípios que guiam o atendimento do início ao fim do serviço na Tijuca.',
    informarLede: 'Quanto mais detalhes você enviar, mais precisa é a avaliação inicial do defeito da sua máquina na Tijuca.',
    desligarLede: 'Alguns sinais indicam que o equipamento deve ser desligado antes mesmo do atendimento técnico.',
    ctaTitle: 'Precisa de Conserto de Máquina de Lavar na Tijuca RJ?',
    ctaDescription: 'Envie a marca, o modelo, o defeito observado e seu endereço na Tijuca pelo WhatsApp para receber a avaliação inicial.',
  },
  {
    slug: 'meier',
    path: '/conserto-de-maquina-de-lavar-no-meier-rj/',
    nome: 'Méier',
    preposition: 'em',
    zona: 'Zona Norte',
    zonaHref: zonaNorteHref,
    sibling: { nome: 'Tijuca', href: '/conserto-de-maquina-de-lavar-em-tijuca-rj/' },
    heroImage: images.tecnicoAtendendoCliente,
    heroImageAlt: 'Técnico conversando com cliente sobre o conserto da máquina de lavar no Méier, Rio de Janeiro',
    heroImageTitle: 'Conserto de máquina de lavar no Méier RJ',
    eyebrow: 'Atendimento no Méier',
    lead: 'Atendimento residencial no Méier, bairro comercial e residencial tradicional da Zona Norte do Rio de Janeiro, com diagnóstico técnico antes de qualquer orçamento.',
    empresaParagraphs: [
      'O Méier é conhecido por sua vocação comercial na Rua Dias da Cruz e pela Praça Guilherme da Silveira, cercado por prédios residenciais mais antigos e conjuntos habitacionais mais recentes. Essa mistura de perfis de moradia é considerada logo na avaliação inicial da máquina de lavar.',
      'A lavadora é sempre avaliada antes do orçamento, e o reparo só começa após a sua aprovação — independentemente do tipo de prédio.',
    ],
    atendimentoParagraphs: [
      'O Méier tem um comércio movimentado ao redor da Rua Dias da Cruz, o que costuma exigir atenção extra para estacionar perto do endereço do atendimento nos horários de maior movimento.',
      'Muitos prédios da região têm portaria e elevador de serviço, o que geralmente agiliza o acesso até a área onde a máquina está instalada.',
    ],
    atendimentoClosingBefore: 'Também atendemos regularmente a ',
    atendimentoClosingAfter: ', bairro vizinho na Zona Norte.',
    servicosLede: 'Reparo e manutenção de lavadoras residenciais para moradores do Méier, sempre com diagnóstico antes da execução.',
    problemasLede: 'Sintomas frequentes em atendimentos residenciais no Méier — reconhecê-los ajuda a descrever melhor o defeito ao solicitar o orçamento.',
    marcasLede: 'Atendimento a diferentes fabricantes e modelos de lavadoras residenciais no Méier.',
    tecnicoDomicilioParagraphs: [
      'Na maioria dos prédios do Méier, a avaliação e o reparo da máquina de lavar acontecem diretamente na área de serviço do apartamento.',
      'Quando o reparo exige recursos que não estão disponíveis em domicílio, a retirada técnica é explicada antes de qualquer decisão.',
    ],
    comoFuncionaLede: 'Um fluxo simples do primeiro contato até o teste final do equipamento, pensado para a rotina de quem mora no Méier.',
    precoLede: 'Fatores que costumam pesar mais no valor final do orçamento para moradores do Méier.',
    valeAPenaParagraph: 'Idade do equipamento, frequência de defeitos e disponibilidade de peças ajudam a decidir se o reparo compensa. Essas informações são orientativas e não substituem o diagnóstico técnico.',
    porQueEscolherLede: 'Princípios que guiam o atendimento do início ao fim do serviço no Méier.',
    informarLede: 'Quanto mais detalhes você enviar, mais precisa é a avaliação inicial do defeito da sua máquina no Méier.',
    desligarLede: 'Alguns sinais indicam que o equipamento deve ser desligado antes mesmo do atendimento técnico.',
    ctaTitle: 'Precisa de Conserto de Máquina de Lavar no Méier RJ?',
    ctaDescription: 'Envie a marca, o modelo, o defeito observado e seu endereço no Méier pelo WhatsApp para receber a avaliação inicial.',
  },
  {
    slug: 'botafogo',
    path: '/conserto-de-maquina-de-lavar-em-botafogo-rj/',
    nome: 'Botafogo',
    preposition: 'em',
    zona: 'Zona Sul',
    zonaHref: zonaSulHref,
    sibling: { nome: 'Flamengo', href: '/conserto-de-maquina-de-lavar-no-flamengo-rj/' },
    heroImage: images.assistenciaTecnicaOficina,
    heroImageAlt: 'Oficina especializada em manutenção de máquinas de lavar que atende moradores de Botafogo',
    heroImageTitle: 'Conserto de máquina de lavar em Botafogo RJ',
    eyebrow: 'Atendimento em Botafogo',
    lead: 'Atendimento residencial em Botafogo, bairro da Zona Sul do Rio de Janeiro, com diagnóstico técnico da lavadora antes de qualquer orçamento ser apresentado.',
    empresaParagraphs: [
      'Botafogo reúne desde prédios mais antigos nas ruas próximas à Rua Voluntários da Pátria até torres residenciais mais recentes perto da Praia de Botafogo. Essa diversidade de instalações — de apartamentos compactos a coberturas — é considerada já na avaliação inicial do equipamento.',
      'A lavadora é sempre avaliada antes do orçamento, e o reparo só começa após a sua aprovação, seja em um prédio mais antigo ou mais novo.',
    ],
    atendimentoParagraphs: [
      'Conheço a rotina de prédios com portaria e garagens compartilhadas em Botafogo, o que costuma pedir um pouco mais de organização para chegar até a área de serviço.',
      'Nos horários de maior movimento perto da Rua Voluntários da Pátria e da orla, o trânsito pode influenciar o horário combinado para o atendimento.',
    ],
    atendimentoClosingBefore: 'Também atendemos regularmente o ',
    atendimentoClosingAfter: ', bairro vizinho na Zona Sul.',
    servicosLede: 'Reparo e manutenção de lavadoras residenciais para moradores de Botafogo, sempre com diagnóstico antes da execução.',
    problemasLede: 'Sintomas frequentes em atendimentos residenciais em Botafogo — reconhecê-los ajuda a descrever melhor o defeito.',
    marcasLede: 'Atendimento a diferentes fabricantes e modelos de lavadoras residenciais em Botafogo.',
    tecnicoDomicilioParagraphs: [
      'A maior parte dos apartamentos de Botafogo permite avaliação e reparo da máquina de lavar diretamente na área de serviço.',
      'Quando o defeito exige recursos que não estão disponíveis em domicílio, a retirada técnica é explicada antes de qualquer decisão.',
    ],
    comoFuncionaLede: 'Um fluxo simples do primeiro contato até o teste final do equipamento, adaptado à rotina de quem mora em Botafogo.',
    precoLede: 'Fatores que costumam pesar mais no valor final do orçamento para moradores de Botafogo.',
    valeAPenaParagraph: 'Idade do equipamento, estado de conservação e disponibilidade de peças ajudam a decidir se o reparo compensa. Essas informações são orientativas e não substituem o diagnóstico técnico.',
    porQueEscolherLede: 'Princípios que guiam o atendimento do início ao fim do serviço em Botafogo.',
    informarLede: 'Quanto mais detalhes você enviar, mais precisa é a avaliação inicial do defeito da sua máquina em Botafogo.',
    desligarLede: 'Alguns sinais indicam que o equipamento deve ser desligado antes mesmo do atendimento técnico.',
    ctaTitle: 'Precisa de Conserto de Máquina de Lavar em Botafogo RJ?',
    ctaDescription: 'Envie a marca, o modelo, o defeito observado e seu endereço em Botafogo pelo WhatsApp para receber a avaliação inicial.',
  },
  {
    slug: 'flamengo',
    path: '/conserto-de-maquina-de-lavar-no-flamengo-rj/',
    nome: 'Flamengo',
    preposition: 'em',
    zona: 'Zona Sul',
    zonaHref: zonaSulHref,
    sibling: { nome: 'Botafogo', href: '/conserto-de-maquina-de-lavar-em-botafogo-rj/' },
    heroImage: images.tecnicoOrcamentoCelular,
    heroImageAlt: 'Técnico preparando orçamento de conserto de máquina de lavar para atendimento no Flamengo',
    heroImageTitle: 'Conserto de máquina de lavar no Flamengo RJ',
    eyebrow: 'Atendimento no Flamengo',
    lead: 'Atendimento residencial no Flamengo, bairro da Zona Sul do Rio de Janeiro conhecido pelos prédios próximos ao Aterro, com diagnóstico técnico antes de qualquer orçamento.',
    empresaParagraphs: [
      'O Flamengo é marcado por edifícios residenciais mais antigos, muitos deles perto do Parque do Flamengo e da Rua Marquês de Abrantes, com plantas de apartamento que variam bastante de um prédio para outro. Essas particularidades de instalação são levadas em conta na avaliação inicial da máquina de lavar.',
      'Como em qualquer atendimento, o diagnóstico vem antes do orçamento, e o reparo só é executado após a sua aprovação.',
    ],
    atendimentoParagraphs: [
      'Muitos prédios do Flamengo têm elevadores mais antigos e área de serviço em espaços reduzidos, o que costuma pedir um pouco mais de cuidado no transporte de ferramentas até o apartamento.',
      'A proximidade com o Parque do Flamengo e a orla também é considerada ao planejar o horário do atendimento, já que o movimento na região varia bastante ao longo do dia.',
    ],
    atendimentoClosingBefore: 'Também atendemos regularmente ',
    atendimentoClosingAfter: ', bairro vizinho na Zona Sul.',
    servicosLede: 'Reparo e manutenção de lavadoras residenciais para moradores do Flamengo, sempre com diagnóstico antes da execução.',
    problemasLede: 'Sintomas frequentes em atendimentos residenciais no Flamengo — reconhecê-los ajuda a descrever melhor o defeito.',
    marcasLede: 'Atendimento a diferentes fabricantes e modelos de lavadoras residenciais no Flamengo.',
    tecnicoDomicilioParagraphs: [
      'Grande parte dos prédios do Flamengo permite avaliação e reparo da máquina de lavar diretamente na área de serviço do apartamento.',
      'Quando o reparo exige recursos que não estão disponíveis em domicílio, a retirada técnica é explicada antes de qualquer decisão.',
    ],
    comoFuncionaLede: 'Um fluxo simples do primeiro contato até o teste final do equipamento, pensado para a rotina de quem mora no Flamengo.',
    precoLede: 'Fatores que costumam pesar mais no valor final do orçamento para moradores do Flamengo.',
    valeAPenaParagraph: 'Idade do equipamento, frequência de defeitos e disponibilidade de peças ajudam a decidir se o reparo compensa. Essas informações são orientativas e não substituem o diagnóstico técnico.',
    porQueEscolherLede: 'Princípios que guiam o atendimento do início ao fim do serviço no Flamengo.',
    informarLede: 'Quanto mais detalhes você enviar, mais precisa é a avaliação inicial do defeito da sua máquina no Flamengo.',
    desligarLede: 'Alguns sinais indicam que o equipamento deve ser desligado antes mesmo do atendimento técnico.',
    ctaTitle: 'Precisa de Conserto de Máquina de Lavar no Flamengo RJ?',
    ctaDescription: 'Envie a marca, o modelo, o defeito observado e seu endereço no Flamengo pelo WhatsApp para receber a avaliação inicial.',
  },
  {
    slug: 'bangu',
    path: '/conserto-de-maquina-de-lavar-em-bangu-rj/',
    nome: 'Bangu',
    preposition: 'em',
    zona: 'Zona Oeste',
    zonaHref: zonaOesteHref,
    sibling: { nome: 'Realengo', href: '/conserto-de-maquina-de-lavar-em-realengo-rj/' },
    heroImage: images.tecnicoTestandoComponente,
    heroImageAlt: 'Técnico realizando diagnóstico técnico de máquina de lavar em residência em Bangu',
    heroImageTitle: 'Conserto de máquina de lavar em Bangu RJ',
    eyebrow: 'Atendimento em Bangu',
    lead: 'Atendimento residencial em Bangu, bairro tradicional da Zona Oeste do Rio de Janeiro, com diagnóstico técnico da lavadora antes de qualquer orçamento ser apresentado.',
    empresaParagraphs: [
      'Bangu é um bairro de origem industrial, com predominância de casas e prédios baixos ao redor da região central, próxima à antiga Fábrica Bangu. Esse perfil residencial, com quintais e áreas de serviço externas em muitas casas, é considerado já na avaliação inicial do equipamento.',
      'A lavadora é sempre avaliada no local antes do orçamento, e o reparo só começa após a sua aprovação.',
    ],
    atendimentoParagraphs: [
      'Em Bangu, boa parte das residências são casas térreas ou sobrados, o que costuma facilitar o acesso até a área de serviço, muitas vezes localizada no quintal ou na lateral da casa.',
      'A região tem boa conexão pela linha de trem da SuperVia, o que ajuda a organizar o deslocamento até o endereço combinado, mesmo em ruas mais afastadas do centro do bairro.',
    ],
    atendimentoClosingBefore: 'Também atendemos regularmente o ',
    atendimentoClosingAfter: ', bairro vizinho na Zona Oeste.',
    servicosLede: 'Reparo e manutenção de lavadoras residenciais para moradores de Bangu, sempre com diagnóstico antes da execução.',
    problemasLede: 'Sintomas frequentes em atendimentos residenciais em Bangu — reconhecê-los ajuda a descrever melhor o defeito.',
    marcasLede: 'Atendimento a diferentes fabricantes e modelos de lavadoras residenciais em Bangu.',
    tecnicoDomicilioParagraphs: [
      'Nas casas de Bangu, a avaliação e boa parte dos reparos acontecem diretamente no local, sem necessidade de transporte do equipamento.',
      'Quando o defeito exige recursos que não estão disponíveis em domicílio, a retirada técnica é explicada antes de qualquer decisão.',
    ],
    comoFuncionaLede: 'Um fluxo simples do primeiro contato até o teste final do equipamento, adaptado à rotina de quem mora em Bangu.',
    precoLede: 'Fatores que costumam pesar mais no valor final do orçamento para moradores de Bangu.',
    valeAPenaParagraph: 'Idade do equipamento, estado de conservação e disponibilidade de peças ajudam a decidir se o reparo compensa. Essas informações são orientativas e não substituem o diagnóstico técnico.',
    porQueEscolherLede: 'Princípios que guiam o atendimento do início ao fim do serviço em Bangu.',
    informarLede: 'Quanto mais detalhes você enviar, mais precisa é a avaliação inicial do defeito da sua máquina em Bangu.',
    desligarLede: 'Alguns sinais indicam que o equipamento deve ser desligado antes mesmo do atendimento técnico.',
    ctaTitle: 'Precisa de Conserto de Máquina de Lavar em Bangu RJ?',
    ctaDescription: 'Envie a marca, o modelo, o defeito observado e seu endereço em Bangu pelo WhatsApp para receber a avaliação inicial.',
  },
  {
    slug: 'realengo',
    path: '/conserto-de-maquina-de-lavar-em-realengo-rj/',
    nome: 'Realengo',
    preposition: 'em',
    zona: 'Zona Oeste',
    zonaHref: zonaOesteHref,
    sibling: { nome: 'Bangu', href: '/conserto-de-maquina-de-lavar-em-bangu-rj/' },
    heroImage: images.heroTecnico,
    heroImageAlt: 'Técnico avaliando máquina de lavar em residência em Realengo, Rio de Janeiro',
    heroImageTitle: 'Conserto de máquina de lavar em Realengo RJ',
    eyebrow: 'Atendimento em Realengo',
    lead: 'Atendimento residencial em Realengo, bairro residencial da Zona Oeste do Rio de Janeiro, com diagnóstico técnico antes de qualquer orçamento ser apresentado.',
    empresaParagraphs: [
      'Realengo é um bairro predominantemente residencial, com casas e prédios de poucos andares ao longo das ruas próximas à estação de trem da SuperVia. Esse perfil de moradia, mais horizontal que o de outras regiões da cidade, é considerado já na avaliação inicial da máquina de lavar.',
      'Como em qualquer atendimento, a lavadora é avaliada primeiro, e o orçamento só é apresentado depois que o defeito é identificado com mais precisão.',
    ],
    atendimentoParagraphs: [
      'Em Realengo, a maioria das residências são casas, o que costuma facilitar o acesso à área de serviço sem depender de elevador ou portaria.',
      'A estação de trem da região ajuda a organizar o deslocamento até bairros próximos, o que é útil ao combinar horários de atendimento em ruas mais distantes da avenida principal.',
    ],
    atendimentoClosingBefore: 'Também atendemos regularmente ',
    atendimentoClosingAfter: ', bairro vizinho na Zona Oeste.',
    servicosLede: 'Reparo e manutenção de lavadoras residenciais para moradores de Realengo, sempre com diagnóstico antes da execução.',
    problemasLede: 'Sintomas frequentes em atendimentos residenciais em Realengo — reconhecê-los ajuda a descrever melhor o defeito.',
    marcasLede: 'Atendimento a diferentes fabricantes e modelos de lavadoras residenciais em Realengo.',
    tecnicoDomicilioParagraphs: [
      'Na maioria das casas de Realengo, a avaliação e o reparo da máquina de lavar acontecem diretamente no local.',
      'Quando o reparo exige recursos que não estão disponíveis em domicílio, a retirada técnica é explicada antes de qualquer decisão.',
    ],
    comoFuncionaLede: 'Um fluxo simples do primeiro contato até o teste final do equipamento, pensado para a rotina de quem mora em Realengo.',
    precoLede: 'Fatores que costumam pesar mais no valor final do orçamento para moradores de Realengo.',
    valeAPenaParagraph: 'Idade do equipamento, frequência de defeitos e disponibilidade de peças ajudam a decidir se o reparo compensa. Essas informações são orientativas e não substituem o diagnóstico técnico.',
    porQueEscolherLede: 'Princípios que guiam o atendimento do início ao fim do serviço em Realengo.',
    informarLede: 'Quanto mais detalhes você enviar, mais precisa é a avaliação inicial do defeito da sua máquina em Realengo.',
    desligarLede: 'Alguns sinais indicam que o equipamento deve ser desligado antes mesmo do atendimento técnico.',
    ctaTitle: 'Precisa de Conserto de Máquina de Lavar em Realengo RJ?',
    ctaDescription: 'Envie a marca, o modelo, o defeito observado e seu endereço em Realengo pelo WhatsApp para receber a avaliação inicial.',
  },
];

export function getNeighborhoodPage(slug: string): NeighborhoodPageData | undefined {
  return neighborhoodPages.find((n) => n.slug === slug);
}
