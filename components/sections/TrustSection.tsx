import {
  Shield,
  Lock,
  Eye,
  Server,
  CheckCircle,
  FileCheck,
  Brain,
} from 'lucide-react';

const certifications = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'FERPA Compliant',
    description: 'Full compliance with Family Educational Rights and Privacy Act',
    color: 'emerald',
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: 'Ed Law 2-d Certified',
    description: 'NY Education Law 2-d student data privacy certification',
    color: 'blue',
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'COPPA Compliant',
    description: 'Children\'s Online Privacy Protection Act standards',
    color: 'purple',
  },
];

const securityFeatures = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Zero-PII AI Architecture',
    description: 'Student names are tokenized before any AI processing. Our models never see personally identifiable information.',
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Row-Level Security (RLS)',
    description: 'Database-enforced access control ensures users only see data they\'re authorized to access.',
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Complete Audit Trail',
    description: 'Every access, view, and action is logged. Generate compliance reports with one click.',
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Encryption Everywhere',
    description: 'Data encrypted at rest and in transit. SOC 2 Type II certified infrastructure.',
  },
];

export default function TrustSection() {
  return (
    <section id="security" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/20">
            <Shield className="w-4 h-4" />
            Enterprise Security
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade Security.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Zero Compromises.
            </span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            We built BrainBridge from the ground up for student data privacy.
            Your data never leaves your control.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                cert.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400' :
                cert.color === 'blue' ? 'bg-blue-500/10 text-blue-400' :
                cert.color === 'purple' ? 'bg-purple-500/10 text-purple-400' :
                'bg-indigo-500/10 text-indigo-400'
              }`}>
                {cert.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-slate-400 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-3xl border border-slate-700/50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-8">How We Protect Your Data</h3>
              <div className="space-y-8">
                {securityFeatures.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center text-emerald-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 lg:p-12 flex items-center justify-center">
              <div className="relative">
                {/* Central Shield */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 flex items-center justify-center">
                    <Shield className="w-16 h-16 text-emerald-400" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shadow-xl">
                    <Lock className="w-6 h-6 text-emerald-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shadow-xl">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shadow-xl">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="url(#security-gradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="opacity-30"
                  />
                  <defs>
                    <linearGradient id="security-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl lg:text-2xl text-slate-300 italic max-w-3xl mx-auto">
            &ldquo;Privacy isn&apos;t a feature we added later. It&apos;s the foundation we built everything on.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-slate-400">SOC 2 Type II Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
