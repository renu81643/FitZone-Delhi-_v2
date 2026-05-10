import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Entrepreneur",
    text: "FitZone isn't just a gym; it's a sanctuary. The attention to detail, from the equipment to the recovery sessions, is unmatched in Delhi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sarah Khan",
    role: "Architect",
    text: "The transformation roadmap they provided was life-changing. I've gained more than just muscle; I've gained a new perspective on discipline.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Rajesh Gupta",
    role: "Corporate Executive",
    text: "Finding a place that understands the balance between high-intensity training and high-stakes work life is rare. FitZone is that place.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <Quote size={40} className="text-white/20 mx-auto mb-8" />
        </div>

        <div className="relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-center"
            >
              <p className="text-xl md:text-3xl font-light italic text-white/90 leading-relaxed mb-12">
                "{testimonials[index].text}"
              </p>
              
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[index].image} 
                  alt={testimonials[index].name}
                  className="w-16 h-16 rounded-full grayscale mb-4 grayscale hover:grayscale-0 transition-all duration-500"
                />
                <h5 className="text-sm font-bold uppercase tracking-[0.2em] text-white">{testimonials[index].name}</h5>
                <p className="text-[10px] uppercase tracking-widest text-white/40">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center space-x-8 mt-12">
          <button 
            onClick={prev}
            className="p-4 border border-white/10 rounded-full hover:border-white transition-all text-white/50 hover:text-white"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-white' : 'bg-white/20'}`}
              />
            ))}
          </div>
          <button 
            onClick={next}
            className="p-4 border border-white/10 rounded-full hover:border-white transition-all text-white/50 hover:text-white"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
