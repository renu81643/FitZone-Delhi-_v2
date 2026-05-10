import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1574673139739-ce28269d5a2b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800",
];

export default function GallerySection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">Visual Immersion</span>
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white mb-6">
            Inside the <span className="italic">Sanctuary</span>
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mx-auto" />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative overflow-hidden group rounded-xl"
            >
              <img 
                src={src} 
                alt={`Gym Gallery ${i}`}
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
