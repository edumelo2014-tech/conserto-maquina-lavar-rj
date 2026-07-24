/**
 * Configuração central do site. Alterar aqui reflete em todas as páginas.
 * Preencher os campos marcados como "A CONFIGURAR" quando os dados reais existirem.
 */

export const siteConfig = {
  siteName: 'Conserto de Máquina de Lavar',
  siteShortName: 'Conserto de Máquina de Lavar RJ',
  siteUrl: 'https://www.consertomaquinadelavarnorj.com.br',
  defaultTitle: 'Conserto de Máquina de Lavar no RJ | Atendimento em Domicílio',
  defaultDescription:
    'Conserto de máquina de lavar no RJ com atendimento em domicílio, diagnóstico técnico e orçamento antes do serviço. Experiência desde 2010 em toda a cidade do Rio de Janeiro.',

  // Contato
  phoneDisplay: '(21) 96900-8005',
  phoneE164: '+5521969008005',
  whatsappNumber: '5521969008005',
  whatsappDefaultMessage:
    'Olá, vim do site de conserto de máquina de lavar no RJ e quero solicitar um orçamento.',
  emailContact: '', // A CONFIGURAR — e-mail institucional, se existir

  // Localização e atuação
  startYear: '2010',
  city: 'Rio de Janeiro',
  state: 'RJ',
  serviceArea: 'Cidade do Rio de Janeiro',
  regions: ['Zona Norte', 'Zona Sul', 'Zona Oeste', 'Centro'],

  // Dados institucionais ainda não confirmados (não inventar)
  legalName: '', // A CONFIGURAR — razão social, se houver
  cnpj: '', // A CONFIGURAR
  physicalAddress: '', // A CONFIGURAR — não exibir sem confirmação
  openingHours: '', // A CONFIGURAR — ex.: "Segunda a sábado, 08h às 18h"

  // Redes sociais (preencher quando existirem perfis reais)
  socialProfiles: [] as string[],

  // Navegação principal
  mainNav: [
    { label: 'Home', href: '/' },
    { label: 'Sobre', href: '/sobre/' },
    { label: 'Serviços', href: '/servicos/' },
    { label: 'Contato', href: '/contato/' },
    { label: 'Blog', href: '/blog/' },
  ],

  footerLegalNav: [
    { label: 'Política de Privacidade', href: '/politica-de-privacidade/' },
    { label: 'Aviso Legal', href: '/aviso-legal/' },
    { label: 'Termos de Uso', href: '/termos-de-uso/' },
  ],
} as const;

// Páginas de zona já publicadas. "Centro" fica de fora até que uma página
// própria exista — o item continua aparecendo como texto simples até lá.
export const zoneLinks: Record<string, string> = {
  'Zona Sul': '/conserto-de-maquina-de-lavar-na-zona-sul-rj/',
  'Zona Norte': '/conserto-de-maquina-de-lavar-na-zona-norte-rj/',
  'Zona Oeste': '/conserto-de-maquina-de-lavar-na-zona-oeste-rj/',
};

function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = buildWhatsAppUrl(siteConfig.whatsappDefaultMessage);

export function whatsappUrlWithMessage(message: string): string {
  return buildWhatsAppUrl(message);
}

export const whatsappAriaLabel =
  'Solicitar orçamento de conserto de máquina de lavar no RJ pelo WhatsApp';
