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
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 py-4 px-10 rounded-full text-sm uppercase";

  const variants = {
    primary: "bg-brand-accent text-white hover:bg-brand-secondary hover:scale-105 shadow-lg shadow-brand-accent/20",
    secondary: "bg-brand-text text-white hover:bg-brand-accent hover:scale-105 shadow-lg",
    outline: "border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-colors",
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