import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 md:py-28 px-6 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
};