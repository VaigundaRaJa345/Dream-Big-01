import React from 'react';
import { SEO } from '../components/SEO';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { Code, Smartphone, BarChart2, Layers, Cpu } from 'lucide-react';
import ServiceWeb from '../assets/service-web.png';
import ServiceApp from '../assets/service-app.png';
import ServiceBranding from '../assets/service-branding.png';
import ServiceGrowth from '../assets/service-growth.png';
import ServiceAutomation from '../assets/service-automation.png';

const servicesList = [
  {
    icon: Layers,
    title: "Brand Identity",
    desc: "We build visual and verbal foundations that define who you are and why you matter.",
    deliverables: ["Logo Design", "Visual Language", "Brand Voice", "Brand Guidelines"],
    outcome: "A cohesive identity that commands a premium market position.",
    image: ServiceBranding
  },
  {
    icon: BarChart2,
    title: "Digital Marketing",
    desc: "Strategic campaigns designed to capture attention and drive sustainable growth.",
    deliverables: ["Performance Marketing", "Social Media Strategy", "SEO & Content", "PPC Campaigns"],
    outcome: "Measured increase in engagement and high-quality lead generation.",
    image: ServiceGrowth
  },
  {
    icon: Code,
    title: "Creative Content",
    desc: "Compelling storytelling through high-impact visuals and persuasive copy.",
    deliverables: ["Video Production", "Copywriting", "Motion Graphics", "Photography"],
    outcome: "Emotional resonance with your audience that drives action.",
    image: ServiceWeb
  },
  {
    icon: Smartphone,
    title: "Public Relations",
    desc: "Managing your reputation and amplifying your message to the right audiences.",
    deliverables: ["Media Relations", "Crisis Management", "Event Strategy", "Influencer Outreach"],
    outcome: "Enhanced brand authority and positive public sentiment.",
    image: ServiceApp
  }
];

export const Services: React.FC = () => {
  return (
    <>
      <SEO
        title="Services | Dream Big Agency"
        description="Explore our elite branding and marketing services. From brand identity to performance marketing, we deliver results that matter."
      />
      <div className="pt-48 pb-24 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-8xl font-black text-brand-text mb-8 tracking-tighter uppercase italic">
            Elite <span className="text-brand-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium">
            Strategic solutions for brands that refuse to be ignored.
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="space-y-40">
          {servicesList.map((service, index) => (
            <div key={index} className={`flex flex-col md:flex-row gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className="inline-flex p-5 rounded-3xl bg-brand-accent text-white shadow-xl shadow-brand-accent/30">
                  <service.icon className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-brand-text uppercase italic tracking-tighter leading-none">{service.title}</h2>
                <p className="text-brand-muted text-xl leading-relaxed">
                  {service.desc}
                </p>

                <div className="pt-4">
                  <h4 className="text-xs font-black text-brand-text uppercase tracking-[0.2em] mb-6">Deliverables</h4>
                  <div className="flex flex-wrap gap-4">
                    {service.deliverables.map((t) => (
                      <span key={t} className="px-6 py-2 bg-brand-navy border border-black/5 rounded-full text-sm font-bold text-brand-text">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-l-4 border-brand-accent pl-8">
                  <h4 className="text-xs font-black text-brand-accent uppercase tracking-[0.2em] mb-2">The Result</h4>
                  <p className="text-brand-text text-lg font-bold">{service.outcome}</p>
                </div>
              </div>

              <div className="flex-1 w-full relative group">
                <div className="absolute -inset-4 bg-brand-accent/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[3rem] shadow-2xl border border-black/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-12">
                    <p className="text-white text-lg font-medium leading-relaxed italic">"Transforming vision into market dominance."</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-brand-text text-center py-32 rounded-t-[5rem]">
        <h2 className="text-4xl md:text-6xl font-black mb-12 text-white uppercase italic tracking-tighter leading-none">Ready to Rewrite <br />Your <span className="text-brand-accent">Brand Story?</span></h2>
        <Button to="/contact" variant="primary" className="scale-125">Start Your Project</Button>
      </Section>
    </>
  );
};