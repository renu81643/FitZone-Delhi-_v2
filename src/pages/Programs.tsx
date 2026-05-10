import { motion } from 'motion/react';
import ProgramsSection from '../components/home/ProgramsSection';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const details = [
  {
    title: "The Hypertrophy Protocol",
    focus: "Muscle Mass",
    duration: "12 Weeks",
    description: "A calculated approach to muscle fiber recruitment and metabolic stress to induce maximal growth.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Metabolic Incineration",
    focus: "Fat Loss",
    duration: "8 Weeks",
    description: "Combining EPOC inducing conditioning with compound strength rotations for rapid body recomposition.",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Structural Resiliency",
    focus: "Longevity",
    duration: "Ongoing",
    description: "Fixing imbalances, improving joint health, and building a body that performs at 70 as well as 20.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Programs() {
  return (
    <div className="pt-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">The Methodology</span>
          <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Scientific <br /><span className="italic">Systems</span>
          </h1>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
            We don't believe in "working out." we believe in systematic training protocols that yield predictable, elite-level results.
          </p>
        </motion.div>
      </div>

      <ProgramsSection />

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {details.map((prog, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}
              >
                <div className="flex-1 space-y-8">
                  <div className="flex items-center space-x-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Focus: {prog.focus}</span>
                    <span className="w-8 h-[1px] bg-white/20" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">Duration: {prog.duration}</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-lg text-white/50 font-light leading-relaxed">
                    {prog.description}
                  </p>
                  <Button to="/book-trial" variant="outline">Learn More</Button>
                </div>
                <div className="flex-1 aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 bg-white text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-8 leading-tight">
            Need a <br /><span className="italic">Custom Protocol?</span>
          </h2>
          <p className="text-black/60 font-light leading-loose text-lg mb-12">
            Our head coaches can design a completely bespoke training and nutrition ecosystem tailored to your unique biology and lifestyle.
          </p>
          <Button to="/contact" variant="secondary" className="px-12 border-black">
            Inquire Now
          </Button>
        </div>
      </section>
    </div>
  );
}
