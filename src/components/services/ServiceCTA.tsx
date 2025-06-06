import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Calendar } from 'lucide-react';

export const ServiceCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Bereit für Ihr <span className="text-emerald-200">Projekt</span>?
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Lassen Sie uns gemeinsam Ihr Projekt planen und realisieren. 
            Kontaktieren Sie uns für ein unverbindliches Angebot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: Phone,
              title: 'Sofort anrufen',
              description: 'Direkter Kontakt für schnelle Beratung',
              action: '+49 (0) 7261 123456',
              buttonText: 'Jetzt anrufen'
            },
            {
              icon: Mail,
              title: 'E-Mail senden',
              description: 'Detaillierte Anfrage mit Projektbeschreibung',
              action: 'info@gm-baggerarbeiten.de',
              buttonText: 'E-Mail schreiben'
            },
            {
              icon: Calendar,
              title: 'Termin vereinbaren',
              description: 'Persönliche Beratung vor Ort',
              action: 'Kostenlose Besichtigung',
              buttonText: 'Termin buchen'
            }
          ].map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-emerald-100 mb-4">
                  {item.description}
                </p>
                
                <p className="text-white font-semibold mb-6">
                  {item.action}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  {item.buttonText}
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">
              Kostenloses Angebot in 3 Schritten
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { step: '1', title: 'Kontakt aufnehmen', desc: 'Rufen Sie an oder schreiben Sie uns' },
                { step: '2', title: 'Vor-Ort-Termin', desc: 'Kostenlose Besichtigung und Beratung' },
                { step: '3', title: 'Angebot erhalten', desc: 'Detailliertes Angebot binnen 48h' }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-emerald-400 text-emerald-900 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-emerald-100 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-emerald-400 text-emerald-900 px-8 py-4 rounded-lg text-lg font-bold hover:bg-emerald-300 transition-all duration-300 shadow-2xl"
            >
              Jetzt kostenloses Angebot anfordern
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};