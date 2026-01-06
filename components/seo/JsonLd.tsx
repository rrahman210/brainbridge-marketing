// JSON-LD Schema generators for SEO structured data
// These return schema objects to be used with Next.js metadata API

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
}

export function getOrganizationSchema({
  name = 'BrainBridge',
  url = 'https://brainbridge.cloud',
  logo = 'https://brainbridge.cloud/logo.png',
  description = 'AI-powered attendance intelligence platform helping schools prevent chronic absenteeism through predictive analytics and early intervention.',
}: OrganizationSchemaProps = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${url}/#organization`,
    name,
    url,
    logo: {
      '@type': 'ImageObject',
      url: logo,
      width: 512,
      height: 512,
    },
    description,
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@brainbridge.cloud',
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://brainbridge.cloud/#software',
    name: 'BrainBridge',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered attendance intelligence platform for K-12 schools. Identifies at-risk students before they become chronically absent using machine learning and predictive analytics.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      description: 'Contact for pricing',
    },
    featureList: [
      'AI-powered risk prediction',
      'Real-time attendance monitoring',
      'Automated parent outreach',
      'FERPA compliant',
      'Ed Law 2-d certified',
      'Zero-PII Architecture',
      'SIS integration (PowerSchool, Infinite Campus)',
      'Multi-organization collaboration',
    ],
    screenshot: 'https://brainbridge.cloud/og-image.png',
    provider: {
      '@id': 'https://brainbridge.cloud/#organization',
    },
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function getFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': 'https://brainbridge.cloud/#faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
  url: string;
}

export function getArticleSchema({
  title,
  description,
  publishedAt,
  updatedAt,
  author = 'BrainBridge Team',
  image = 'https://brainbridge.cloud/og-image.png',
  url,
}: ArticleSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://brainbridge.cloud',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BrainBridge',
      logo: {
        '@type': 'ImageObject',
        url: 'https://brainbridge.cloud/logo.png',
      },
    },
    image,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://brainbridge.cloud/#website',
    url: 'https://brainbridge.cloud',
    name: 'BrainBridge',
    description: 'AI-Powered Attendance Intelligence for Schools',
    publisher: {
      '@id': 'https://brainbridge.cloud/#organization',
    },
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Combined schema for homepage
export function getHomePageSchemas() {
  return [
    getOrganizationSchema(),
    getSoftwareApplicationSchema(),
    getWebsiteSchema(),
  ];
}
