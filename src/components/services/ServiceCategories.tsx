import React from 'react';
import { motion } from 'framer-motion';
import { Shovel, TreePine, Loader as Road, Wrench, Droplets, Mountain, CheckCircle } from 'lucide-react';

export const ServiceCategories: React.FC = () => {
  const categories = [
    {
      icon: Shovel,
      title: 'Erdarbeiten & Aushub',
      description: 'Präzise Erdarbeiten für alle Bauvorhaben mit modernster Technik und jahrelanger Erfahrung.',
      services: [
        'Baugrubenaushub für Keller und Fundamente',
        'Erdmassenbewegung und Bodenaustausch',
        'Präzise Vermessung und Höhenabsteckung',
        'Abtransport und Entsorgung von Erdmaterial',
        'Planierung und Verdichtung',
        'Arbeiten in schwierigem Gelände'
      ],
      image: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Präzise und termingerechte Ausführung unseres Kelleraushubs. Trotz schwieriger Bodenverhältnisse alles perfekt gelöst.',
        author: 'Thomas Weber, Hoffenheim'
      }
    },
    {
      icon: TreePine,
      title: 'Garten- & Flächenvorbereitung',
      description: 'Optimale Vorbereitung Ihrer Gartenflächen für Neugestaltung, Bepflanzung und Rasenflächen.',
      services: [
        'Bodenvorbereitung und Auflockerung',
        'Planierung von Gartenflächen',
        'Humusauftrag und Bodenverbesserung',
        'Entfernung alter Vegetation',
        'Drainage für bessere Wasserhaltung',
        'Vorbereitung für Rasenflächen'
      ],
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Unser Garten wurde perfekt vorbereitet. Die neue Rasenfläche gedeiht prächtig und das Drainage-System funktioniert einwandfrei.',
        author: 'Familie Müller, Sinsheim'
      }
    },
    {
      icon: Road,
      title: 'Wegebau & Gestaltung',
      description: 'Professioneller Bau von Zufahrten, Gehwegen und befestigten Flächen nach Ihren individuellen Wünschen.',
      services: [
        'Zufahrten und Parkplätze',
        'Gehwege und Gartenwege',
        'Pflasterarbeiten verschiedener Materialien',
        'Asphaltierung und Betonarbeiten',
        'Randsteine und Einfassungen',
        'Terrassenunterbau und Vorbereitung'
      ],
      image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Unsere neue Zufahrt ist nicht nur funktional, sondern auch optisch ein Highlight. Sehr saubere Arbeit!',
        author: 'Sandra & Michael Koch, Eppingen'
      }
    },
    {
      icon: Wrench,
      title: 'Fundamentarbeiten',
      description: 'Solide Fundamente für Garagen, Carports, Terrassen und andere Bauvorhaben – präzise und dauerhaft.',
      services: [
        'Streifenfundamente für Garagen',
        'Bodenplatten und Fundamentplatten',
        'Punktfundamente für Carports',
        'Frostschutz und Drainage',
        'Bewehrung und Schalung',
        'Betonarbeiten nach DIN-Normen'
      ],
      image: 'https://images.pexels.com/photos/162539/architecture-building-joy-planning-162539.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Das Fundament für unsere Garage wurde fachgerecht und nach allen Vorschriften erstellt. Absolut zuverlässig!',
        author: 'Jürgen Schmidt, Meckesheim'
      }
    },
    {
      icon: Droplets,
      title: 'Drainage & Entwässerung',
      description: 'Effektive Entwässerungslösungen zum Schutz vor Staunässe, Wasserschäden und Feuchtigkeitsproblemen.',
      services: [
        'Drainagesysteme um das Gebäude',
        'Versickerungsanlagen für Regenwasser',
        'Regenwasserführung und Ableitung',
        'Kellerabdichtung und Drainage',
        'Hangentwässerung bei Böschungen',
        'Reparatur bestehender Systeme'
      ],
      image: 'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Endlich keine Probleme mehr mit Staunässe im Garten. Das Drainagesystem funktioniert perfekt.',
        author: 'Andrea Hoffmann, Angelbachtal'
      }
    },
    {
      icon: Mountain,
      title: 'Landschaftsgestaltung',
      description: 'Gestaltung von Außenanlagen, Böschungen und natürlichen Landschaftselementen für ein harmonisches Gesamtbild.',
      services: [
        'Böschungsarbeiten und Hangbefestigung',
        'Geländemodellierung nach Wunsch',
        'Natursteinarbeiten und Gabionen',
        'Teichbau und Wasserlandschaften',
        'Bepflanzung und Landschaftspflege',
        'Rekultivierung von Flächen'
      ],
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      testimonial: {
        text: 'Die Böschungssicherung wurde professionell und optisch ansprechend gelöst. Sehr zufrieden mit dem Ergebnis.',
        author: 'Markus Zimmermann, Angelbachtal'
      }
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
            Unser komplettes <span className="text-emerald-600">Leistungsspektrum</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wir decken alle Bereiche der Erdarbeiten und Gartengestaltung ab – 
            von der ersten Planung bis zur finalen Umsetzung alles aus einer Hand.
          </p>
        </motion.div>

        <div className="space-y-20">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center"
                    >
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: serviceIndex * 0.05 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-lg"
                  >
                    <p className="text-gray-700 italic mb-2">"{category.testimonial.text}"</p>
                    <p className="text-emerald-600 font-semibold">{category.testimonial.author}</p>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300"
                  >
                    Beratung anfragen
                  </motion.button>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Floating badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                  >
                    Kategorie {index + 1}
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};