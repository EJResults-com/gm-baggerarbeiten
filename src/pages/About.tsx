import React from 'react';
import { motion } from 'framer-motion';
import { AboutHeader } from '../components/about/AboutHeader';
import { AboutStory } from '../components/about/AboutStory';
import { AboutValues } from '../components/about/AboutValues';
import { AboutTeam } from '../components/about/AboutTeam';
import { AboutContact } from '../components/about/AboutContact';

export const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AboutHeader />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutContact />
    </motion.div>
  );
};