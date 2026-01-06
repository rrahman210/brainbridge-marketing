import { Metadata } from 'next';
import Link from 'next/link';
import {
  School,
  ArrowRight,
  CheckCircle,
  Sparkles,
  TrendingUp,
  MessageSquare,
  Users,
  Shield,
  BarChart3,
  Bell,
} from 'lucide-react';
import JsonLdScript from '@/components/seo/JsonLdScript';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'School Attendance Tracking Software | BrainBridge for K-12',
  description: 'AI-powered attendance intelligence for K-12 schools. Early warning alerts, automated parent outreach, and intervention tracking for principals, counselors, and attendance teams.',
  keywords: [
    'school attendance software',
    'K-12 attendance tracking',
    'chronic absenteeism prevention',
    'student attendance prediction',
    'school early warning system',
    'attendance coordinator tools',
    'FERPA compliant attendance',
  ],
  openGraph: {
    title: 'School Attendance Tracking Software | BrainBridge for K-12',
    description: 'AI-powered attendance intelligence for K-12 schools. Early warning alerts and automated parent outreach.',
    url: 'https://brainbridge.cloud/solutions/k12-schools',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/solutions/k12-schools',
  },
};

const benefits = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'AI Morning Brief',
    description: 'Start each day knowing exactly which students need attention. AI surfaces the 5 highest-priority cases by 8:00 AM.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Predictive Risk Scoring',
    description: 'Identify at-risk students 3 weeks before they become chronically absent. Yellow zone detection catches problems early.',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Automated Outreach',
    description: 'AI drafts personalized parent messages based on each family\'s barriers. Approve with one click.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Team Dashboards',
    description: 'Role-specific views for principals, counselors, and attendance coordinators. Everyone sees what they need.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Intervention Tracking',
    description: 'Log every interaction, track outcomes, and see which strategies work best for your students.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'FERPA Compliant',
    description: 'Zero-PII AI architecture ensures student names never reach AI models. Enterprise-grade security.',
  },
];

const useCases = [
  {
    role: 'Principal',
    scenario: 'Receives AI-generated morning brief highlighting today\'s priorities and school-wide attendance trends.',
  },
  {
    role: 'Counselor',
    scenario: 'Manages student caseloads with intervention tracking and sees AI-suggested next steps for each student.',
  },
  {
    role: 'Attendance Coordinator',
    scenario: 'Sends personalized parent outreach in minutes instead of hours, with full audit trail.',
  },
];

export default function K12SchoolsPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Solutions', url: 'https://brainbridge.cloud/solutions' },
          { name: 'K-12 Schools', url: 'https://brainbridge.cloud/solutions/k12-schools' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <School className="w-4 h-4" />
                For K-12 Schools
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Transform How Your School{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                  Supports At-Risk Students
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                BrainBridge gives principals, counselors, and attendance teams the AI-powered tools
                to identify struggling students early and intervene before they become chronically absent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  See All Features
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-6xl font-bold text-white mb-2">40%</div>
                <div className="text-blue-200 text-lg">Reduction in Chronic Absenteeism</div>
                <p className="text-blue-100 text-sm mt-4">
                  Schools using BrainBridge see significant improvements in student attendance
                  through early intervention and proactive outreach.
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
              Built for School Attendance Teams
            </h2>
            <p className="text-lg text-slate-600">
              Everything your team needs to move from reactive to proactive attendance management.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-slate-50 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
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
              How Schools Use BrainBridge
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={useCase.role} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.role}</h3>
                <p className="text-slate-600 leading-relaxed">{useCase.scenario}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Key Features for K-12 Schools
              </h2>
              <ul className="space-y-4">
                {[
                  'Morning Brief Intelligence delivered by 8:00 AM',
                  'AI Risk Prediction with research-backed barrier weights',
                  'Automated Parent Outreach (SMS, email, phone logging)',
                  'FERPA-Compliant Audit Trail for every interaction',
                  'SIS Integration (PowerSchool, Infinite Campus, more)',
                  'Role-based dashboards for every team member',
                  'Intervention logging with outcome tracking',
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <Bell className="w-10 h-10 mb-6 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">Early Warning = Better Outcomes</h3>
              <p className="text-blue-100 mb-6">
                Students in the &ldquo;yellow zone&rdquo; (3-5 absences) have an 80% intervention success rate.
                BrainBridge helps you catch them before they reach the red zone.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold">3-5</div>
                  <div className="text-sm text-blue-200">Yellow Zone Absences</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="text-3xl font-bold">80%</div>
                  <div className="text-sm text-blue-200">Intervention Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
