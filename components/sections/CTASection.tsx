'use client';

import { RefObject } from 'react';
import { CheckCircle } from 'lucide-react';
import DemoForm from '@/components/forms/DemoForm';

interface CTASectionProps {
  formRef?: RefObject<HTMLDivElement>;
}

const benefits = [
  'Personalized demo tailored to your school',
  'See real examples with sample data',
  'Q&A with our education specialists',
  'No commitment required',
];

export default function CTASection({ formRef }: CTASectionProps) {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Attendance at Your School?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join schools nationwide using attendance intelligence to support students before they fall behind.
              Book a personalized demo to see BrainBridge in action.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                  </div>
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right - Form */}
          <div ref={formRef} className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Request a Demo</h3>
              <p className="text-slate-600">
                Fill out the form and we&apos;ll be in touch within 24 hours.
              </p>
            </div>
            <DemoForm variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
