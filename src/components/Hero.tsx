import React from 'react';
import { ArrowRight, Shield, Play, TrendingUp, Users, Bell, Sparkles } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Attendance Intelligence Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Stop Chasing Absences.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">
                Start Preventing Them.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Early warning system that identifies at-risk students{' '}
              <strong className="text-white">before they become chronically absent.</strong>{' '}
              Built for schools, from the ground up.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={onDemoClick}
                className="group w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch 2-Min Overview
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                FERPA Compliant
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm">
                <Shield className="w-4 h-4 text-emerald-400" />
                Ed Law 2-d Certified
              </div>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            {/* Browser Frame */}
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden border border-white/10">
              {/* Browser Chrome */}
              <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-700 rounded-lg px-3 py-1.5 text-sm text-slate-400 text-center">
                    app.brainbridge.cloud
                  </div>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="bg-slate-50 p-4">
                {/* Top Bar */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-semibold text-slate-900">Good Morning, Principal Smith</div>
                      <div className="text-sm text-slate-500">Lincoln Elementary • January 6, 2026</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                        All Systems Operational
                      </span>
                    </div>
                  </div>
                </div>

                {/* Morning Brief Card */}
                <div className="bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl p-5 text-white mb-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">Today's Morning Brief</div>
                      <p className="text-blue-100 text-sm">AI-generated insights for January 6</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span>5 students require immediate attention today</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>12 students in the yellow zone (3-5 absences)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>89% early intervention success rate this month</span>
                    </div>
                  </div>
                </div>

                {/* Student Cards Preview */}
                <div className="space-y-3">
                  {/* Student Card 1 */}
                  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600">
                        MJ
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Marcus Johnson</div>
                        <div className="text-sm text-slate-500">Grade 7 • 4 absences this month</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-red-600 font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          85
                        </div>
                        <div className="text-xs text-slate-500">Risk Score</div>
                      </div>
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                        CRITICAL
                      </span>
                    </div>
                  </div>

                  {/* Student Card 2 */}
                  <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-semibold text-slate-600">
                        SR
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">Sofia Rodriguez</div>
                        <div className="text-sm text-slate-500">Grade 5 • 3 absences this month</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-amber-600 font-semibold">
                          62
                        </div>
                        <div className="text-xs text-slate-500">Risk Score</div>
                      </div>
                      <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">
                        YELLOW ZONE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 lg:-right-8 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">89%</div>
                  <div className="text-xs text-slate-500">Early Intervention Rate</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bell className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">AI Outreach Sent</div>
                  <div className="text-xs text-slate-500">Parent contacted about Sofia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
