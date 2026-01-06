import { X, Clock, FileSpreadsheet, AlertTriangle, ArrowRight, Sparkles } from 'lucide-react';

const problems = [
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Late Detection',
    description: 'You find out about chronic absences after 20+ days missed. By then, the damage is done.',
    color: 'red',
  },
  {
    icon: <FileSpreadsheet className="w-8 h-8" />,
    title: 'Manual Tracking',
    description: 'Spreadsheets and phone trees waste hours daily. Your team is burned out on data entry.',
    color: 'amber',
  },
  {
    icon: <AlertTriangle className="w-8 h-8" />,
    title: 'No Prevention',
    description: 'Reacting to crises instead of preventing them. Always one step behind.',
    color: 'orange',
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Old Way{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Isn&apos;t Working
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Schools are drowning in data but starving for insight. Traditional attendance
            tracking can&apos;t keep up with the complexity of modern chronic absenteeism.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                problem.color === 'red' ? 'bg-red-100 text-red-600' :
                problem.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                'bg-orange-100 text-orange-600'
              }`}>
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transformation */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-amber-300" />
                The BrainBridge Difference
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                From Reactive to Proactive
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                BrainBridge transforms your attendance strategy. Instead of chasing yesterday&apos;s
                problems, you&apos;re preventing tomorrow&apos;s crises.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all group">
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Before/After Comparison */}
            <div className="space-y-6">
              {/* Before */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-300" />
                  </div>
                  <span className="font-semibold text-white/80">Before BrainBridge</span>
                </div>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Discover absences after 20+ days</li>
                  <li>• Hours spent on manual phone trees</li>
                  <li>• No insight into why students miss school</li>
                </ul>
              </div>

              {/* After */}
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/30 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-emerald-300" />
                  </div>
                  <span className="font-semibold text-white">With BrainBridge</span>
                </div>
                <ul className="space-y-2 text-white text-sm">
                  <li>• AI alerts at 3-5 absences (yellow zone)</li>
                  <li>• One-click personalized outreach</li>
                  <li>• Barrier-aware intervention strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
