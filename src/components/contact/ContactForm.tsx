import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    project: '',
    message: '',
    privacy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section className="bg-white rounded-2xl p-8 shadow-lg">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Nachricht <span className="text-emerald-600">senden</span>
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Vorname *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="Ihr Vorname"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Nachname *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="Ihr Nachname"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              placeholder="ihre.email@beispiel.de"
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefonnummer
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
              placeholder="Ihre Telefonnummer"
            />
          </div>

          {/* Project Type */}
          <div className="space-y-2">
            <label htmlFor="project" className="block text-sm font-medium text-gray-700">
              Art des Projekts
            </label>
            <select
              id="project"
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
            >
              <option value="">Bitte wählen...</option>
              <option value="erdarbeiten">Erdarbeiten & Aushub</option>
              <option value="garten">Garten- & Flächenvorbereitung</option>
              <option value="wegebau">Wegebau & Gestaltung</option>
              <option value="fundament">Fundamentarbeiten</option>
              <option value="drainage">Drainage & Entwässerung</option>
              <option value="landschaft">Landschaftsgestaltung</option>
              <option value="beratung">Allgemeine Beratung</option>
              <option value="sonstiges">Sonstiges</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Ihre Nachricht *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
              placeholder="Beschreiben Sie Ihr Projekt oder Anliegen so detailliert wie möglich..."
            />
          </div>

          {/* Privacy Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              required
              checked={formData.privacy}
              onChange={handleChange}
              className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              Ich habe die{' '}
              <a href="/datenschutz" className="text-emerald-600 hover:text-emerald-700 underline">
                Datenschutzerklärung
              </a>{' '}
              gelesen und stimme der Verarbeitung meiner Daten zu. *
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitted}
            className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              isSubmitted
                ? 'bg-green-600 text-white'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="h-5 w-5" />
                <span>Nachricht gesendet!</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Nachricht senden</span>
              </>
            )}
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-emerald-50 rounded-xl border border-emerald-200"
        >
          <h3 className="font-semibold text-emerald-800 mb-2">
            Was passiert nach dem Absenden?
          </h3>
          <ul className="text-sm text-emerald-700 space-y-1">
            <li>• Sie erhalten eine Bestätigung per E-Mail</li>
            <li>• Wir melden uns binnen 24 Stunden bei Ihnen</li>
            <li>• Bei Bedarf vereinbaren wir einen Vor-Ort-Termin</li>
            <li>• Sie erhalten ein detailliertes Angebot</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
};