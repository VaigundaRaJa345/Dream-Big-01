import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';
import { NavItem } from '../types';

import { SEO } from './SEO';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-text selection:bg-brand-accent selection:text-white">
      <SEO
        title="Dream Big | Branding & Marketing Agency"
        description="Dream Big is a premium branding and marketing agency helping businesses build unique identities and achieve sustainable growth."
      />
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-black/5 py-4 shadow-sm' : 'bg-transparent py-8'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Rocket className="w-8 h-8 text-brand-accent relative z-10" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-brand-text uppercase italic">
              Dream <span className="text-brand-accent">Big</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-brand-accent ${location.pathname === item.path ? 'text-brand-accent' : 'text-brand-text/70'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-8 py-3 text-sm font-bold uppercase tracking-widest text-white bg-brand-text hover:bg-brand-accent transition-all rounded-full ml-4 shadow-lg shadow-black/10 hover:shadow-brand-accent/20 hover:scale-105"
            >
              Start Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-black/5 py-8 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-2xl font-black uppercase tracking-tighter ${location.pathname === item.path ? 'text-brand-accent' : 'text-brand-text'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy border-t border-black/5 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-8">
                <Rocket className="w-8 h-8 text-brand-accent" />
                <span className="text-2xl font-black text-brand-text uppercase italic">
                  Dream <span className="text-brand-accent">Big</span>
                </span>
              </Link>
              <p className="text-brand-muted leading-relaxed mb-8 text-lg">
                We bridge the gap between vision and reality. Crafting brands that command attention and drive results.
              </p>
              <div className="flex gap-6">
                <a href="#" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white transition-all shadow-sm"><Linkedin size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white transition-all shadow-sm"><Twitter size={20} /></a>
                <a href="#" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-brand-text hover:bg-brand-accent hover:text-white transition-all shadow-sm"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-brand-text font-black uppercase tracking-widest text-sm mb-8">Expertise</h4>
              <ul className="space-y-4 text-brand-muted">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors font-medium">Brand Identity</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors font-medium">Digital Marketing</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors font-medium">Creative Direction</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors font-medium">Public Relations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-text font-black uppercase tracking-widest text-sm mb-8">Agency</h4>
              <ul className="space-y-4 text-brand-muted">
                <li><Link to="/about" className="hover:text-brand-accent transition-colors font-medium">Our Story</Link></li>
                <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors font-medium">Our Work</Link></li>
                <li><Link to="/why-us" className="hover:text-brand-accent transition-colors font-medium">The DB Edge</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors font-medium">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-text font-black uppercase tracking-widest text-sm mb-8">Get In Touch</h4>
              <ul className="space-y-6 text-brand-muted">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="font-medium text-lg leading-snug">Chennai, India</span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="font-medium text-lg">+91 8248976853</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-brand-accent shrink-0" />
                  <span className="font-medium text-lg">hello@dreambig.agency</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-brand-muted text-sm font-medium">© {new Date().getFullYear()} DREAM BIG Agency. All rights reserved.</p>
            <div className="flex gap-10 text-sm font-bold uppercase tracking-widest">
              <Link to="/privacy" className="text-brand-muted hover:text-brand-accent transition-colors">Privacy</Link>
              <Link to="/terms" className="text-brand-muted hover:text-brand-accent transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
