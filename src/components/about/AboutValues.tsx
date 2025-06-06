import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Clock, Handshake, Lightbulb, Target } from 'lucide-react';

export const AboutValues: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Leidenschaft',
      description: 'Wir brennen für das, was wir tun. Jedes Projekt ist für uns eine Chance, unser Können zu zeigen.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Shield,
      title: 'Zuverlässigkeit',
      description: 'Auf uns können Sie sich verlassen. Termine, Qualität und Absprachen werden eingehalten.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Clock,
      title: 'Pünktlichkeit',
      description: 'Zeit ist wertvoll. Wir erscheinen pünktlich und halten vereinbarte Termine ein.',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: Handshake,
      title: 'Vertrauen',
      description: 'Ehrlichkeit und Transparenz bilden die Basis für eine erfolgreiche Zusammenarbeit.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Wir setzen auf moderne Technik und innovative Lösungen für optimale Ergebnisse.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Target,
      title: 'Präzision',
      description: 'Millimetergenau und fachgerecht – bei uns stimmt jedes Detail.',
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="text-emerald-600">Werte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Diese Grundsätze leiten uns in allem, was wir tun, und sind das Fundament 
            für den Erfolg unserer Projekte und die Zufriedenheit unserer Kunden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${value.color}`}
                >
                  <IconComponent className="h-8 w-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-emerald-600 rounded-3xl p-12 text-center text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-8.837-7.163-16-16-16S-12 11.163-12 20s7.163 16 16 16 16-7.163 16-16zm16 0c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16z'/%3E%3C/g%3E%3C/svg%3E")`
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Unser Versprechen an Sie
            </h3>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Wir arbeiten nicht nur für Sie, sondern mit Ihnen zusammen. 
              Ihr Projekt wird zu unserem Projekt, und gemeinsam schaffen wir 
              Ergebnisse, die überzeugen und lange Freude bereiten.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};