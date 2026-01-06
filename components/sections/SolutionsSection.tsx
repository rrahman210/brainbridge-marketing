'use client';

import { useState, ReactNode } from 'react';
import {
  School,
  Building2,
  Users,
  ArrowRight,
  TrendingDown,
  Target,
  Handshake,
} from 'lucide-react';

interface Solution {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  metric: {
    value: string;
    label: string;
  };
  useCases: string[];
  features: string[];
}

const solutions: Solution[] = [
  {
    id: 'schools',
    icon: <School className="w-6 h-6" />,
    title: 'K-12 Schools',
    subtitle: 'For Principals, APs, and Counselors',
    description:
      'Transform how your school identifies and supports at-risk students. Get early warning alerts, automate parent outreach, and track interventions all in one place.',
    metric: {
      value: '40%',
      label: 'Reduction in Chronic Absenteeism',
    },
    useCases: [
      'Principal receives AI-generated morning brief highlighting today\'s priorities',
      'Counselors manage student caseloads with intervention tracking',
      'Attendance team sends personalized parent outreach in minutes, not hours',
    ],
    features: [
      'Morning Brief Intelligence',
      'AI Risk Prediction',
      'Automated Parent Outreach',
      'FERPA-Compliant Audit Trail',
      'SIS Integration (PowerSchool, Infinite Campus)',
    ],
  },
  {
    id: 'cbos',
    icon: <Building2 className="w-6 h-6" />,
    title: 'Community-Based Organizations',
    subtitle: 'For Youth Advocates and Case Managers',
    description:
      'Coordinate wraparound services more effectively. Track home visits, log interventions, and measure program impact with data that proves your value.',
    metric: {
      value: '3.2x',
      label: 'Faster Response Time',
    },
    useCases: [
      'Youth advocates log home visits and see AI-suggested next steps',
      'Case managers track barrier removal progress (housing, food, transport)',
      'Program directors measure intervention effectiveness across all students',
    ],
    features: [
      'Caseload Management',
      'Intervention Logging',
      'Barrier Tracking',
      'Outcome Analytics',
      'Multi-Organization Collaboration',
    ],
  },
  {
    id: 'community-schools',
    icon: <Users className="w-6 h-6" />,
    title: 'Community Schools',
    subtitle: 'For Community School Directors',
    description:
      'Unite school staff and community partners around shared student data. Coordinate integrated student support with a single source of truth.',
    metric: {
      value: '89%',
      label: 'Early Intervention Success Rate',
    },
    useCases: [
      'Community School Directors see all support activity in one dashboard',
      'School and CBO staff coordinate on shared student caseloads',
      'Real-time intelligence sharing between all support providers',
    ],
    features: [
      'Unified Dashboard',
      'Cross-Agency Coordination',
      'Shared Student Profiles',
      'Role-Based Access Control',
      'Impact Reporting',
    ],
  },
];

export default function SolutionsSection() {
  const [activeTab, setActiveTab] = useState<string>('schools');
  const activeSolution = solutions.find((s) => s.id === activeTab) || solutions[0];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Every Stakeholder
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re a school, CBO, or community school, BrainBridge adapts to your needs
            with role-specific dashboards and workflows.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {solutions.map((solution) => (
            <button
              key={solution.id}
              onClick={() => setActiveTab(solution.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === solution.id
                  ? 'bg-white text-slate-900 shadow-lg shadow-slate-200/50'
                  : 'bg-slate-100 text-slate-700 hover:bg-white hover:shadow-md'
              }`}
            >
              {solution.icon}
              {solution.title}
            </button>
          ))}
        </div>

        {/* Active Solution Content */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                  {activeSolution.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{activeSolution.title}</h3>
                  <p className="text-slate-500">{activeSolution.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {activeSolution.description}
              </p>

              {/* Metric */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <TrendingDown className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-indigo-600">{activeSolution.metric.value}</div>
                    <div className="text-slate-600">{activeSolution.metric.label}</div>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  Key Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeSolution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/25 group">
                See {activeSolution.title} in Action
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right - Use Cases */}
            <div className="bg-slate-50 p-8 lg:p-12">
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                How It Works
              </h4>
              <div className="space-y-6">
                {activeSolution.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-slate-700 leading-relaxed pt-1">{useCase}</p>
                  </div>
                ))}
              </div>

              {/* Illustration */}
              <div className="mt-10 bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <Handshake className="w-6 h-6 text-indigo-600" />
                  <span className="font-semibold text-slate-900">Seamless Collaboration</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  BrainBridge connects all stakeholders around shared student data, ensuring
                  everyone has the intelligence they need to support student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
