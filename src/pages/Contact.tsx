import { motion } from 'motion/react';
import ContactSection from '../components/home/ContactSection';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">Concierge</span>
          <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Connect With <br /><span className="italic">Excellence</span>
          </h1>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Our team is available to assist you with membership inquiries, personal training consultations, and private tours of our South Extension sanctuary.
          </p>
        </motion.div>
      </div>

      <section className="py-20 px-6 md:px-12 border-y border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <MapPin className="mx-auto md:mx-0 text-white/30" />
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Location</h5>
            <p className="text-sm text-white/50 font-light leading-relaxed">Unit 402, South Extension II, New Delhi, Delhi 110049</p>
          </div>
          <div className="space-y-4">
            <Phone className="mx-auto md:mx-0 text-white/30" />
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Direct Line</h5>
            <p className="text-sm text-white/50 font-light">+91 11 4987 6543</p>
          </div>
          <div className="space-y-4">
            <Mail className="mx-auto md:mx-0 text-white/30" />
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Email</h5>
            <p className="text-sm text-white/50 font-light">info@fitzone.delhi</p>
          </div>
          <div className="space-y-4">
            <Instagram className="mx-auto md:mx-0 text-white/30" />
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Social</h5>
            <p className="text-sm text-white/50 font-light">@fitzone_delhi</p>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Mock Map Section */}
      <section className="h-[500px] w-full bg-[#111] grayscale relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" 
          alt="Map Placeholder" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl shadow-white/20">
            <MapPin className="text-black" size={24} />
          </div>
        </div>
      </section>
    </div>
  );
}
