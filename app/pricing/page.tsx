import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, HelpCircle, Shield, Zap, Users } from 'lucide-react';
import JsonLdScript from '@/components/seo/JsonLdScript';

export const metadata: Metadata = {
  title: 'Pricing | BrainBridge Attendance Intelligence Software',
  description: 'BrainBridge pricing for K-12 schools, districts, and community organizations. Flexible annual plans based on school size. Contact us for a custom quote.',
  keywords: [
    'BrainBridge pricing',
    'attendance software cost',
    'school attendance software pricing',
    'chronic absenteeism software cost',
  ],
  openGraph: {
    title: 'Pricing | BrainBridge Attendance Intelligence Software',
    description: 'Flexible annual pricing for K-12 schools and districts. Contact us for a custom quote.',
    url: 'https://brainbridge.cloud/pricing',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/pricing',
  },
};

const includedFeatures = [
  'AI Morning Brief & Risk Prediction',
  'Automated Parent Outreach (SMS, Email)',
  'Team Caseload Management',
  'Intervention Logging & Tracking',
  'Smart Data Import (Any Format)',
  'SIS Integration Support',
  'FERPA-Compliant Audit Trail',
  'Dedicated Success Manager',
  'Comprehensive Team Training',
  'Unlimited Users',
];

const plans = [
  {
    name: 'School',
    description: 'For individual K-12 schools',
    features: [
      'All core features',
      'Up to 2,500 students',
      'Unlimited users',
      'Email & chat support',
      'Onboarding training',
    ],
    cta: 'Contact for Pricing',
  },
  {
    name: 'District',
    description: 'For school districts',
    features: [
      'All School features',
      'Multi-school dashboard',
      'District-wide analytics',
      'Priority support',
      'Dedicated success manager',
      'Custom integrations',
    ],
    cta: 'Contact for Pricing',
    highlighted: true,
  },
  {
    name: 'Community',
    description: 'For CBOs & Community Schools',
    features: [
      'Caseload management',
      'Intervention logging',
      'Outcome tracking',
      'Multi-org collaboration',
      'Impact reporting',
    ],
    cta: 'Contact for Pricing',
  },
];

const faqs = [
  {
    question: 'How is pricing determined?',
    answer: 'Pricing is based on school size (number of students) and features needed. We offer flexible annual plans and can align with your fiscal year. Contact us for a custom quote.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'We offer personalized demos with sample data so you can see exactly how BrainBridge works for your school. Contact us to schedule a demo.',
  },
  {
    question: 'What\'s included in the onboarding?',
    answer: 'All plans include comprehensive onboarding training, data import assistance, and a dedicated success manager to help your team get started.',
  },
  {
    question: 'Do you offer discounts for multi-year contracts?',
    answer: 'Yes, we offer discounts for multi-year commitments. Contact us to discuss your options.',
  },
];

export default function PricingPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Pricing', url: 'https://brainbridge.cloud/pricing' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Transparent Pricing
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Flexible annual plans based on your school size and needs.
              All plans include unlimited users, training, and support.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white ring-4 ring-blue-600/20'
                    : 'bg-slate-50'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? 'text-blue-200' : 'text-emerald-500'
                      }`} />
                      <span className={plan.highlighted ? 'text-blue-100' : 'text-slate-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#cta"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all ${
                    plan.highlighted
                      ? 'bg-white text-blue-700 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Everything Included
            </h2>
            <p className="text-lg text-slate-600">
              All plans include these core features to help you transform attendance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {includedFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BrainBridge */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Why Schools Choose BrainBridge
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Fast Implementation',
                description: 'Most schools are up and running within 1-2 weeks with comprehensive training included.',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Enterprise Security',
                description: 'FERPA compliant, Ed Law 2-d certified, with Zero-PII AI architecture.',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Unlimited Users',
                description: 'No per-user fees. Give every team member access without worrying about costs.',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Pricing FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Common Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us for a personalized quote based on your school&apos;s needs.
          </p>
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
