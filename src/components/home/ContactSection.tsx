import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kontaktieren Sie <span className="text-emerald-400">uns</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Haben Sie Fragen zu einem Projekt oder benötigen Sie ein unverbindliches Angebot? 
            Wir sind für Sie da und beraten Sie gerne persönlich.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Ihr direkter Draht zu uns
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Wir legen großen Wert auf persönlichen Kontakt und individuelle Beratung. 
                Rufen Sie uns an oder schreiben Sie uns – wir melden uns schnellstmöglich bei Ihnen zurück.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: 'Telefon',
                  content: '+49 (0) 7261 123456',
                  subtitle: 'Mo-Fr 7:00-17:00, Sa 8:00-14:00'
                },
                {
                  icon: Mail,
                  title: 'E-Mail',
                  content: 'info@gm-baggerarbeiten.de',
                  subtitle: 'Antwort binnen 24 Stunden'
                },
                {
                  icon: MapPin,
                  title: 'Adresse',
                  content: 'Musterstraße 123, 74889 Sinsheim',
                  subtitle: 'Kostenlose Anfahrt im Umkreis'
                },
                {
                  icon: Clock,
                  title: 'Öffnungszeiten',
                  content: 'Mo-Fr: 7:00-17:00',
                  subtitle: 'Notdienst nach Vereinbarung'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-emerald-400 font-medium">{item.content}</p>
                      <p className="text-gray-400 text-sm">{item.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <h4 className="font-semibold text-white mb-4">Standort & Anfahrt</h4>
              <div className="bg-gray-700 rounded-lg h-48 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Google Maps Integration</p>
                  <p className="text-sm">Musterstraße 123, Sinsheim</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Nachricht senden
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-gray-300">Vorname</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Ihr Vorname"
                  />
                </motion.div>
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="space-y-2"
                >
                  <label className="text-sm font-medium text-gray-300">Nachname</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    placeholder="Ihr Nachname"
                  />
                </motion.div>
              </div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">E-Mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="ihre.email@beispiel.de"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  placeholder="Ihre Telefonnummer"
                />
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">Projekt/Anliegen</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all">
                  <option value="">Bitte wählen...</option>
                  <option value="erdarbeiten">Erdarbeiten & Aushub</option>
                  <option value="garten">Garten- & Flächenvorbereitung</option>
                  <option value="wegebau">Wegebau & Gestaltung</option>
                  <option value="fundament">Fundamentarbeiten</option>
                  <option value="drainage">Drainage & Entwässerung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </motion.div>

              <motion.div
                whileFocus={{ scale: 1.02 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">Nachricht</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt oder Anliegen..."
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-2xl"
              >
                <Send className="h-5 w-5" />
                <span>Nachricht senden</span>
              </motion.button>
            </form>

            <p className="text-gray-400 text-sm mt-6 text-center">
              Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};