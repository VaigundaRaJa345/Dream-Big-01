import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  icon?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, to, onClick, variant = 'primary', className = '', icon = false, disabled = false }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 py-4 px-8 rounded-sm text-sm uppercase";

  const variants = {
    primary: "bg-brand-accent text-brand-dark hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]",
    secondary: "bg-brand-orange text-white hover:bg-orange-400 hover:scale-105",
    outline: "border border-brand-accent text-brand-accent hover:bg-brand-accent/10 hover:text-white",
  };

  const content = (
    <>
      {children}
      {icon && <ChevronRight className="ml-2 w-4 h-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}>
      {content}
    </button>
  );
};