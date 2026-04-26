import React from 'react';
import { Section } from '../components/Section';
import { CheckCircle, TrendingUp, Users, Lock, Clock, Zap } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Psychology-Led Strategy",
      desc: "We dive deep into consumer behavior to build brands that resonate on an emotional level."
    },
    {
      icon: Zap,
      title: "Hyper-Performance",
      desc: "Our campaigns are optimized for maximum conversion, ensuring every dollar spent works for you."
    },
    {
      icon: Users,
      title: "Radical Transparency",
      desc: "Direct access to our creative leads. No account managers, just results-driven experts."
    },
    {
      icon: CheckCircle,
      title: "Brand Integrity",
      desc: "We ensure your brand remains consistent and powerful across every single touchpoint."
    },
    {
      icon: Clock,
      title: "Agile Creative Process",
      desc: "Rapid prototyping and execution. We move as fast as the market moves."
    },
    {
      icon: Lock,
      title: "Elite Network",
      desc: "Leverage our connections with top-tier media outlets and industry influencers."
    }
  ];

  return (
    <>
      <div className="pt-48 pb-24 bg-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black mb-8 text-brand-text uppercase italic tracking-tighter">The <span className="text-brand-accent">Dream Big</span> Edge</h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-2xl font-medium">
            Partner with a team that values legacy over likeness.
          </p>
        </div>
      </div>

      <Section className="bg-brand-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-black/5 hover:shadow-brand-accent/20 hover:-translate-y-2 transition-all duration-500 border border-black/5 group">
              <div className="w-16 h-16 bg-brand-accent text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-brand-text mb-4 uppercase italic tracking-tighter">{reason.title}</h3>
              <p className="text-brand-muted leading-relaxed text-lg">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};