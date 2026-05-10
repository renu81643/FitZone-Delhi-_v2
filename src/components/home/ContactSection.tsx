import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import type { FormEvent } from 'react';

export default function ContactSection() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">Take the First Step</span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
              Initiate Your <br /><span className="italic">Evolution</span>
            </h2>
            <p className="text-white/50 font-light leading-loose text-lg mb-12 max-w-lg">
              Contact our concierge to schedule a private tour of our facilities and discuss your performance goals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60">01</div>
                <p className="text-xs uppercase tracking-widest text-white/40">Consultation</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60">02</div>
                <p className="text-xs uppercase tracking-widest text-white/40">Strategy</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60">03</div>
                <p className="text-xs uppercase tracking-widest text-white/40">Transformation</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Fitness Goal</label>
                  <select 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none"
                  >
                    <option className="bg-[#1A1A1A]">Muscle Gain</option>
                    <option className="bg-[#1A1A1A]">Fat Loss</option>
                    <option className="bg-[#1A1A1A]">Endurance</option>
                    <option className="bg-[#1A1A1A]">Flexibility</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-1">Additional Notes</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <Button variant="primary" className="w-full py-6">
                Start Your Fitness Journey
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
