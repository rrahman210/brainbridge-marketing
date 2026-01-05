import React from 'react';
import {
  Sparkles,
  TrendingUp,
  MessageSquare,
  Users,
  Upload,
  CheckCircle,
  ArrowRight,
  Bell,
  Brain,
  Shield,
  Zap,
} from 'lucide-react';

interface Feature {
  id: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  points: string[];
  mockup: React.ReactNode;
}

const features: Feature[] = [
  {
    id: 'morning-brief',
    icon: <Sparkles className="w-6 h-6" />,
    badge: 'AI Intelligence',
    title: 'Start Every Day with Actionable Intelligence',
    description:
      'AI analyzes overnight data to surface the 5 students who need you most today. Know who to call before the first bell.',
    points: [
      'Cross-references attendance with barriers (housing, transit, food)',
      'Prioritized by risk score and intervention success probability',
      'Delivered to your dashboard by 8:00 AM',
    ],
    mockup: <MorningBriefMockup />,
  },
  {
    id: 'risk-prediction',
    icon: <Brain className="w-6 h-6" />,
    badge: 'Machine Learning',
    title: 'Predict Risk Before It Becomes Chronic',
    description:
      'Machine learning identifies patterns invisible to the human eye. Our model predicts which students will become chronically absent 3 weeks before it happens.',
    points: [
      'Research-backed barrier weights (Housing +25, Transport +15)',
      'Yellow zone detection (3-5 absences = 80% intervention success)',
      'Continuous learning from your intervention outcomes',
    ],
    mockup: <RiskPredictionMockup />,
  },
  {
    id: 'smart-outreach',
    icon: <MessageSquare className="w-6 h-6" />,
    badge: 'AI Outreach',
    title: 'Personalized Outreach at Scale',
    description:
      'AI drafts parent messages tailored to each family\'s specific barriers. Approve with one click, or customize.',
    points: [
      'Context-aware messaging (housing instability vs. transportation)',
      'Multi-channel: SMS, email, phone logging',
      'FERPA-compliant audit trail for every interaction',
    ],
    mockup: <OutreachMockup />,
  },
  {
    id: 'caseload',
    icon: <Users className="w-6 h-6" />,
    badge: 'Team Collaboration',
    title: 'Empower Your Entire Team',
    description:
      'Attendance coordinators, success mentors, and youth advocates each get their own caseload view. Log interventions, track progress, see what works.',
    points: [
      'Role-based dashboards for every team member',
      'Intervention logging with outcome tracking',
      'AI learns from your team\'s successful strategies',
    ],
    mockup: <CaseloadMockup />,
  },
  {
    id: 'smart-import',
    icon: <Upload className="w-6 h-6" />,
    badge: 'Smart Import',
    title: 'Any Data. Any Format. Zero Headaches.',
    description:
      'Drag-and-drop any CSV or Excel file. Our AI maps 659+ column variations automatically. No more manual data wrangling.',
    points: [
      'PowerSchool, Infinite Campus, SIRS codes built-in',
      'Zero-PII architecture (names tokenized before AI)',
      'Direct SIS integration available',
    ],
    mockup: <SmartImportMockup />,
  },
];

// Mockup Components
function MorningBriefMockup() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white shadow-xl">
      <div className="flex items-start gap-3 mb-5">
        <div className="p-2 bg-white/20 rounded-lg">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <div className="font-semibold text-lg">Today's Morning Brief</div>
          <p className="text-blue-100 text-sm">AI-generated insights • 8:00 AM</p>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <span>Marcus J. - 4th consecutive absence, housing barrier detected</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Sofia R. - Yellow zone, transportation issue flagged</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Aiden P. - Back on track after parent outreach</span>
        </div>
      </div>
    </div>
  );
}

