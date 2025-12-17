import React from 'react';
import { Section } from '../components/Section';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'FinTech Revolution',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    description: 'A mobile banking application for Gen-Z with AI-driven financial insights.',
    result: '+200% User Acquisition'
  },
  {
    id: '2',
    title: 'Neon E-Commerce',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop',
    description: 'High-performance headless Shopify store for a streetwear brand.',
    result: '30% Increase in AOV'
  },
  {
    id: '3',
    title: 'Global Logistics',
    category: 'Platform Engineering',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    description: 'Custom ERP dashboard managing fleets across 4 continents.',
    result: '50% Efficiency Gain'
  },
  {
    id: '4',
    title: 'HealthTech AI',
    category: 'AI & Strategy',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    description: 'Patient portal with automated scheduling and diagnostic prep.',
    result: 'Award Winning UX'
  },
];

export const Portfolio: React.FC = () => {
  return (
    <>
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Selected <span className="text-brand-accent">Work</span></h1>
        <p className="text-slate-400">See how we transform bold ideas into market-leading reality.</p>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-brand-navy border border-white/5">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                  <div className="text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-brand-accent font-bold uppercase tracking-wider text-sm mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-slate-300 mb-6">{project.description}</p>
                    <div className="inline-block px-4 py-2 border border-white/20 rounded-full text-white text-sm">
                      Outcome: {project.result}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};