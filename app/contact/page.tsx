import { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import DemoForm from '@/components/forms/DemoForm';
import JsonLdScript from '@/components/seo/JsonLdScript';

export const metadata: Metadata = {
  title: 'Contact BrainBridge | Request a Demo',
  description: 'Get in touch with BrainBridge. Request a personalized demo of our attendance intelligence platform, ask questions, or learn more about our solutions for schools.',
  keywords: [
    'contact BrainBridge',
    'attendance software demo',
    'school software demo',
    'BrainBridge support',
  ],
  openGraph: {
    title: 'Contact BrainBridge | Request a Demo',
    description: 'Get in touch with BrainBridge. Request a personalized demo of our attendance intelligence platform.',
    url: 'https://brainbridge.cloud/contact',
  },
  alternates: {
    canonical: 'https://brainbridge.cloud/contact',
  },
};

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'hello@brainbridge.cloud',
    href: 'mailto:hello@brainbridge.cloud',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    label: 'Hours',
    value: 'Mon-Fri, 9am-6pm EST',
    href: null,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'New York, NY',
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        type="page"
        breadcrumbs={[
          { name: 'Home', url: 'https://brainbridge.cloud' },
          { name: 'Contact', url: 'https://brainbridge.cloud/contact' },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let&apos;s Talk About{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Transforming Attendance
              </span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Have questions about BrainBridge? Want to see a personalized demo?
              Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Request a Demo</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form and we&apos;ll be in touch within 24 hours to schedule
                your personalized demo.
              </p>
              <DemoForm variant="light" />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Get in Touch</h2>
              <p className="text-slate-600 mb-8">
                Prefer to reach out directly? Here&apos;s how you can contact us.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-lg font-medium text-slate-900">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Link */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-2">Have Questions?</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Check out our FAQ section for quick answers to common questions about
                  implementation, pricing, and security.
                </p>
                <a
                  href="/#faq"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  View FAQs →
                </a>
              </div>

              {/* What to Expect */}
              <div className="mt-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-4">What to Expect</h3>
                <ul className="space-y-3 text-blue-100 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">1.</span>
                    <span>We&apos;ll respond within 24 hours to schedule your demo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">2.</span>
                    <span>30-minute personalized demo with sample data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">3.</span>
                    <span>Q&A session with our education specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-200">4.</span>
                    <span>Custom pricing based on your school&apos;s needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
