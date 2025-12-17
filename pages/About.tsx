import React from 'react';
import { Section } from '../components/Section';
import { Target, Lightbulb, Compass, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
      <div className="pt-20 pb-10 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-brand-accent">Vision</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Bridging the gap between human ambition and digital reality.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">The Founder's Mindset</h2>
            <p className="text-slate-400 leading-relaxed">
              DREAM BIG was born from a simple observation: too many businesses limit their potential by accepting "good enough" technology. 
              We believe that digital platforms shouldn't just support a business—they should propel it forward.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Our philosophy is rooted in <strong>Aggressive Innovation</strong>. We don't wait for trends; we build for where the market is going in five years.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Target, title: 'Precision', text: 'Pixel-perfect execution in code and design.' },
              { icon: Lightbulb, title: 'Innovation', text: 'Solving problems with novel approaches.' },
              { icon: Compass, title: 'Direction', text: 'Strategic guidance for long-term growth.' },
              { icon: Award, title: 'Excellence', text: 'Commitment to world-class quality.' },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/5">
                <item.icon className="w-8 h-8 text-brand-accent mb-4" />
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Roadmap / Timeline */}
      <Section className="bg-brand-navy">
        <h2 className="text-3xl font-bold text-center mb-16">Our <span className="text-brand-accent">Journey</span></h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-white/10"></div>
          
          {[
            { year: '2020', title: 'Inception', desc: 'Founded with a team of 3 elite engineers.' },
            { year: '2022', title: 'Expansion', desc: 'Opened HQ in Tech City, grew to 20+ specialists.' },
            { year: '2024', title: 'Global Reach', desc: 'Serving clients in 12 countries across 3 continents.' },
            { year: 'Future', title: 'AI Integration', desc: 'Pioneering autonomous digital marketing agents.' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between mb-12 w-full ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-10 bg-brand-dark border border-brand-accent rounded-full w-10 h-10 flex items-center justify-center text-xs font-bold text-brand-accent">
                {i + 1}
              </div>
              <div className="w-5/12 bg-brand-dark p-6 rounded-xl border border-white/10 hover:border-brand-accent/50 transition-colors">
                <span className="text-brand-accent font-bold text-sm block mb-1">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};