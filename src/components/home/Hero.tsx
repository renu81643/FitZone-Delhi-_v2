import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!bgRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col pt-24 overflow-hidden border-b border-white/5">
      {/* Background stays cinematic but fixed to the hero content area mostly */}
      <div className="absolute inset-0 z-0">
        <img 
          ref={bgRef}
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Gym"
          className="w-full h-full object-cover scale-150 opacity-40"
        />
        <div className="absolute inset-0 bg-[#050505]/40" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row">
        {/* Main Content Area */}
        <div className="flex-[1.2] flex flex-col justify-center px-6 md:px-16 py-12 border-r border-white/5 bg-transparent">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-[11px] font-black uppercase tracking-[0.6em] mb-4 text-white/30">
              Elite Performance
            </span>
            <h1 className="text-6xl md:text-[7rem] lg:text-[10rem] font-black uppercase tracking-[-0.04em] leading-[0.82] mb-6 text-white">
              TRANSFORM<br />
              <span className="font-light italic text-white/40 block">YOUR JOURNEY.</span>
            </h1>
            <p className="text-base md:text-xl text-white/40 font-light max-w-xl mb-8 leading-relaxed tracking-tight">
              Delhi’s premier fitness destination designed for strength, recovery, discipline, and absolute transformation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button to="/book-trial" variant="primary" className="w-full sm:w-auto px-14 py-6 text-xs font-black tracking-[0.2em]">
                BOOK FREE TRIAL
              </Button>
              <Button to="/membership" variant="outline" className="w-full sm:w-auto px-14 py-6 text-xs font-black tracking-[0.2em] border-white/20">
                EXPLORE PLANS
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Sidebar Panels */}
        <div className="flex-1 flex flex-col bg-[#050505]/90 backdrop-blur-xl">
          {/* Panel 1 */}
          <Link to="/membership" className="flex-1 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex-1 p-6 border-b border-white/5 flex flex-col justify-center hover:bg-white/[0.04] transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
                  alt="Elite Membership"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              </div>
              
              <div className="relative z-10">
                <div className="absolute left-[-1.5rem] top-0 bottom-0 w-1 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-0.5 block group-hover:text-white transition-colors group-hover:translate-x-2 duration-500">Membership Spotlight</span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-0.5 group-hover:translate-x-2 transition-transform duration-500">Annual Elite</h3>
                <p className="text-sm text-white/40 font-light max-w-xs leading-relaxed mb-3 group-hover:translate-x-2 transition-transform duration-500">Unlimited access to recovery suites, bio-metric scanning, and personal training.</p>
                <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-2 border border-white/10 text-white/60 self-start group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 group-hover:translate-x-2">
                  <span>From ₹14,999 / yr</span>
                  <ArrowRight size={12} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          </Link>
          
          {/* Panel 2 */}
          <Link to="/programs" className="flex-1 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex-1 p-6 border-b border-white/5 flex flex-col justify-center hover:bg-white/[0.04] transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012?auto=format&fit=crop&q=80&w=1000" 
                  alt="HIIT Class"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="absolute left-[-1.5rem] top-0 bottom-0 w-1 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-0.5 block group-hover:text-white transition-colors group-hover:translate-x-2 duration-500">Next Evolution Class</span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-0.5 group-hover:translate-x-2 transition-transform duration-500">HIIT Matrix</h3>
                <p className="text-sm text-white/40 font-light max-w-xs leading-relaxed mb-3 group-hover:translate-x-2 transition-transform duration-500">High intensity conditioning led by Vikram Singh. Starting in 14 mins.</p>
                <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-2 border border-white/10 text-white/60 self-start group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 group-hover:translate-x-2">
                  <span>Live Tracking Enabled</span>
                  <ArrowRight size={12} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          </Link>


          {/* Panel 3 */}
          <Link to="/trainers" className="flex-1 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 p-6 flex flex-col justify-center hover:bg-white/[0.04] transition-all duration-500 cursor-pointer group relative overflow-hidden"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000" 
                  alt="Trainer Focus"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="absolute left-[-1.5rem] top-0 bottom-0 w-1 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-white/30 mb-0.5 block group-hover:text-white transition-colors group-hover:translate-x-2 duration-500">Trainer Focus</span>
                <h3 className="text-3xl font-black uppercase tracking-tight text-white mb-0.5 group-hover:translate-x-2 transition-transform duration-500">Ananya Rao</h3>
                <p className="text-sm text-white/40 font-light max-w-xs leading-relaxed mb-3 group-hover:translate-x-2 transition-transform duration-500">Specialist in metabolic conditioning and corrective science.</p>
                <div className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-2 border border-white/10 text-white/60 self-start group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 group-hover:translate-x-2">
                  <span>View Profile</span>
                  <ArrowRight size={12} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Structured Trust Indicators */}
      <div className="relative z-10 h-20 border-t border-white/5 flex items-center px-16 gap-16 overflow-x-auto bg-[#050505]">
        <div className="flex items-center gap-4 min-w-max">
          <span className="text-xl font-black text-white">5000+</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40">Members</span>
        </div>
        <div className="flex items-center gap-4 min-w-max">
          <span className="text-xl font-black text-white">25+</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40">Elite Trainers</span>
        </div>
        <div className="flex items-center gap-4 min-w-max">
          <span className="text-xl font-black text-white">4.9</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40">User Rating</span>
        </div>
        <div className="ml-auto hidden md:block">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Gym Hours: 05:00 - 23:00</span>
        </div>
      </div>
    </section>
  );
}
