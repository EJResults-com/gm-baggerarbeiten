import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Truck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Startseite', path: '/' },
    { name: 'Leistungen', path: '/leistungen' },
    { name: 'Über uns', path: '/ueber-uns' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-emerald-600 rounded-lg"
            >
              <Truck className="h-6 w-6 text-white" />
            </motion.div>
            <div>
              <span className={`font-bold text-lg ${
                scrolled || !isHome ? 'text-gray-900' : 'text-white'
              }`}>
                GM Baggerarbeiten
              </span>
              <div className={`text-xs ${
                scrolled || !isHome ? 'text-gray-600' : 'text-gray-200'
              }`}>
                Sinsheim
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled || !isHome
                    ? 'text-gray-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-200'
                } ${
                  location.pathname === item.path
                    ? scrolled || !isHome
                      ? 'text-emerald-600'
                      : 'text-emerald-200'
                    : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-500 rounded-full"
                  />
                )}
              </Link>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
                isHome && !scrolled
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg'
                  : 'bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Jetzt anfragen
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                scrolled || !isHome ? 'text-gray-600' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 backdrop-blur-sm border-t"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'text-emerald-600 bg-emerald-50'
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button className="w-full bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                Jetzt anfragen
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};