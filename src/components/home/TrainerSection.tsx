import { motion } from 'motion/react';
import { Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trainers = [
  {
    name: "Vikram Singh",
    role: "Elite Strength Coach",
    specialties: ["Powerlifting", "Hypertrophy"],
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600",
    delay: 0.1
  },
  {
    name: "Ananya Sharma",
    role: "Nutrition & Fat Loss",
    specialties: ["Lifestyle", "Nutrition"],
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=600",
    delay: 0.2
  },
  {
    name: "Kabir Malhotra",
    role: "HIIT & Conditioning",
    specialties: ["Endurance", "Tabata"],
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=600",
    delay: 0.3
  }
];

export default function TrainerSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-4 block">Artisans of Effort</span>
            <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tight text-white leading-[0.9]">
              ELITE<br /><span className="italic">INSTRUCTORS</span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: trainer.delay, duration: 0.8 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-8 relative">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                
                {/* Social links hover overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-black hover:text-white transition-all"><Instagram size={20} /></a>
                  <a href="#" className="p-3 bg-white text-black rounded-full hover:bg-black hover:text-white transition-all"><Twitter size={20} /></a>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-bold uppercase tracking-wide text-white mb-1">{trainer.name}</h4>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6 font-medium">{trainer.role}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {trainer.specialties.map((s, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full text-white/60">
                      {s}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/trainers"
                  className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-all group/btn"
                >
                  <span>View Profile</span>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
