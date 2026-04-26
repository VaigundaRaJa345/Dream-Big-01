import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Smartphone, Globe, BarChart, ArrowRight, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ServiceWeb from '../assets/service-web.png';
import ServiceApp from '../assets/service-app.png';
import ServiceGrowth from '../assets/service-growth.png';
import TeamStrategy from '../assets/team-strategy.png';

const stats = [
  { value: '98%', label: 'Client Retention' },
  { value: '250+', label: 'Projects Launched' },
  { value: '10x', label: 'Average ROI' },
  { value: '24/7', label: 'Support System' },
];

import { SEO } from '../components/SEO';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Dream Big | Branding & Marketing Agency"
        description="Dream Big is a premium branding and marketing agency helping businesses build unique identities and achieve sustainable growth through creative digital strategies."
      />
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 -left-10 w-96 h-96 bg-brand-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 -right-10 w-96 h-96 bg-brand-glow/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-40 w-96 h-96 bg-brand-secondary/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-sm font-bold tracking-widest animate-fade-in-up">
              DREAM BIG: CREATIVE BRANDING & MARKETING AGENCY
            </div>
            <h1 className="text-5xl md:text-8xl font-extrabold text-brand-text leading-[1.1] mb-8 tracking-tight animate-fade-in-up [animation-delay:200ms]">
              Elevate Your <br />
              <span className="text-gradient">Brand Identity.</span> <br />
              Master the Market.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:400ms]">
              We craft compelling brand stories and execute high-performance marketing campaigns that turn vision into reality. Your success, redefined by our creativity.
            </p>
            <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up [animation-delay:600ms]">
              <Button to="/contact" icon>Start Your Transformation</Button>
              <Button to="/services" variant="outline">Explore Services</Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-brand-accent">
          <div className="w-[2px] h-16 bg-gradient-to-b from-brand-accent/0 via-brand-accent to-brand-accent/0"></div>
        </div>
      </div>

      {/* Services Overview */}
      <Section className="bg-brand-navy relative overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-text">Creative <span className="text-brand-accent">Marketing Solutions</span></h2>
          <p className="text-brand-muted max-w-2xl mx-auto text-lg">We don't just promote brands; we create legacies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Globe, title: 'Brand Strategy', desc: 'Defining your unique value proposition and building a cohesive brand voice.', image: ServiceWeb },
            { icon: Smartphone, title: 'Digital Marketing', desc: 'Omnichannel campaigns that drive engagement and convert leads into loyal fans.', image: ServiceApp },
            { icon: BarChart, title: 'Content Creation', desc: 'High-impact visuals and storytelling that resonate with your target audience.', image: ServiceGrowth },
          ].map((service, idx) => (
            <div key={idx} className="group rounded-2xl glass-panel hover:bg-white transition-all duration-500 transform hover:-translate-y-2 overflow-hidden flex flex-col shadow-sm hover:shadow-2xl">
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-accent/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-10 relative z-20">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent text-white flex items-center justify-center mb-8 -mt-20 relative z-30 shadow-xl shadow-brand-accent/30">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-text group-hover:text-brand-accent transition-colors">{service.title}</h3>
                <p className="text-brand-muted mb-8 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="flex items-center text-brand-accent text-sm font-bold uppercase tracking-widest hover:text-brand-secondary transition-colors group/link">
                  Learn More <ArrowRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us - Snippet */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-text">Why Visionaries <br /><span className="text-brand-accent">Choose DREAM BIG</span></h2>
            <p className="text-brand-muted mb-10 text-lg leading-relaxed">
              In a crowded digital landscape, we stand out by focusing on emotional resonance and data-driven results.
              Our creative process is deep, our execution is flawless, and our results are undeniable.
            </p>
            <ul className="space-y-8">
              {[
                { icon: Zap, text: 'Disruptive Creative Thinking' },
                { icon: Shield, text: 'Strategic Brand Integrity' },
                { icon: Users, text: 'Growth-Focused Partnerships' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-xl text-brand-text">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <Button to="/why-us" variant="secondary">The Dream Big Edge</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-brand-accent/10 rounded-full blur-[120px]"></div>
            <img
              src={TeamStrategy}
              alt="Team Strategy"
              className="relative rounded-3xl shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </Section>

      {/* Metrics / Social Proof */}
      <Section className="bg-brand-navy border-y border-black/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-brand-text mb-3">{stat.value}</div>
              <div className="text-brand-accent uppercase tracking-[0.2em] text-xs md:text-sm font-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="text-center bg-white">
        <div className="max-w-5xl mx-auto bg-brand-text p-16 md:p-24 rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 blur-[120px] rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/20 blur-[100px] rounded-full -ml-20 -mb-20"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white relative z-10 leading-tight">Ready to Become a <br /><span className="text-brand-accent">Market Leader?</span></h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto relative z-10 text-lg">Stop following trends and start setting them. Our team is ready to redefine your brand's future.</p>
          <Button to="/contact" className="relative z-10" variant="primary">Launch Your Brand</Button>
        </div>
      </Section>
    </>
  );
};