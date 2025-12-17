import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Monitor, Smartphone, Globe, BarChart, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { value: '98%', label: 'Client Retention' },
  { value: '250+', label: 'Projects Launched' },
  { value: '10x', label: 'Average ROI' },
  { value: '24/7', label: 'Support System' },
];

export const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Digital World" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-semibold tracking-wider animate-fadeIn">
              FUTURE-READY DIGITAL AGENCY
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tight">
              Dream Bigger. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-glow">Build Smarter.</span> <br />
              Scale Faster.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              We engineer digital ecosystems that transform startups into industry leaders. 
              Your vision, amplified by our technology.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Button to="/contact" icon>Get a Free Consultation</Button>
              <Button to="/services" variant="outline">View Our Services</Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-slate-500">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-brand-accent to-transparent"></div>
        </div>
      </div>

      {/* Services Overview */}
      <Section className="bg-brand-navy relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive <span className="text-brand-accent">Digital Solutions</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">We don't just build websites; we build engines for growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Globe, title: 'Web Development', desc: 'Scalable, lightning-fast web applications built on modern stacks.' },
            { icon: Smartphone, title: 'App Development', desc: 'Native and cross-platform mobile experiences that users love.' },
            { icon: BarChart, title: 'Growth Strategy', desc: 'Data-driven marketing and SEO to dominate your market sector.' },
          ].map((service, idx) => (
            <div key={idx} className="group p-8 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.desc}</p>
              <Link to="/services" className="flex items-center text-brand-accent text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us - Snippet */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Visionaries Trust <br /><span className="text-brand-accent">DREAM BIG</span></h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              In a crowded digital landscape, we stand out by focusing on long-term value over short-term wins. 
              Our engineering is robust, our design is intentional, and our strategy is relentless.
            </p>
            <ul className="space-y-6">
              {[
                { icon: Zap, text: 'Rapid Innovation Cycles' },
                { icon: Shield, text: 'Enterprise-Grade Security' },
                { icon: Users, text: 'Dedicated Success Teams' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-brand-accent/10 text-brand-accent">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg text-slate-200">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button to="/why-us" variant="secondary">Discover Our Advantage</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-accent/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1553877616-15236ed36517?q=80&w=2070&auto=format&fit=crop" 
              alt="Team Strategy" 
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Metrics / Social Proof */}
      <Section className="bg-brand-navy border-y border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{stat.value}</div>
              <div className="text-brand-accent uppercase tracking-widest text-xs md:text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-brand-navy to-brand-dark p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Ready to build something <span className="text-brand-accent">Legendary?</span></h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10">Stop dreaming and start executing. Our team is ready to take your project from concept to global scale.</p>
          <Button to="/contact" className="relative z-10">Start Your Project</Button>
        </div>
      </Section>
    </>
  );
};