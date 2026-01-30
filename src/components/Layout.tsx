import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Mail, MapPin, Phone, Linkedin, Twitter, Instagram } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Why Us', path: '/why-us' },
  { label: 'Portfolio', path: '/portfolio' },
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
    <div className="min-h-screen flex flex-col bg-brand-dark text-slate-200 selection:bg-brand-accent selection:text-brand-dark">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-accent blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <Rocket className="w-8 h-8 text-brand-accent relative z-10" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              DREAM <span className="text-brand-accent">BIG</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-accent ${location.pathname === item.path ? 'text-brand-accent' : 'text-slate-300'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 text-sm font-semibold text-brand-dark bg-brand-accent hover:bg-white transition-colors rounded-sm ml-4"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-b border-white/10 py-4 px-6 flex flex-col gap-4 shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium ${location.pathname === item.path ? 'text-brand-accent' : 'text-slate-300'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy border-t border-white/5 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-6">
                <Rocket className="w-6 h-6 text-brand-accent" />
                <span className="text-xl font-bold text-white">
                  DREAM <span className="text-brand-accent">BIG</span>
                </span>
              </Link>
              <p className="text-slate-400 leading-relaxed mb-6">
                Innovate. Elevate. Succeed. We are the digital partners for ambitious founders building the future.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-slate-400 hover:text-brand-accent transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Digital Strategy</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Web Development</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Mobile Apps</Link></li>
                <li><Link to="/services" className="hover:text-brand-accent transition-colors">Branding</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-slate-400">
                <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
                <li><Link to="/portfolio" className="hover:text-brand-accent transition-colors">Case Studies</Link></li>
                <li><Link to="/why-us" className="hover:text-brand-accent transition-colors">Why Choose Us</Link></li>
                <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>Chennai,<br />India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>+91 8248976853</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>team@dbpro.digital</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} DREAM BIG Digital Solutions. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-slate-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
