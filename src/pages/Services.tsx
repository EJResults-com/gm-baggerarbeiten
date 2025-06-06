import React from 'react';
import { motion } from 'framer-motion';
import { ServiceHeader } from '../components/services/ServiceHeader';
import { ServiceCategories } from '../components/services/ServiceCategories';
import { ServiceCTA } from '../components/services/ServiceCTA';

export const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ServiceHeader />
      <ServiceCategories />
      <ServiceCTA />
    </motion.div>
  );
};