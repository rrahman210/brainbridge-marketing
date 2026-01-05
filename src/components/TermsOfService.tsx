import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import Logo from '../common/Logo';

const TermsOfService: React.FC = () => {
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
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Terms of Service
          </h1>
        </div>

        <p className="text-slate-500 mb-12">
          Last updated: January 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of BrainBridge's attendance
              intelligence platform and services. By accessing or using our services, you agree to be bound
              by these Terms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              If you are using our services on behalf of an educational institution or organization,
              you represent that you have the authority to bind that entity to these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Description of Services
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              BrainBridge provides an AI-powered attendance intelligence platform designed to help
              educational institutions identify and support at-risk students. Our services include:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Student attendance tracking and analysis</li>
              <li>AI-powered risk prediction and early warning systems</li>
              <li>Parent/guardian communication tools</li>
              <li>Reporting and analytics dashboards</li>
              <li>SIS integration capabilities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              User Responsibilities
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a user of BrainBridge, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide accurate information when setting up your account</li>
              <li>Maintain the confidentiality of your login credentials</li>
              <li>Use the platform in compliance with all applicable laws, including FERPA</li>
              <li>Only access student data that you are authorized to view</li>
              <li>Report any security concerns or unauthorized access immediately</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Data Ownership
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Your educational institution retains full ownership of all student data uploaded to or
              generated within BrainBridge. We act as a data processor on your behalf and will only
              use your data to provide the services described in these Terms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Upon termination of your subscription, you may request a complete export of your data.
              We will delete your data within 90 days of account termination unless otherwise required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Intellectual Property
            </h2>
            <p className="text-slate-600 leading-relaxed">
              BrainBridge and its licensors retain all intellectual property rights in the platform,
              including but not limited to our AI models, algorithms, user interface, and documentation.
              Your subscription grants you a limited, non-exclusive license to use the platform for
              its intended purpose.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by law, BrainBridge shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your
              use of our services. Our total liability shall not exceed the amount paid by you for the
              services in the twelve months preceding the claim.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Changes to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We may update these Terms from time to time. We will notify you of any material changes
              by posting the updated Terms on our website and, if applicable, by email. Your continued
              use of our services after such changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@brainbridge.cloud" className="text-blue-600 hover:underline">
                legal@brainbridge.cloud
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

export default TermsOfService;