function RiskPredictionMockup() {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-700 text-lg">
              MJ
            </div>
            <div>
              <div className="font-semibold text-slate-900">Marcus Johnson</div>
              <div className="text-sm text-slate-500">Grade 7 • Room 204</div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-red-600 font-bold text-2xl">
              <TrendingUp className="w-5 h-5" />
              85
            </div>
            <div className="text-xs text-slate-500">Risk Score</div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-slate-50">
        <div className="text-sm font-medium text-slate-600 mb-3">AI Risk Factors</div>
        <div className="space-y-2">
          <div className="flex items-center justify-between bg-white rounded-lg p-3">
            <span className="text-sm text-slate-700">Housing Instability</span>
            <span className="text-sm font-semibold text-red-600">+25</span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg p-3">
            <span className="text-sm text-slate-700">Transportation Barrier</span>
            <span className="text-sm font-semibold text-amber-700">+15</span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg p-3">
            <span className="text-sm text-slate-700">Attendance Trend</span>
            <span className="text-sm font-semibold text-red-600">+20</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg border border-amber-200">
          <Bell className="w-4 h-4 text-amber-600" />
          <span className="text-sm text-amber-700">Predicted chronic absence in 3 weeks</span>
        </div>
      </div>
    </div>
  );
}

function OutreachMockup() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Sparkles className="w-4 h-4 text-purple-600" />
        </div>
        <span className="text-sm font-medium text-purple-600">AI-Generated Draft</span>
      </div>
      <div className="bg-slate-50 rounded-lg p-4 mb-4">
        <p className="text-slate-700 text-sm leading-relaxed">
          Hi Mrs. Johnson, this is PS 123. We noticed Marcus has missed a few days recently and wanted
          to check in. We understand getting to school can be challenging - we have resources that
          may help with transportation. Please call us at (718) 555-0123 or reply to this message.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span className="text-xs text-slate-500">FERPA Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
            Edit
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Approve & Send
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseloadMockup() {
  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-slate-900">My Caseload</div>
            <p className="text-sm text-slate-500">Success Mentor View</p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            12 Students
          </span>
        </div>
      </div>
      <div className="divide-y divide-slate-100">
        {[
          { name: 'Marcus J.', status: 'Needs Check-in', color: 'red' },
          { name: 'Sofia R.', status: 'In Progress', color: 'amber' },
          { name: 'Aiden P.', status: 'On Track', color: 'emerald' },
        ].map((student) => (
          <div key={student.name} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-medium text-slate-700">
                {student.name.split(' ').map(n => n[0]).join('')}
              </div>
              <span className="font-medium text-slate-800">{student.name}</span>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              student.color === 'red' ? 'bg-red-100 text-red-700' :
              student.color === 'amber' ? 'bg-amber-100 text-amber-700' :
              'bg-emerald-100 text-emerald-700'
            }`}>
              {student.status}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 bg-slate-50">
        <button className="w-full py-2 text-blue-600 font-medium text-sm hover:bg-blue-50 rounded-lg transition-colors">
          View All Students →
        </button>
      </div>
    </div>
  );
}

function SmartImportMockup() {
  return (
    <div className="bg-white rounded-xl shadow-xl p-5">
      <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
          <Upload className="w-6 h-6 text-blue-600" />
        </div>
        <p className="text-slate-600 font-medium mb-1">Drop your file here</p>
        <p className="text-sm text-slate-500">CSV, Excel, or connect your SIS</p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
          <CheckCircle className="w-5 h-5 text-emerald-600" />
          <div className="flex-1">
            <span className="text-sm font-medium text-slate-700">attendance_jan2026.csv</span>
            <span className="text-xs text-slate-500 ml-2">659 columns auto-mapped</span>
          </div>
          <Zap className="w-4 h-4 text-amber-500" />
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Shield className="w-4 h-4 text-emerald-600" />
          <span>Zero-PII: Names tokenized before AI processing</span>
        </div>
      </div>
    </div>
  );
}

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Transform Attendance
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From early warning to seamless parent outreach, BrainBridge gives you
            the tools to support every student.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                  {feature.icon}
                  {feature.badge}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`#${feature.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mockup */}
              <div className="flex-1 w-full max-w-lg lg:max-w-none">
                {feature.mockup}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
