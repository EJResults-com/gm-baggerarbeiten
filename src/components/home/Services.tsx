import React from 'react';
import { motion } from 'framer-motion';
import { Shovel, TreePine, Loader as Road, Wrench, Droplets, Mountain } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Shovel,
      title: 'Erdarbeiten & Aushub',
      description: 'Professionelle Aushubarbeiten für Keller, Fundamente und Baugruben mit modernster Technik.',
      features: ['Baugrubenaushub', 'Kelleraushub', 'Erdmassenbewegung', 'Präzise Vermessung']
    },
    {
      icon: TreePine,
      title: 'Garten- & Flächenvorbereitung',
      description: 'Vorbereitung Ihrer Gartenflächen für Neugestaltung, Rasenflächen und Bepflanzung.',
      features: ['Bodenvorbereitung', 'Planierung', 'Humusauftrag', 'Drainagesysteme']
    },
    {
      icon: Road,
      title: 'Wegebau & Gestaltung',
      description: 'Anlage von Zufahrten, Gehwegen und befestigten Flächen nach Ihren Wünschen.',
      features: ['Zufahrten', 'Gehwege', 'Pflasterarbeiten', 'Asphaltierung']
    },
    {
      icon: Wrench,
      title: 'Fundamentarbeiten',
      description: 'Solide Fundamente für Garagen, Carports, Terrassen und andere Bauvorhaben.',
      features: ['Streifenfundamente', 'Bodenplatten', 'Punktfundamente', 'Frostschutz']
    },
    {
      icon: Droplets,
      title: 'Drainage & Entwässerung',
      description: 'Effektive Entwässerungslösungen zum Schutz vor Staunässe und Wasserschäden.',
      features: ['Drainagerohre', 'Versickerung', 'Regenwasserführung', 'Kellerabdichtung']
    },
    {
      icon: Mountain,
      title: 'Landschaftsgestaltung',
      description: 'Gestaltung von Außenanlagen, Böschungen und natürlichen Landschaftselementen.',
      features: ['Böschungsarbeiten', 'Modellierung', 'Natursteinarbeiten', 'Bepflanzung']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-emerald-600">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der ersten Planung bis zur finalen Umsetzung – wir bieten Ihnen 
            das komplette Spektrum professioneller Erdarbeiten und Gartengestaltung.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors"
                >
                  <IconComponent className="h-8 w-8 text-emerald-600" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Mehr erfahren
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            Alle Leistungen ansehen
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};