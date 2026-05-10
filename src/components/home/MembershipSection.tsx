import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import Button from '../ui/Button';

const plans = [
  {
    name: "Monthly",
    price: "1999",
    features: ["Access to Gym Floor", "Recovery Zone Access", "Body Composition Scan", "Locker & Shower"],
    delay: 0.1
  },
  {
    name: "Annual",
    price: "14999",
    best: true,
    features: ["Priority Training Slots", "Full Access to All Zones", "Personal Training (2/mo)", "Personalised Nutrition", "Recovery Spa access"],
    delay: 0.2
  },
  {
    name: "Quarterly",
    price: "4999",
    features: ["Cardio & Strength Zones", "Basic Body Stats", "Group Session Access", "Locker Access"],
    delay: 0.3
  }
];

export default function MembershipSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 mb-4 block">Selection Tiers</span>
            <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tight text-white leading-[0.9]">
              MEMBERSHIP<br /><span className="italic">STRUCTURE</span>
            </h2>
          </div>
          <div className="h-[1px] flex-1 bg-white/10 hidden md:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: plan.delay, duration: 0.8 }}
              className={`relative group p-12 rounded-none border-r border-white/5 ${plan.best ? 'bg-white/5' : 'bg-transparent'} transition-all duration-500 hover:bg-white/[0.08]`}
            >
              {plan.best && (
                <div className="absolute top-0 right-0 bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest">
                  Elite Tier
                </div>
              )}
              
              <div className="mb-12">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 mb-6 block">{plan.name}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-light text-white/40">₹</span>
                  <span className="text-6xl font-black text-white tracking-tighter">{plan.price}</span>
                </div>
              </div>

              <div className="space-y-6 mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-light text-white/70">
                    <Check size={16} className="text-white/40" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Button to="/join" variant={plan.best ? 'primary' : 'outline'} className="w-full">
                Join Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
