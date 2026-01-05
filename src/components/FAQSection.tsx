import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How long does implementation take?',
    answer: 'Most schools are up and running within 1-2 weeks. We handle the technical setup, data import, and provide comprehensive training for your team. Our onboarding specialists guide you through every step.',
  },
  {
    question: 'What data do we need to provide?',
    answer: 'We need your attendance data (daily or period-by-period) and basic student demographics. BrainBridge works with any data format - CSV, Excel, or direct SIS integration with PowerSchool, Infinite Campus, and others.',
  },
  {
    question: 'How does the AI work without seeing student names?',
    answer: 'Our Zero-PII Architecture tokenizes all student names before any AI processing. The AI sees patterns and identifiers, never actual names. This ensures FERPA compliance while still delivering powerful predictions.',
  },
  {
    question: 'What training is included?',
    answer: 'All plans include comprehensive onboarding training for your entire team, role-specific workshops, and ongoing support. We also provide video tutorials, documentation, and a dedicated success manager.',
  },
  {
    question: 'How does billing work?',
    answer: 'We offer flexible annual pricing based on school size and features needed. Contact us for a customized quote. We work with school budgets and can align with your fiscal year.',
  },
  {
    question: 'Can we integrate with our existing SIS?',
    answer: 'Yes! We have direct integrations with PowerSchool, Infinite Campus, and other major SIS platforms. For other systems, we can work with automated data exports. Our team handles all the technical integration.',
  },
  {
    question: 'Is BrainBridge FERPA compliant?',
    answer: 'Absolutely. BrainBridge is built from the ground up for student data privacy. We maintain FERPA compliance and support state-level student data privacy requirements including NY Ed Law 2-d.',
  },
  {
    question: 'Can CBOs and external partners access the system?',
    answer: 'Yes! BrainBridge supports multi-organization collaboration with role-based access controls. Each partner sees only the students and data they\'re authorized to access, with full audit trails.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Got Questions? We've Got Answers.
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about getting started with BrainBridge.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-slate-50 rounded-2xl overflow-hidden transition-all ${
                openIndex === index ? 'ring-2 ring-blue-500 ring-opacity-20' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
              >
                <span className="font-semibold text-slate-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
          >
            Contact our team
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
