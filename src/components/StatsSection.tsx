import React from 'react';
import { Users, Target, Clock, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: <Target className="w-6 h-6" />,
    value: 'Early Warning',
    label: 'Risk Detection',
    description: 'Identify at-risk students before chronic absence',
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: 'Team-Wide',
    label: 'Caseload Management',
    description: 'For coordinators, counselors & advocates',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: 'Any Format',
    label: 'Smart Import',
    description: 'Works with any SIS or CSV file',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: 'FERPA',
    label: 'Compliant',
    description: 'Enterprise-grade security & privacy',
  },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-700 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Trust logos placeholder */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <p className="text-center text-sm text-slate-500 mb-8">
            Trusted by schools and community organizations nationwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {/* Placeholder logos - these would be replaced with actual school/org logos */}
            {['K-12 Schools', 'Community Schools', 'CBOs', 'Districts'].map((org) => (
              <div
                key={org}
                className="px-6 py-3 bg-slate-200 rounded-lg text-slate-700 font-semibold text-sm"
              >
                {org}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
