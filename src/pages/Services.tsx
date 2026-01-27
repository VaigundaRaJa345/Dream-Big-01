import React from 'react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Code, Smartphone, BarChart2, Layers, Cpu } from 'lucide-react';

const servicesList = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Custom, high-performance web applications tailored to your business logic.",
    tech: ["React/Next.js", "Node.js", "Python", "AWS"],
    outcome: "40% faster load times, higher conversion rates.",
    image: "/src/assets/service-web.png"
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Native iOS and Android apps that provide seamless user experiences.",
    tech: ["React Native", "Flutter", "Swift", "Kotlin"],
    outcome: "Top-tier App Store ratings and user retention.",
    image: "/src/assets/service-app.png"
  },
  {
    icon: Layers,
    title: "Branding & Creative",
    desc: "Forging unique brand identities that resonate with modern audiences.",
    tech: ["UI/UX Design", "Motion Graphics", "3D Modeling"],
    outcome: "A memorable brand presence that commands authority.",
    image: "/src/assets/service-branding.png"
  },
  {
    icon: BarChart2,
    title: "Digital Marketing",
    desc: "ROI-driven campaigns across search, social, and programmatic channels.",
    tech: ["Google Ads", "SEO", "Social Media", "Analytics"],
    outcome: "Consistent lead generation and predictable growth.",
    image: "/src/assets/service-growth.png"
  },
  {
    icon: Cpu,
    title: "Business Automation",
    desc: "Streamlining operations with custom software and AI integration.",
    tech: ["Gemini API", "Zapier", "Custom ERPs"],
    outcome: "Reduced operational costs and manual errors.",
    image: "/src/assets/service-automation.png"
  }
];

export const Services: React.FC = () => {
  return (
    <>
      <div className="pt-32 pb-16 text-center bg-brand-navy">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our <span className="text-brand-accent">Expertise</span></h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-6">
          We combine creative artistry with engineering precision to deliver holistic digital solutions.
        </p>
      </div>

      <Section>
        <div className="space-y-24">
          {servicesList.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="inline-block p-4 rounded-2xl bg-brand-accent/10 mb-6">
                  <service.icon className="w-10 h-10 text-brand-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-l-4 border-brand-accent pl-4">
                  <h4 className="text-sm font-bold text-brand-accent uppercase mb-1">Expected Outcome</h4>
                  <p className="text-slate-300">{service.outcome}</p>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="bg-brand-navy p-1 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-brand-accent/30 transition-colors h-full min-h-[300px] flex items-center justify-center">
                  <div className="relative w-full h-full min-h-[350px] overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-brand-navy/60 z-10 group-hover:bg-brand-navy/30 transition-colors duration-500"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="bg-brand-navy/20 backdrop-blur-sm p-6 rounded-full border border-white/10 group-hover:border-brand-accent/50 transition-colors">
                        <service.icon className="w-16 h-16 text-white group-hover:text-brand-accent transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-dark text-center">
        <h2 className="text-3xl font-bold mb-8">Not sure what you need?</h2>
        <Button to="/contact">Book a Strategy Call</Button>
      </Section>
    </>
  );
};