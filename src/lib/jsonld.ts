import { siteConfig } from '@/site.config';

const logoUrl = `${siteConfig.siteUrl}/images/logo/logo.png`;

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    logo: logoUrl,
    areaServed: { '@type': 'City', name: siteConfig.city },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteConfig.siteUrl,
    name: siteConfig.siteName,
    inLanguage: 'pt-BR',
  };
}

export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    image: logoUrl,
    telephone: siteConfig.phoneE164,
    areaServed: { '@type': 'City', name: siteConfig.city },
    description: siteConfig.defaultDescription,
  };
}

interface ServiceInfo {
  name: string;
  description: string;
}

export function servicesJsonLd(services: ServiceInfo[]) {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    areaServed: { '@type': 'City', name: siteConfig.city },
    provider: {
      '@type': 'ProfessionalService',
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
  }));
}

export function webPageJsonLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: new URL(path, siteConfig.siteUrl).toString(),
    inLanguage: 'pt-BR',
  };
}

export function aboutPageJsonLd(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: `Sobre | ${siteConfig.siteName}`,
    url: new URL(path, siteConfig.siteUrl).toString(),
    inLanguage: 'pt-BR',
  };
}

export function contactPageJsonLd(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: `Contato | ${siteConfig.siteName}`,
    url: new URL(path, siteConfig.siteUrl).toString(),
    inLanguage: 'pt-BR',
  };
}

export function blogJsonLd(path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Blog | ${siteConfig.siteName}`,
    url: new URL(path, siteConfig.siteUrl).toString(),
    inLanguage: 'pt-BR',
  };
}

export function collectionPageJsonLd(path: string, name: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    url: new URL(path, siteConfig.siteUrl).toString(),
    inLanguage: 'pt-BR',
  };
}

interface BlogPostingInput {
  title: string;
  description: string;
  path: string;
  imageUrl: string;
  publishDate: Date;
  updatedDate?: Date;
  author: string;
}

export function blogPostingJsonLd(input: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    image: input.imageUrl,
    url: new URL(input.path, siteConfig.siteUrl).toString(),
    datePublished: input.publishDate.toISOString(),
    dateModified: (input.updatedDate ?? input.publishDate).toISOString(),
    inLanguage: 'pt-BR',
    author: {
      '@type': 'Organization',
      name: input.author === 'Equipe Editorial' ? siteConfig.siteName : input.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.siteName,
      logo: {
        '@type': 'ImageObject',
        url: logoUrl,
      },
    },
    mainEntityOfPage: new URL(input.path, siteConfig.siteUrl).toString(),
  };
}
