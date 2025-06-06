import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { WhyUs } from '../components/home/WhyUs';
import { Testimonials } from '../components/home/Testimonials';
import { ContactSection } from '../components/home/ContactSection';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
      <ContactSection />
    </motion.div>
  );
};