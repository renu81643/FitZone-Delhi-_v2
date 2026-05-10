import { motion } from 'motion/react';
import MembershipSection from '../components/home/MembershipSection';
import { Shield, Zap, Target, Star } from 'lucide-react';

const benefits = [
  { icon: Shield, title: "Elite Privacy", text: "Restricted entry and private training zones for focused workouts." },
  { icon: Zap, title: "State-of-the-art", text: "Top-tier equipment from Panatta and Hammer Strength." },
  { icon: Target, title: "Expert Coaching", text: "Programs designed by internationally certified transformation experts." },
  { icon: Star, title: "Recovery Suite", text: "Post-workout cryotherapy, infrared saunas, and sports massage." },
];

export default function Membership() {
  return (
    <div className="pt-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">The Investment</span>
          <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight text-white mb-8 leading-tight">
            Elevate Your <br /><span className="italic">Standard</span>
          </h1>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            Choose a tier that aligns with your ambition. Each membership at FitZone Delhi is a commitment to excellence and a passport to a superior state of being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <benefit.icon className="text-white/40" size={32} />
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">{benefit.title}</h4>
              <p className="text-xs text-white/50 leading-relaxed font-light">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <MembershipSection />

      <section className="py-32 px-6 md:px-12 bg-white text-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-black/40 mb-4 block">Transformation Roadmap</span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight mb-8 leading-tight text-black">
              More than <br /><span className="italic">Just a Gym</span>
            </h2>
            <p className="text-black/60 font-light leading-loose text-lg mb-8 max-w-lg">
              Every membership includes an initial 360-degree assessment where we map your current biometrics against your future potential.
            </p>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest">
              <li className="flex items-center space-x-3"><span className="w-6 h-[1px] bg-black" /> <span>Biometric Analysis</span></li>
              <li className="flex items-center space-x-3"><span className="w-6 h-[1px] bg-black" /> <span>Hormonal Optimization Prep</span></li>
              <li className="flex items-center space-x-3"><span className="w-6 h-[1px] bg-black" /> <span>Structural Integrity Testing</span></li>
            </ul>
          </div>
          <div className="aspect-square overflow-hidden rounded-3xl">
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000" 
              alt="Gym Equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
