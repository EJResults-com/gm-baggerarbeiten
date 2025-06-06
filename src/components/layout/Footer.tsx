import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const services = [
    'Erdarbeiten & Aushub',
    'Garten- & Flächenvorbereitung',
    'Wegebau & Gestaltung',
    'Fundamentarbeiten',
    'Drainage & Entwässerung',
    'Landschaftsgestaltung'
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=48&h=48&fit=crop" 
                  alt="GM Baggerarbeiten Logo" 
                  className="w-8 h-8 rounded object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">GM Baggerarbeiten</h3>
                <p className="text-gray-400 text-sm">Sinsheim</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Ihr zuverlässiger Partner für professionelle Erdarbeiten, 
              Gartengestaltung und Wegebau in Sinsheim und Umgebung.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-emerald-500" />
                <span>+49 (0) 7261 123456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-emerald-500" />
                <span>info@gm-baggerarbeiten.de</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Unsere Leistungen</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to="/leistungen"
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm block py-1"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Schnellzugriff</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm block py-1">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm block py-1">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/ueber-uns" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm block py-1">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-300 hover:text-emerald-400 transition-colors text-sm block py-1">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Kontakt & Öffnungszeiten</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Musterstraße 123</p>
                  <p>74889 Sinsheim</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Mo-Fr: 7:00 - 17:00</p>
                  <p>Sa: 8:00 - 14:00</p>
                  <p>Notdienst verfügbar</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GM Baggerarbeiten. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/impressum" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Impressum
              </Link>
              <Link to="/datenschutz" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};