import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

// Marketing domain config - Sign In should always go to app subdomain
const MARKETING_DOMAIN = 'brainbridge.cloud';
const APP_DOMAIN = 'app.brainbridge.cloud';

const getSignInUrl = (): string => {
  const hostname = window.location.hostname;
  const isMarketingDomain = hostname === MARKETING_DOMAIN || hostname === `www.${MARKETING_DOMAIN}`;
  return isMarketingDomain ? `https://${APP_DOMAIN}/#/login` : '#/login';
};

interface NavbarProps {
  onDemoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onDemoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [signInUrl, setSignInUrl] = useState('#/login');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    // Set sign-in URL based on domain
    setSignInUrl(getSignInUrl());
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Security', href: '#security' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Logo size="md" variant={isScrolled ? 'default' : 'white'} />
            <span className={`font-semibold text-xl ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              BrainBridge
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={signInUrl}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Sign In
            </a>
            <button
              onClick={onDemoClick}
              className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-slate-600' : 'text-white'
            }`}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-slate-200 shadow-xl" role="navigation" aria-label="Mobile navigation">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium"
              >
                {link.label}
              </button>
            ))}
            <hr className="my-2" />
            <a
              href={signInUrl}
              className="block px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg font-medium"
            >
              Sign In
            </a>
            <button
              onClick={() => {
                onDemoClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
