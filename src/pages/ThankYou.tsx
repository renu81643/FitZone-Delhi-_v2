import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="pt-32 bg-[#0A0A0A] h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 rounded-full border border-white/10 mb-8">
            <CheckCircle2 size={48} className="text-white" />
          </div>
          
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 block">The Choice is Made</span>
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-6">
            Inquiry <br /><span className="italic">Received</span>
          </h1>
          <p className="text-white/60 font-light leading-relaxed mb-12">
            Your journey towards elite performance has officially begun. Our concierge will contact you within the next 2 hours to finalize your reservation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button to="/" variant="secondary" className="w-full sm:w-auto">
              Return Home
            </Button>
            <Button to="/programs" variant="outline" className="w-full sm:w-auto">
              Explore Protocols
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
