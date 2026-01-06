import { Metadata } from 'next';
import Link from 'next/link';
import {
  Target,
  Heart,
  Users,
  Shield,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from 'lucide-react';
import JsonLdScript from '@/components/seo/JsonLdScript';

export const metadata: Metadata = {
  title: 'About BrainBridge | Our Mission to End Chronic Absenteeism',
  description: 'Learn about BrainBridge and our mission to help schools identify and support at-risk students before they become chronically absent. Built by educators, for educators.',
  keywords: [
    'BrainBridge company',
    'attendance software company',
    'chronic absenteeism mission',
    'education technology startup',
    'school attendance solution',
  ],
  openGraph: {
    title: 'About BrainBridge | Our Mission to End Chronic Absenteeism',
    description: 'Learn about BrainBridge and our mission to help schools identify and support at-risk students.',
    url: 'https://brainbridge.cloud/about',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/about',
  },
};

const values = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Prevention Over Reaction',
    description: 'We believe in catching problems early, when intervention is most effective. The yellow zone (3-5 absences) is where real change happens.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Student-Centered',
    description: 'Every feature is designed with students in mind. We see attendance as an indicator of wellbeing, not just a metric to track.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Team Empowerment',
    description: 'Schools succeed when every team member has the tools they need. We build for the whole team, not just administrators.',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Privacy First',
    description: 'Student data privacy isn\'t negotiable. Our Zero-PII architecture ensures AI never sees student names.',
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'About', url: 'https://brainbridge.cloud/about' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Every Student Deserves to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Be Seen
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              BrainBridge was founded on a simple belief: schools shouldn&apos;t have to wait
              until a student is chronically absent to help them. We build tools that
              help educators intervene earlier, when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Chronic absenteeism affects over 10 million students in the United States.
                By the time most schools identify a problem, students have already missed
                20+ days and fallen behind academically and socially.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                We&apos;re changing that. BrainBridge uses AI to identify at-risk students
                in the &ldquo;yellow zone&rdquo; (3-5 absences), when intervention has an 80% success rate.
                We help schools move from reactive to proactive.
              </p>
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <Target className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="font-semibold text-slate-900">Yellow Zone = 80% Success</div>
                  <div className="text-slate-600 text-sm">Catching students at 3-5 absences changes everything.</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">The Problem We&apos;re Solving</h3>
              <ul className="space-y-4">
                {[
                  '10M+ students chronically absent nationwide',
                  'Most schools detect problems after 20+ days missed',
                  'Manual tracking wastes hours of staff time daily',
                  'Spreadsheets can\'t predict who needs help next',
                ].map((problem) => (
                  <li key={problem} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-200 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-slate-600">
              These principles guide everything we build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built For Schools */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Built for Schools, From the Ground Up
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            BrainBridge isn&apos;t a generic business tool adapted for education. Every feature
            was designed specifically for the unique challenges of K-12 attendance management.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'FERPA Compliant', detail: 'Full compliance with federal student privacy law' },
              { label: 'Ed Law 2-d Certified', detail: 'NY state student data privacy certification' },
              { label: 'Zero-PII AI', detail: 'Student names never reach AI models' },
            ].map((cert) => (
              <div key={cert.label} className="bg-slate-50 rounded-xl p-6">
                <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                <div className="font-bold text-slate-900 mb-2">{cert.label}</div>
                <div className="text-slate-600 text-sm">{cert.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Join Us in Supporting Every Student
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ready to see how BrainBridge can help your school move from reactive to proactive?
          </p>
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
