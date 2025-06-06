import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

export const AboutStory: React.FC = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Gründung',
      description: 'Start als Ein-Mann-Betrieb mit einem gebrauchten Minibagger'
    },
    {
      year: '2012',
      title: 'Expansion',
      description: 'Erweiterung des Maschinenparks und erste Mitarbeiter'
    },
    {
      year: '2018',
      title: 'Spezialisierung',
      description: 'Fokus auf Privatkunden und Gartengestaltung'
    },
    {
      year: '2024',
      title: 'Heute',
      description: 'Etablierter Partner für Erdarbeiten in der Region'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Unsere <span className="text-emerald-600">Geschichte</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Was als kleiner Ein-Mann-Betrieb begann, ist heute ein etabliertes Unternehmen 
                für professionelle Erdarbeiten und Gartengestaltung. Seit der Gründung 2008 
                setzen wir auf Qualität, Zuverlässigkeit und persönlichen Service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unser Fokus liegt auf Privatkunden, die Wert auf saubere Arbeit, 
                termingerechte Ausführung und faire Preise legen. Durch kontinuierliche 
                Weiterbildung und Investitionen in moderne Technik bleiben wir am Puls der Zeit.
              </p>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Calendar, value: '15+', label: 'Jahre Erfahrung' },
                { icon: Users, value: '500+', label: 'Zufriedene Kunden' },
                { icon: MapPin, value: '50km', label: 'Einsatzradius' },
                { icon: Award, value: '98%', label: 'Weiterempfehlungsrate' }
              ].map((fact, index) => {
                const IconComponent = fact.icon;
                return (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-emerald-50 rounded-xl"
                  >
                    <IconComponent className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{fact.value}</div>
                    <div className="text-sm text-gray-600">{fact.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Meilensteine</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex items-start space-x-6 pb-8"
                >
                  {/* Timeline Dot */}
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};