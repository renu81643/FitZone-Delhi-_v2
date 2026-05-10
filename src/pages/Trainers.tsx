import { motion } from 'motion/react';
import TrainerSection from '../components/home/TrainerSection';
import Button from '../components/ui/Button';

const expandedTrainers = [
  {
    name: "Vikram Singh",
    role: "Elite Strength Coach",
    bio: "Former national weightlifter with 12 years of experience in structural optimization and raw power output.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Ananya Sharma",
    role: "Nutrition & Fat Loss",
    bio: "Certified sports nutritionist specializing in hormonal health and sustainable body recomposition for busy professionals.",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Kabir Malhotra",
    role: "HIIT & Conditioning",
    bio: "Master of functional movement. Kabir's protocols are designed to build a body that is as capable as it looks.",
    image: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Rohan Varma",
    role: "Yoga & Mindfulness",
    bio: "Integrating ancient practices with modern anatomy for recovery that is truly transformative for the nervous system.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Trainers() {
  return (
    <div className="pt-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">The Elite</span>
          <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Master <br /><span className="italic">Instructors</span>
          </h1>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Our trainers are not just employees; they are artisans of human potential. Each is a specialist with documented success in high-performance coaching.
          </p>
        </motion.div>
      </div>

      <TrainerSection />

      <section className="py-32 px-6 md:px-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {expandedTrainers.map((trainer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-center bg-white/5 p-8 rounded-3xl border border-white/10 group hover:border-white/20 transition-all"
              >
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/10">
                  <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <h4 className="text-2xl font-bold uppercase tracking-wide text-white">{trainer.name}</h4>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">{trainer.role}</p>
                  <p className="text-sm text-white/50 font-light leading-relaxed italic">"{trainer.bio}"</p>
                  <Button to="/book-trial" variant="outline" className="px-6 py-2 text-[10px]">Book Trial with {trainer.name.split(' ')[0]}</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight leading-tight">
              Join Our <span className="italic">Elite Coaching Circle</span>
            </h2>
          </div>
          <Button to="/contact" variant="secondary" className="px-12 border-black">
            Apply as Trainer
          </Button>
        </div>
      </section>
    </div>
  );
}
