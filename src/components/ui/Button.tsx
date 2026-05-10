import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}

export default function Button({ children, to, onClick, variant = 'primary', className }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-white text-black hover:bg-black hover:text-white border border-white",
    secondary: "bg-transparent text-white border border-white/20 hover:border-white",
    outline: "bg-transparent text-white border border-white/10 hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-white hover:bg-white/5"
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"
          initial={false}
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cn(baseStyles, variants[variant], className)}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={cn(baseStyles, variants[variant], className)}>
      {content}
    </button>
  );
}
