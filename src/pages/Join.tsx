import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';
import type { FormEvent } from 'react';

export default function Join() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="pt-32 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-[#111] p-8 md:p-16 rounded-[40px] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">Membership Signup</span>
              <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-6">
                Join the <span className="italic">Elite</span>
              </h1>
              <p className="text-white/40 font-light text-sm">Fill in your details to initiate your premium membership.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="space-y-10">
                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 pb-2 border-b border-white/5">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      type="text" placeholder="First Name" required
                      className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    />
                    <input 
                      type="text" placeholder="Last Name" required
                      className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    />
                    <input 
                      type="email" placeholder="Email Address" required
                      className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    />
                    <input 
                      type="tel" placeholder="Phone Number" required
                      className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </section>

                <section>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 pb-2 border-b border-white/5">Membership Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <select className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                      <option className="bg-[#111]">Annual Plan - ₹14,999</option>
                      <option className="bg-[#111]">Quarterly Plan - ₹4,999</option>
                      <option className="bg-[#111]">Monthly Plan - ₹1,999</option>
                    </select>
                    <input 
                      type="text" placeholder="Preferred Start Date" 
                      className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-white transition-colors"
                    />
                  </div>
                </section>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 size={16} className="text-white/40 mt-1" />
                  <p className="text-xs text-white/40 leading-relaxed font-light italic">
                    By joining, you agree to FitZone's terms of service and our commitment to a professional, high-performance training environment.
                  </p>
                </div>
              </div>

              <Button variant="primary" className="w-full py-6">
                Complete Registration
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
