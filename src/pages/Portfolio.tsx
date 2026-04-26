import React from 'react';
import { Section } from '../components/Section';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Aura Skincare',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2070&auto=format&fit=crop',
    description: 'Reimagining luxury through minimalist design and sustainable storytelling.',
    result: 'Market Leader in 6 Months'
  },
  {
    id: '2',
    title: 'Nexus Tech',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop',
    description: 'Scaling a SaaS unicorn with data-driven omnichannel performance campaigns.',
    result: '400% Revenue Growth'
  },
  {
    id: '3',
    title: 'Pulse Energy',
    category: 'Creative Content',
    image: 'https://images.unsplash.com/photo-1492691523567-6170c2485fa8?q=80&w=2070&auto=format&fit=crop',
    description: 'Dynamic video production and motion graphics for a global beverage brand.',
    result: '20M+ Social Engagement'
  },
  {
    id: '4',
    title: 'Vanguard Realty',
    category: 'Public Relations',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    description: 'Managing the reputation and media presence for elite real estate developers.',
    result: 'Top-Tier Media Coverage'
  },
];

export const Portfolio: React.FC = () => {
  return (
    <>
      <div className="pt-48 pb-24 text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-accent/5 blur-[120px] rounded-full"></div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 text-brand-text uppercase italic tracking-tighter">Iconic <span className="text-brand-accent">Case Studies</span></h1>
        <p className="text-xl md:text-2xl text-brand-muted max-w-2xl mx-auto font-medium">Witness the transformation of vision into market dominance.</p>
      </div>

      <Section className="bg-brand-navy">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-black/5 hover:shadow-brand-accent/20 transition-all duration-700">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-text/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12">
                  <div className="text-center translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-brand-accent font-black uppercase tracking-[0.2em] text-xs mb-4">{project.category}</p>
                    <h3 className="text-4xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">{project.title}</h3>
                    <p className="text-slate-300 text-lg mb-8 leading-relaxed italic">"{project.description}"</p>
                    <div className="inline-block px-8 py-3 border-2 border-brand-accent rounded-full text-brand-accent font-black uppercase tracking-widest text-xs">
                      {project.result}
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