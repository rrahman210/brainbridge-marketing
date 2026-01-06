import { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  ArrowRight,
  CheckCircle,
  Home,
  ClipboardList,
  Target,
  BarChart3,
  Handshake,
  Shield,
} from 'lucide-react';
import JsonLdScript from '@/components/seo/JsonLdScript';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Youth Attendance Tracking for CBOs | BrainBridge',
  description: 'Attendance intelligence for community-based organizations, youth advocates, and case managers. Track home visits, log interventions, and measure program impact.',
  keywords: [
    'CBO attendance tracking',
    'youth advocate software',
    'case management attendance',
    'community organization tools',
    'intervention tracking software',
    'home visit logging',
    'community school software',
  ],
  openGraph: {
    title: 'Youth Attendance Tracking for CBOs | BrainBridge',
    description: 'Attendance intelligence for community-based organizations and youth advocates.',
    url: 'https://brainbridge.cloud/solutions/community-organizations',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/solutions/community-organizations',
  },
};

const benefits = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Caseload Management',
    description: 'Every advocate sees their assigned students, intervention history, and AI-suggested next steps in one view.',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Home Visit Logging',
    description: 'Log home visits, record outcomes, and track barrier removal progress. Mobile-friendly for field work.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Barrier Tracking',
    description: 'Document housing, transportation, food, and health barriers. AI factors these into risk predictions.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Outcome Analytics',
    description: 'Measure your program\'s impact with real data. Show funders exactly how your interventions improve attendance.',
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: 'Multi-Org Collaboration',
    description: 'Coordinate with schools and other CBOs. Shared student profiles with role-based access controls.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'FERPA Compliant',
    description: 'Enterprise-grade security for student data. Complete audit trail for every action.',
  },
];

const useCases = [
  {
    role: 'Youth Advocate',
    scenario: 'Logs home visits and sees AI-suggested next steps based on family barriers and attendance patterns.',
  },
  {
    role: 'Case Manager',
    scenario: 'Tracks barrier removal progress (housing, food, transport) and documents intervention outcomes.',
  },
  {
    role: 'Program Director',
    scenario: 'Measures intervention effectiveness across all students and generates impact reports for funders.',
  },
];

export default function CommunityOrganizationsPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Solutions', url: 'https://brainbridge.cloud/solutions' },
          { name: 'Community Organizations', url: 'https://brainbridge.cloud/solutions/community-organizations' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                For CBOs & Community Schools
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Coordinate Wraparound Services{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
                  More Effectively
                </span>
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                BrainBridge helps youth advocates, case managers, and community school directors
                track interventions, measure impact, and coordinate with schools around shared student data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-all shadow-xl"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">3.2x</div>
                <div className="text-emerald-200 text-lg">Faster Response Time</div>
                <p className="text-emerald-100 text-sm mt-4">
                  CBOs using BrainBridge respond to at-risk students faster with AI-prioritized
                  caseloads and automated workflow suggestions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Built for Community-Based Organizations
            </h2>
            <p className="text-lg text-slate-600">
              Track home visits, log interventions, and prove your program&apos;s impact with real data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How CBOs Use BrainBridge
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.role} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.role}</h3>
                <p className="text-slate-600 leading-relaxed">{useCase.scenario}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Schools Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
              <Handshake className="w-10 h-10 mb-6 text-emerald-200" />
              <h3 className="text-2xl font-bold mb-4">Perfect for Community Schools</h3>
              <p className="text-emerald-100 mb-6">
                Unite school staff and community partners around shared student data. Coordinate
                integrated student support with a single source of truth.
              </p>
              <ul className="space-y-3 text-emerald-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  Unified dashboard for all support providers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  Cross-agency coordination on shared caseloads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  Real-time intelligence sharing
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Prove Your Impact
              </h2>
              <ul className="space-y-4">
                {[
                  'Intervention effectiveness tracking',
                  'Funder-ready impact reports',
                  'Before/after attendance comparisons',
                  'Student outcome documentation',
                  'Multi-year trend analysis',
                  'Program ROI calculations',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 89% Stat */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-7xl font-bold mb-4">89%</div>
          <div className="text-2xl text-emerald-200 mb-6">Early Intervention Success Rate</div>
          <p className="text-emerald-100 text-lg">
            Community schools using BrainBridge achieve high intervention success rates
            by catching students in the yellow zone before chronic absence takes hold.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
