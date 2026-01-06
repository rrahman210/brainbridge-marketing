import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsSection from '@/components/sections/StatsSection';
import ProblemSection from '@/components/sections/ProblemSection';
import FeatureSection from '@/components/sections/FeatureSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import TrustSection from '@/components/sections/TrustSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import JsonLdScript from '@/components/seo/JsonLdScript';

export const metadata: Metadata = {
  title: 'BrainBridge | Attendance Intelligence Software for K-12 Schools',
  description: 'Early warning system that identifies at-risk students before they become chronically absent. AI-powered attendance intelligence built for K-12 schools, districts, and community organizations. FERPA compliant.',
  keywords: [
    'BrainBridge',
    'attendance intelligence',
    'chronic absenteeism software',
    'school attendance tracking',
    'student attendance prediction',
    'early warning system for schools',
    'FERPA compliant attendance software',
    'K-12 attendance management',
    'school attendance AI',
    'chronic absence prevention',
  ],
  openGraph: {
    title: 'BrainBridge | Attendance Intelligence Software for K-12 Schools',
    description: 'Early warning system that identifies at-risk students before they become chronically absent. AI-powered attendance intelligence for schools.',
    type: 'website',
    url: 'https://brainbridge.cloud',
    images: [
      {
        url: 'https://brainbridge.cloud/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BrainBridge Attendance Intelligence Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrainBridge | Attendance Intelligence for K-12 Schools',
    description: 'AI-powered early warning system for student attendance. Identify at-risk students before they become chronically absent.',
    images: ['https://brainbridge.cloud/og-image.png'],
  },
  alternates: {
    canonical: 'https://brainbridge.cloud',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLdScript type="home" />

      {/* Page Sections */}
      <Hero />
      <StatsSection />
      <ProblemSection />
      <FeatureSection />
      <SolutionsSection />
      <TrustSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
