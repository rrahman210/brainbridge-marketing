import { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  ArrowRight,
  CheckCircle,
  BarChart3,
  TrendingDown,
  Shield,
  Users,
  FileCheck,
  Globe,
} from 'lucide-react';
import JsonLdScript from '@/components/seo/JsonLdScript';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'District-Wide Chronic Absenteeism Solution | BrainBridge',
  description: 'Enterprise attendance intelligence for school districts. Multi-school analytics, trend analysis, policy reporting, and district-wide chronic absenteeism prevention.',
  keywords: [
    'district attendance software',
    'chronic absenteeism solution',
    'district-wide attendance tracking',
    'school district analytics',
    'attendance reporting software',
    'multi-school attendance management',
  ],
  openGraph: {
    title: 'District-Wide Chronic Absenteeism Solution | BrainBridge',
    description: 'Enterprise attendance intelligence for school districts. Multi-school analytics and policy reporting.',
    url: 'https://brainbridge.cloud/solutions/districts',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/solutions/districts',
  },
};

const benefits = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'District-Wide Analytics',
    description: 'See chronic absenteeism trends across all schools. Identify patterns, compare buildings, and allocate resources effectively.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Trend Analysis',
    description: 'Track attendance improvements over time. Measure the impact of interventions and programs at scale.',
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: 'Policy Reporting',
    description: 'Generate compliance-ready reports for state and federal requirements. One-click exports for board presentations.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Multi-School Management',
    description: 'Centralized administration with building-level autonomy. Each school sees their data; district sees everything.',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Cross-School Insights',
    description: 'Identify which schools have the most effective intervention strategies and replicate them district-wide.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Enterprise Security',
    description: 'FERPA compliant, Ed Law 2-d certified. Row-level security ensures proper data access at every level.',
  },
];

const metrics = [
  { value: '40%', label: 'Reduction in Chronic Absenteeism' },
  { value: '10+', label: 'Schools Per District Supported' },
  { value: '100K+', label: 'Students Tracked' },
  { value: '24hrs', label: 'Onboarding Per School' },
];

export default function DistrictsPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Solutions', url: 'https://brainbridge.cloud/solutions' },
          { name: 'Districts', url: 'https://brainbridge.cloud/solutions/districts' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                For School Districts
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                District-Wide{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                  Attendance Intelligence
                </span>
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed mb-8">
                Give district administrators the visibility they need to reduce chronic absenteeism
                across all schools. Multi-school analytics, trend analysis, and compliance reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-all shadow-xl"
                >
                  Request District Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-indigo-200 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Enterprise Features for Districts
            </h2>
            <p className="text-lg text-slate-600">
              Centralized visibility with building-level autonomy. Every stakeholder sees what they need.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              How Districts Use BrainBridge
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Connect All Schools',
                description: 'Import attendance data from all buildings. We handle any SIS, any format.',
              },
              {
                step: 2,
                title: 'Enable Building Teams',
                description: 'Each school gets their own dashboard and AI-powered tools for intervention.',
              },
              {
                step: 3,
                title: 'Monitor District-Wide',
                description: 'Track trends, compare schools, and generate compliance reports from one dashboard.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                District-Level Capabilities
              </h2>
              <ul className="space-y-4">
                {[
                  'Cross-school chronic absence trend analysis',
                  'Building-by-building performance comparison',
                  'Centralized user management and permissions',
                  'District-wide intervention strategy insights',
                  'State and federal compliance reporting',
                  'Multi-school SIS integration support',
                  'Dedicated district success manager',
                  'Custom training for all building teams',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
              <BarChart3 className="w-10 h-10 mb-6 text-indigo-200" />
              <h3 className="text-2xl font-bold mb-4">Data-Driven Decision Making</h3>
              <p className="text-indigo-100 mb-6">
                See which schools have the highest chronic absence rates, which interventions are working,
                and where to focus district resources for maximum impact.
              </p>
              <Link
                href="/#cta"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-indigo-50 transition-all"
              >
                Schedule District Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
