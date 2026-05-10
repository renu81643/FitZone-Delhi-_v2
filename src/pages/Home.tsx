import Hero from '../components/home/Hero';
import MembershipSection from '../components/home/MembershipSection';
import TrainerSection from '../components/home/TrainerSection';
import ProgramsSection from '../components/home/ProgramsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import GallerySection from '../components/home/GallerySection';
import ContactSection from '../components/home/ContactSection';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Reveal animation for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "expo.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Hero />
      <ProgramsSection />
      <MembershipSection />
      <TrainerSection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
    </motion.div>
  );
}

