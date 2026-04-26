import React from 'react';
import { Section } from '../components/Section';
import { Target, Lightbulb, Compass, Award } from 'lucide-react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Story | Dream Big Agency"
        description="Discover the passion and purpose behind Dream Big. We are a team of creative rebels dedicated to building legendary brands."
      />
      <div className="pt-40 pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-brand-text mb-8 tracking-tighter uppercase italic">
            The <span className="text-brand-accent">Dream</span> Core
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-3xl mx-auto leading-relaxed font-medium">
            We don't just follow the rules of marketing. We rewrite them to ensure your brand stands alone at the top.
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-brand-text uppercase italic tracking-tighter leading-none">The Rebellion <br /><span className="text-brand-accent">Against Generic.</span></h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              Dream Big Agency was founded on a single principle: <strong>Generic is the enemy of growth.</strong> In a world of noise, we help brands find their unique frequency and broadcast it with absolute clarity.
            </p>
            <p className="text-brand-muted text-lg leading-relaxed">
              Our approach combines psychological insights with cutting-edge creative execution. We don't just make things look pretty; we make them perform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: Target, title: 'Obsession', text: 'Total commitment to your brand goals.' },
              { icon: Lightbulb, title: 'Disruption', text: 'Challenging the status quo daily.' },
              { icon: Compass, title: 'Intuition', text: 'Sensing market shifts before they happen.' },
              { icon: Award, title: 'Prestige', text: 'Crafting elite identities for elite brands.' },
            ].map((item, i) => (
              <div key={i} className="bg-brand-navy p-8 rounded-[2rem] border border-black/5 hover:border-brand-accent/30 transition-all group">
                <item.icon className="w-10 h-10 text-brand-accent mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-black text-brand-text mb-3 uppercase tracking-widest text-sm">{item.title}</h3>
                <p className="text-brand-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Roadmap / Timeline */}
      <Section className="bg-brand-navy overflow-hidden">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-24 text-brand-text uppercase italic tracking-tighter">Our <span className="text-brand-accent">Evolution</span></h2>
        <div className="max-w-5xl mx-auto relative px-6">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-brand-accent/20 hidden md:block"></div>

          {[
            { year: '2020', title: 'The Spark', desc: 'Launched with a mission to disrupt traditional marketing models.' },
            { year: '2022', title: 'Growth Phase', desc: 'Scaled our creative team and dominated the regional branding space.' },
            { year: '2024', title: 'Global Impact', desc: 'Partnering with international visionaries across 5 continents.' },
            { year: 'The Future', title: 'Boundless', desc: 'Redefining the intersection of AI and human creativity.' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between mb-20 w-full relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12"></div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 bg-white border-4 border-brand-accent rounded-full w-8 h-8 items-center justify-center"></div>
              <div className="w-full md:w-5/12 bg-white p-10 rounded-[2.5rem] shadow-xl shadow-black/5 hover:shadow-brand-accent/10 transition-all border border-black/5 group">
                <span className="text-brand-accent font-black text-xl block mb-2">{item.year}</span>
                <h3 className="text-2xl font-black text-brand-text mb-4 uppercase italic tracking-tighter">{item.title}</h3>
                <p className="text-brand-muted text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};