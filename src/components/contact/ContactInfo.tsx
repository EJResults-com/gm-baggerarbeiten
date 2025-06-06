import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Calendar } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Telefon',
      primary: '+49 (0) 7261 123456',
      secondary: 'Mo-Fr: 7:00-17:00 Uhr',
      description: 'Für schnelle Fragen und Terminvereinbarungen',
      action: 'Jetzt anrufen',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      primary: 'info@gm-baggerarbeiten.de',
      secondary: 'Antwort binnen 24 Stunden',
      description: 'Für detaillierte Anfragen und Projektbeschreibungen',
      action: 'E-Mail schreiben',
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      primary: '+49 (0) 7261 123456',
      secondary: 'Schnelle Kommunikation',
      description: 'Für kurze Fragen und Bildaustausch',
      action: 'WhatsApp öffnen',
      color: 'bg-green-100 text-green-600'
    }
  ];

  return (
    <section className="bg-gray-50 rounded-2xl p-8">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Direkter <span className="text-emerald-600">Kontakt</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Wählen Sie den für Sie passenden Kommunikationsweg. 
            Wir sind für Sie da und antworten schnellstmöglich.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${method.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-emerald-600 font-semibold mb-1">{method.primary}</p>
                    <p className="text-gray-500 text-sm mb-3">{method.secondary}</p>
                    <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      {method.action} →
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Address & Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-600 whitespace-pre-line">
                  Musterstraße 123{'\n'}74889 Sinsheim{'\n'}Baden-Württemberg
                </p>
                <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors mt-2">
                  Route planen →
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Öffnungszeiten</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Mo-Fr: 7:00-17:00</p>
                  <p>Sa: 8:00-14:00</p>
                  <p className="text-emerald-600 font-medium">Notdienst verfügbar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-gray-200 h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-2" />
              <p className="font-semibold">Google Maps Integration</p>
              <p className="text-sm">Musterstraße 123, 74889 Sinsheim</p>
            </div>
          </div>
          <div className="p-6">
            <h4 className="font-bold text-gray-900 mb-2">Anfahrt</h4>
            <p className="text-gray-600 text-sm mb-4">
              Unser Betrieb liegt zentral in Sinsheim und ist über die A6 und B39 gut erreichbar. 
              Kostenlose Parkplätze sind direkt vor Ort vorhanden.
            </p>
            <div className="flex space-x-4">
              <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                In Google Maps öffnen →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-red-50 border border-red-200 rounded-xl p-6"
        >
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-red-800 mb-2">Notdienst</h3>
              <p className="text-red-700 mb-2">
                Bei dringenden Problemen (z.B. Rohrbruch, Wasserschäden) erreichen Sie uns auch außerhalb der Geschäftszeiten.
              </p>
              <p className="text-red-600 font-semibold">+49 (0) 7261 123456</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-emerald-600 rounded-xl p-8 text-white text-center"
        >
          <Calendar className="h-12 w-12 mx-auto mb-4 text-emerald-200" />
          <h3 className="text-2xl font-bold mb-4">Kostenlose Beratung vor Ort</h3>
          <p className="text-emerald-100 mb-6">
            Vereinbaren Sie einen unverbindlichen Termin. Wir kommen zu Ihnen 
            und besichtigen Ihr Projekt kostenlos.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300"
          >
            Termin vereinbaren
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};