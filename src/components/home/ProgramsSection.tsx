import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'muscle-gain',
    title: 'Muscle Gain',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    description: 'Hypertrophy focused training for peak aesthetic and power.',
    className: 'md:col-span-2'
  },
  {
    id: 'fat-loss',
    title: 'Fat Loss',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800',
    description: 'High-intensity conditioning to incinerate stubborn fat reserves.'
  },
  {
    id: 'yoga',
    title: 'Precision Yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    description: 'Mobility and mental clarity through intentional movement.'
  },
  {
    id: 'crossfit',
    title: 'Elite CrossFit',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800',
    description: 'Functional fitness pushed to the absolute extreme.',
    className: 'md:col-span-2'
  }
];

export default function ProgramsSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-4 block">Proven Systems</span>
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tight text-white leading-tight">
              Curated Fitness <br /><span className="italic">Specializations</span>
            </h2>
          </div>
          <Link to="/programs" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors group flex items-center space-x-3 mb-2">
            <span>View All Programs</span>
            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative h-[500px] overflow-hidden group cursor-pointer ${program.className || ''}`}
            >
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-2">{program.title}</h3>
                <p className="text-sm font-light text-white/60 mb-6 max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {program.description}
                </p>
                <Link to={`/programs`} className="inline-flex items-center space-x-3 text-[10px] font-bold uppercase tracking-widest text-white border-b border-white/30 pb-2 hover:border-white transition-all">
                  <span>Explore Program</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
