import React, { useRef } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import StatsSection from './StatsSection';
import ProblemSection from './ProblemSection';
import FeatureSection from './FeatureSection';
import SolutionsSection from './SolutionsSection';
import TrustSection from './TrustSection';
import FAQSection from './FAQSection';
import CTASection from './CTASection';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  const demoFormRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    if (demoFormRef.current) {
      demoFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar onDemoClick={scrollToDemo} />

      {/* Main Content */}
      <main role="main">
        {/* Hero Section */}
        <Hero onDemoClick={scrollToDemo} />

        {/* Stats & Social Proof */}
        <StatsSection />

        {/* Problem Statement */}
        <ProblemSection />

        {/* Feature Showcase */}
        <FeatureSection />

        {/* Solutions by Customer Type */}
        <SolutionsSection />

        {/* Security & Compliance */}
        <TrustSection />

        {/* FAQ */}
        <FAQSection />

        {/* Final CTA with Demo Form */}
        <CTASection formRef={demoFormRef} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
