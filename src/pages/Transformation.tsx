import { motion } from 'motion/react';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import Button from '../components/ui/Button';

const stories = [
  {
    title: "12 Weeks of Discipline",
    client: "Aditya R.",
    result: "15kg Fat Loss, 4kg Muscle Gain",
    text: "I thought I knew how to train until I met the Vikram at FitZone. The systematic approach changed everything.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "The Power of Consistency",
    client: "Priya S.",
    result: "Increased Strength by 40%",
    text: "Coming from a tech background, I needed a place that respected my time. The 45-min protocols fixed my posture and my mental health.",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=600"
  }
];

export default function Transformation() {
  return (
    <div className="pt-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">The Proof</span>
          <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Real <br /><span className="italic">Destinies</span>
          </h1>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            Witness the tangible results of our systematic training methodology. These aren't just photos; they are stories of reclaimed strength.
          </p>
        </motion.div>
      </div>

      <TestimonialsSection />

      <section className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {stories.map((story, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="space-y-8 group"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-3xl relative">
                  <img src={story.image} alt={story.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/60 mb-2 font-bold">{story.client}</p>
                    <h4 className="text-2xl font-bold uppercase tracking-wide text-white">{story.result}</h4>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-white">{story.title}</h3>
                  <p className="text-white/50 font-light leading-loose italic">"{story.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <GallerySection />

      <section className="py-32 px-6 md:px-12 bg-white text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-8 leading-tight text-black">
            Your Story <br /><span className="italic">Starts Now</span>
          </h2>
          <Button to="/join" variant="secondary" className="px-12 border-black">
            Start Your Transformation
          </Button>
        </div>
      </section>
    </div>
  );
}
