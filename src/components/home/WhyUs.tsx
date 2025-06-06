import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Truck, MapPin, Users, Shield } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: '15+ Jahre Erfahrung',
      description: 'Bewährte Expertise in allen Bereichen der Erdarbeiten und Gartengestaltung.',
      stat: '15+'
    },
    {
      icon: Truck,
      title: 'Moderner Maschinenpark',
      description: 'Neueste Technik für effiziente und präzise Arbeitsausführung.',
      stat: '100%'
    },
    {
      icon: Clock,
      title: 'Termingerechte Ausführung',
      description: 'Zuverlässige Planung und pünktliche Fertigstellung Ihrer Projekte.',
      stat: '24h'
    },
    {
      icon: MapPin,
      title: 'Regionale Nähe',
      description: 'Schnelle Anfahrt und persönlicher Service direkt aus Sinsheim.',
      stat: '< 30min'
    },
    {
      icon: Users,
      title: 'Qualifiziertes Team',
      description: 'Fachkräfte mit langjähriger Erfahrung und kontinuierlicher Weiterbildung.',
      stat: '98%'
    },
    {
      icon: Shield,
      title: 'Vollversichert',
      description: 'Umfassender Versicherungsschutz für maximale Sicherheit bei allen Arbeiten.',
      stat: '100%'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Main Background Image */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Warum <span className="text-emerald-400">GM Baggerarbeiten</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vertrauen Sie auf unsere Erfahrung, modernste Technik und den persönlichen Service, 
            der Ihre Projekte zum Erfolg führt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center"
                  >
                    <IconComponent className="h-8 w-8 text-emerald-400" />
                  </motion.div>
                  <div className="text-3xl font-bold text-emerald-400">
                    {feature.stat}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Überzeugen Sie sich selbst von unserer Qualität
          </h3>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-2xl"
          >
            Kostenloses Beratungsgespräch vereinbaren
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};