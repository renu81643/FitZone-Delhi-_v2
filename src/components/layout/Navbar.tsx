import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import Button from '../ui/Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Membership', path: '/membership' },
  { name: 'Programs', path: '/programs' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Transformation', path: '/transformation' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[80] transition-all duration-500 h-20 flex items-center border-b",
        isMobileMenuOpen 
          ? "bg-white border-black/5" 
          : (isScrolled ? "bg-[#050505]/80 backdrop-blur-md border-white/5" : "bg-transparent border-transparent")
      )}
    >
      <div className="w-full px-6 md:px-16 flex items-center justify-between relative z-[90]">
        <Link 
          to="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            "text-lg font-black tracking-[0.3em] uppercase transition-colors duration-300",
            isMobileMenuOpen ? "text-black" : "text-white hover:opacity-80"
          )}
        >
          FITZONE <span className={cn("font-light", isMobileMenuOpen ? "text-black/50" : "text-white/70")}>DELHI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-white relative group",
                location.pathname === link.path ? "text-white" : "text-white/40"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <Button to="/join" className="px-6 py-2">Join Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "lg:hidden p-2 z-[70] transition-colors duration-300",
            isMobileMenuOpen ? "text-black" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu - Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-6 pt-20"
          >
            <div className="flex justify-between items-center mb-8 px-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/40">Navigation Structure</span>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6 px-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (i * 0.05) }}
                >
                  <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-4xl font-black uppercase tracking-[-0.02em] transition-colors block",
                      location.pathname === link.path ? "text-black" : "text-black/20 hover:text-black"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto space-y-6 pt-6 border-t border-black/5 px-4 mb-2">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Concierge Desk</span>
                  <p className="text-black text-base font-bold tracking-tight">+91 11 4987 6543</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black/40">Location</span>
                  <p className="text-black/60 text-xs font-light">Greater Kailash II, New Delhi</p>
                </div>
              </div>
              <Button 
                to="/join" 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-full py-5 bg-black text-white border-black hover:bg-black/90 text-xs tracking-[0.3em]"
              >
                Join FITZONE DELHI
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
