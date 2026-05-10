import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 px-6 md:px-16 border-t border-white/5">
      <div className="max-w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Col */}
          <div className="space-y-8">
            <Link to="/" className="text-xl font-black tracking-[0.4em] uppercase text-white">
              FITZONE <span className="font-light text-white/50">DELHI</span>
            </Link>
            <p className="text-white/50 font-light leading-loose text-sm max-w-xs">
              Delhi's premier sanctuary for physical transformation and mental resilience. Elevate your potential in our state-of-the-art laboratory of strength.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 border border-white/10 rounded-full hover:border-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white">Navigation</h4>
            <ul className="space-y-4">
              <li><Link to="/membership" className="text-sm text-white/50 hover:text-white transition-colors tracking-wider font-light">Membership</Link></li>
              <li><Link to="/programs" className="text-sm text-white/50 hover:text-white transition-colors tracking-wider font-light">Programs</Link></li>
              <li><Link to="/trainers" className="text-sm text-white/50 hover:text-white transition-colors tracking-wider font-light">Trainers</Link></li>
              <li><Link to="/transformation" className="text-sm text-white/50 hover:text-white transition-colors tracking-wider font-light">Transformation</Link></li>
              <li><Link to="/contact" className="text-sm text-white/50 hover:text-white transition-colors tracking-wider font-light">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 text-white/50 group">
                <MapPin size={18} className="mt-1 flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm font-light leading-relaxed">Unit 402, South Extension II, New Delhi, Delhi 110049</span>
              </li>
              <li className="flex items-center space-x-3 text-white/50 group">
                <Phone size={18} className="flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm font-light">+91 11 4987 6543</span>
              </li>
              <li className="flex items-center space-x-3 text-white/50 group">
                <Mail size={18} className="flex-shrink-0 group-hover:text-white transition-colors" />
                <span className="text-sm font-light">elevate@fitzone.delhi</span>
              </li>
            </ul>
          </div>

          {/* Gym Timings */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-white">Hours</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50 font-light">Mon - Fri</span>
                <span className="text-white font-medium">05:00 - 23:00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50 font-light">Saturday</span>
                <span className="text-white font-medium">06:00 - 21:00</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/50 font-light">Sunday</span>
                <span className="text-white font-medium">08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} FitZone Delhi. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] text-white/30 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
