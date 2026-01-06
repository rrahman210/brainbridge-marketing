import {
  getOrganizationSchema,
  getSoftwareApplicationSchema,
  getFAQSchema,
  getWebsiteSchema,
  getArticleSchema,
  getBreadcrumbSchema,
} from './JsonLd';

interface JsonLdScriptProps {
  type: 'home' | 'article' | 'page';
  articleData?: {
    title: string;
    description: string;
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    url: string;
    image?: string;
  };
  breadcrumbs?: Array<{ name: string; url: string }>;
}

// FAQ data for homepage
const homeFaqData = [
  {
    question: 'How long does implementation take?',
    answer: 'Most schools are up and running within 1-2 weeks. We handle the technical setup, data import, and provide comprehensive training for your team.',
  },
  {
    question: 'Is BrainBridge FERPA compliant?',
    answer: 'Absolutely. BrainBridge is built from the ground up for student data privacy. We maintain FERPA compliance and support state-level student data privacy requirements including NY Ed Law 2-d.',
  },
  {
    question: 'How does the AI work without seeing student names?',
    answer: 'Our Zero-PII Architecture tokenizes all student names before any AI processing. The AI sees patterns and identifiers, never actual names.',
  },
  {
    question: 'What data do we need to provide?',
    answer: 'We need your attendance data (daily or period-by-period) and basic student demographics. BrainBridge works with any data format - CSV, Excel, or direct SIS integration.',
  },
  {
    question: 'Can we integrate with our existing SIS?',
    answer: 'Yes! We have direct integrations with PowerSchool, Infinite Campus, and other major SIS platforms. For other systems, we can work with automated data exports.',
  },
];

export default function JsonLdScript({ type, articleData, breadcrumbs }: JsonLdScriptProps) {
  const schemas: object[] = [];

  // Always include organization schema
  schemas.push(getOrganizationSchema());

  if (type === 'home') {
    schemas.push(getSoftwareApplicationSchema());
    schemas.push(getFAQSchema(homeFaqData));
    schemas.push(getWebsiteSchema());
  }

  if (type === 'article' && articleData) {
    schemas.push(
      getArticleSchema({
        title: articleData.title,
        description: articleData.description,
        publishedAt: articleData.publishedTime,
        updatedAt: articleData.modifiedTime || articleData.publishedTime,
        author: articleData.author,
        url: articleData.url,
        image: articleData.image,
      })
    );
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(getBreadcrumbSchema(breadcrumbs));
  }

  // Serialize to JSON safely - the data is from our own code, not user input
  const jsonLdContent = schemas.map((schema) => JSON.stringify(schema));

  return (
    <>
      {jsonLdContent.map((content, index) => (
        <script
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
        >
          {content}
        </script>
      ))}
    </>
  );
}
