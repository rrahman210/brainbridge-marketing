import { Metadata } from 'next';

const BASE_URL = 'https://brainbridge.cloud';

interface MetadataParams {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
  noIndex = false,
}: MetadataParams): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '' ? title : `${title} | BrainBridge`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'BrainBridge',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
  };
}

export const defaultMetadata: Metadata = {
  title: {
    default: 'BrainBridge | AI-Powered Attendance Intelligence for Schools',
    template: '%s | BrainBridge',
  },
  description:
    'Stop chasing absences. Start preventing them. BrainBridge uses AI to identify at-risk students before they become chronically absent. FERPA compliant, Ed Law 2-d certified.',
  metadataBase: new URL(BASE_URL),
  keywords: [
    'attendance intelligence',
    'chronic absenteeism',
    'school attendance software',
    'student attendance tracking',
    'early warning system',
    'FERPA compliant',
    'K-12 attendance',
    'attendance prediction',
    'BrainBridge',
  ],
  authors: [{ name: 'BrainBridge' }],
  creator: 'BrainBridge',
  publisher: 'BrainBridge',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'BrainBridge',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BrainBridge - Attendance Intelligence for Schools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@brainbridge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
