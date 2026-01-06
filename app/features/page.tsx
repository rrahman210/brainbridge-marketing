import { Metadata } from 'next';
import Link from 'next/link';
import {
  Sparkles,
  Brain,
  MessageSquare,
  Users,
  Upload,
  BarChart3,
  Bell,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import JsonLdScript from '@/components/seo/JsonLdScript';

export const metadata: Metadata = {
  title: 'Features | BrainBridge Attendance Intelligence Platform',
  description: 'Explore BrainBridge features: AI-powered morning briefs, risk prediction, automated parent outreach, team caseload management, and smart data import. Built for K-12 schools.',
  keywords: [
    'attendance software features',
    'AI attendance prediction',
    'school attendance management',
    'chronic absenteeism prevention',
    'student risk prediction',
    'parent outreach automation',
    'FERPA compliant software',
  ],
  openGraph: {
    title: 'Features | BrainBridge Attendance Intelligence Platform',
    description: 'AI-powered attendance intelligence features for K-12 schools. Morning briefs, risk prediction, automated outreach, and more.',
    url: 'https://brainbridge.cloud/features',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/features',
  },
};

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'AI Morning Brief',
    description: 'Start every day knowing exactly which students need attention. Our AI analyzes overnight data to surface the 5 students who need you most today.',
    benefits: [
      'Cross-references attendance with barriers (housing, transit, food)',
      'Prioritized by risk score and intervention success probability',
      'Delivered to your dashboard by 8:00 AM',
      'Actionable insights, not just data dumps',
    ],
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Predictive Risk Scoring',
    description: 'Machine learning identifies patterns invisible to the human eye. Predict which students will become chronically absent 3 weeks before it happens.',
    benefits: [
      'Research-backed barrier weights (Housing +25, Transport +15)',
      'Yellow zone detection (3-5 absences = 80% intervention success)',
      'Continuous learning from your intervention outcomes',
      'Real-time risk score updates',
    ],
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Automated Parent Outreach',
    description: 'AI drafts personalized parent messages tailored to each family\'s specific barriers. Approve with one click, or customize.',
    benefits: [
      'Context-aware messaging (housing vs. transportation barriers)',
      'Multi-channel: SMS, email, phone logging',
      'FERPA-compliant audit trail for every interaction',
      'Message templates that actually work',
    ],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Caseload Management',
    description: 'Give every team member their own dashboard. Attendance coordinators, success mentors, and youth advocates each see what they need.',
    benefits: [
      'Role-based dashboards for every team member',
      'Intervention logging with outcome tracking',
      'AI learns from your team\'s successful strategies',
      'Shared notes and handoff workflows',
    ],
  },
  {
    icon: <Upload className="w-8 h-8" />,
    title: 'Smart Data Import',
    description: 'Drag-and-drop any CSV or Excel file. Our AI maps 659+ column variations automatically. No more manual data wrangling.',
    benefits: [
      'PowerSchool, Infinite Campus, SIRS codes built-in',
      'Zero-PII architecture (names tokenized before AI)',
      'Direct SIS integration available',
      'Works with any data format',
    ],
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics & Reporting',
    description: 'Real-time dashboards and compliance-ready reports. See trends, measure intervention effectiveness, and demonstrate program impact.',
    benefits: [
      'District-wide chronic absence trends',
      'Intervention ROI tracking',
      'Exportable compliance reports',
      'Custom date ranges and filters',
    ],
  },
];

const integrations = [
  'PowerSchool',
  'Infinite Campus',
  'Skyward',
  'Tyler SIS',
  'Aeries',
  'CSV/Excel',
];

export default function FeaturesPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Features', url: 'https://brainbridge.cloud/features' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-amber-400" />
              Powerful Features
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Transform Attendance
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              From AI-powered early warning to seamless parent outreach, BrainBridge gives you
              the tools to support every student before they fall behind.
            </p>
            <Link
              href="/#cta"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Works With Your Existing Systems
            </h2>
            <p className="text-lg text-slate-600">
              BrainBridge integrates with the tools you already use.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration) => (
              <div
                key={integration}
                className="px-6 py-3 bg-white rounded-xl shadow-sm border border-slate-200 text-slate-700 font-medium"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/20 rounded-xl">
                <Shield className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                <p className="text-slate-400">FERPA compliant • Ed Law 2-d certified • Zero-PII AI</p>
              </div>
            </div>
            <Link
              href="/#security"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Learn About Security
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bell className="w-12 h-12 mx-auto mb-6 text-blue-200" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to See BrainBridge in Action?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book a personalized demo and see how these features can transform attendance at your school.
          </p>
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
