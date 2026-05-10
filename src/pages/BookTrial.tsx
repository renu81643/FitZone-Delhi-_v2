import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import type { FormEvent } from 'react';

export default function BookTrial() {
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/thank-you');
  };

  return (
    <div className="pt-32 bg-[#050505] min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">Complimentary Session</span>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-8">
            Experience <span className="italic">Elite</span>
          </h1>
          <p className="text-white/50 font-light leading-relaxed mb-12">
            Your first session is on us. Witness the FitZone standard with a comprehensive facility tour and a personalized 60-minute training block.
          </p>

          <div className="space-y-8">
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-white/5 rounded-full text-white/40 group-hover:bg-white group-hover:text-black transition-all">
                <Clock size={20} />
              </div>
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-white mb-1">Duration</h5>
                <p className="text-sm text-white/40">60-Minute Session</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-white/5 rounded-full text-white/40 group-hover:bg-white group-hover:text-black transition-all">
                <Calendar size={20} />
              </div>
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-white mb-1">Availability</h5>
                <p className="text-sm text-white/40">Mon - Sat, 06:00 - 21:00</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="p-3 bg-white/5 rounded-full text-white/40 group-hover:bg-white group-hover:text-black transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <h5 className="text-[10px] uppercase tracking-widest font-bold text-white mb-1">Location</h5>
                <p className="text-sm text-white/40">South Extension II, Delhi</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 bg-[#111] p-8 md:p-12 rounded-[40px] border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Preferred Date</label>
                <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Preferred Time</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors appearance-none">
                  <option className="bg-[#111]">Morning (06:00 - 10:00)</option>
                  <option className="bg-[#111]">Afternoon (12:00 - 16:00)</option>
                  <option className="bg-[#111]">Evening (17:00 - 21:00)</option>
                </select>
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Full Name</label>
              <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Email</label>
                <input type="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Phone</label>
                <input type="tel" required placeholder="+91 00000 00000" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.2em] text-white/30 ml-1">Primary Goal</label>
              <textarea rows={3} placeholder="What do you want to achieve?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"></textarea>
            </div>
            <Button variant="primary" className="w-full py-6">
              Confirm Trial Selection
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
