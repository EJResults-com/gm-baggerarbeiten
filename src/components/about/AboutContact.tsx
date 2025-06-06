import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const AboutContact: React.FC = () => {
  return (
    <section className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kontakt & <span className="text-emerald-600">Anfahrt</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? 
            Kontaktieren Sie uns – wir freuen uns auf Ihr Anliegen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Phone,
                  title: 'Telefon',
                  content: '+49 (0) 7261 123456',
                  subtitle: 'Täglich von 7:00-17:00 Uhr'
                },
                {
                  icon: Mail,
                  title: 'E-Mail',
                  content: 'info@gm-baggerarbeiten.de',
                  subtitle: 'Antwort binnen 24h'
                },
                {
                  icon: MapPin,
                  title: 'Adresse',
                  content: 'Musterstraße 123\n74889 Sinsheim',
                  subtitle: 'Baden-Württemberg'
                },
                {
                  icon: Clock,
                  title: 'Öffnungszeiten',
                  content: 'Mo-Fr: 7:00-17:00\nSa: 8:00-14:00',
                  subtitle: 'Notdienst nach Vereinbarung'
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-emerald-600 font-medium whitespace-pre-line mb-1">
                          {item.content}
                        </p>
                        <p className="text-gray-500 text-sm">{item.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-emerald-600 rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">Einsatzgebiet</h3>
              <p className="text-emerald-100 mb-4">
                Wir arbeiten hauptsächlich in einem Umkreis von 50 km um Sinsheim:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  'Sinsheim', 'Heidelberg', 'Heilbronn', 'Karlsruhe',
                  'Eppingen', 'Wiesloch',  'Bruchsal', 'Weinheim'
                ].map((city, index) => (
                  <motion.div
                    key={city}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2" />
                    {city}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Map and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p className="font-semibold">Google Maps Integration</p>
                  <p className="text-sm">Musterstraße 123, 74889 Sinsheim</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-gray-900 mb-2">Anfahrt</h4>
                <p className="text-gray-600 text-sm">
                  Unser Betrieb liegt zentral in Sinsheim und ist über die A6 
                  und B39 gut erreichbar. Kostenlose Parkplätze sind vorhanden.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Bereit für Ihr Projekt?
              </h3>
              <p className="text-gray-600 mb-6">
                Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. 
                Wir kommen gerne zu Ihnen und besichtigen Ihr Projekt vor Ort.
              </p>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-emerald-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300"
                >
                  Kostenloses Beratungsgespräch vereinbaren
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full border-2 border-emerald-600 text-emerald-600 px-6 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
                >
                  Angebot per E-Mail anfordern
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};