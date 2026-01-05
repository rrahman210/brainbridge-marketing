import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import Logo from '../common/Logo';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Logo size="md" variant="white" />
            <span className="font-semibold text-xl">BrainBridge</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-blue-100 rounded-xl">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Privacy Policy
          </h1>
        </div>

        <p className="text-slate-500 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BrainBridge is committed to protecting the privacy of students, families, and educational institutions.
              We understand the sensitive nature of student data and have built our platform from the ground up with
              privacy and security as core principles.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This Privacy Policy describes how we collect, use, and protect information when you use our
              attendance intelligence platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              FERPA Compliance
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BrainBridge is fully compliant with the Family Educational Rights and Privacy Act (FERPA).
              We act as a "school official" under FERPA when processing student education records on behalf
              of educational institutions.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>We only access student data as authorized by the educational institution</li>
              <li>We maintain strict access controls and audit trails</li>
              <li>We do not use student data for advertising or marketing purposes</li>
              <li>Parents and eligible students maintain their rights to access and correct records</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Data We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect only the data necessary to provide our attendance intelligence services:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Student attendance records</li>
              <li>Student demographic information (as provided by the school)</li>
              <li>Contact information for parent/guardian outreach</li>
              <li>Communication logs (for compliance and audit purposes)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Zero-PII AI Architecture
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our AI systems are designed with a zero-PII (Personally Identifiable Information) architecture.
              Student names and other identifying information are tokenized before any AI processing occurs.
              This means our AI models never see actual student identities.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement industry-leading security measures to protect your data:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Encryption at rest and in transit (TLS 1.3)</li>
              <li>Row-level security (RLS) ensuring users only see authorized data</li>
              <li>SOC 2 Type II certified infrastructure</li>
              <li>Regular security audits and penetration testing</li>
              <li>Complete audit trails for all data access</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at{' '}
              <a href="mailto:privacy@brainbridge.cloud" className="text-blue-600 hover:underline">
                privacy@brainbridge.cloud
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} BrainBridge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
