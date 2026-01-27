import React from 'react';
import { Section } from '../components/Section';
import { CheckCircle, TrendingUp, Users, Lock, Clock, Zap } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Strategy First",
      desc: "We don't write a line of code until we understand your business model and growth targets."
    },
    {
      icon: Zap,
      title: "ROI-Driven Execution",
      desc: "Every pixel and every feature is designed to convert visitors into customers."
    },
    {
      icon: Users,
      title: "Transparent Communication",
      desc: "No jargon. No hidden fees. You get direct access to project managers and developers."
    },
    {
      icon: CheckCircle,
      title: "Scalable Solutions",
      desc: "We build architectures that can handle 10 users or 10 million users without breaking."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      desc: "We respect your roadmap. Our agile methodology ensures we ship quality on schedule."
    },
    {
      icon: Lock,
      title: "Startup-Friendly Pricing",
      desc: "Flexible engagement models designed for high-growth companies managing cash flow."
    }
  ];

  return (
    <>
      <div className="pt-32 pb-16 bg-brand-navy relative">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-accent/5 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The <span className="text-brand-accent">DREAM BIG</span> Advantage</h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Partner with a team that cares about your success as much as you do.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-brand-dark p-8 rounded-xl border border-white/10 hover:border-brand-accent/50 hover:-translate-y-2 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 bg-brand-accent/20 rounded-lg flex items-center justify-center text-brand-accent mb-6">
                <reason.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};