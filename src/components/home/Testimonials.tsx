import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Familie Müller',
      location: 'Sinsheim',
      project: 'Gartenumgestaltung & Drainage',
      rating: 5,
      text: 'Die Zusammenarbeit mit GM Baggerarbeiten war von Anfang an professionell. Unser Garten wurde komplett umgestaltet und das Drainageproblem endlich gelöst. Termintreue und saubere Arbeit - absolut empfehlenswert!',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Thomas Weber',
      location: 'Hoffenheim',
      project: 'Kelleraushub & Fundament',
      rating: 5,
      text: 'Präzise Arbeit bei unserem Kelleraushub. Das Team hat trotz schwieriger Bodenverhältnisse termingerecht geliefert. Die Nacharbeiten waren minimal - so stellt man sich professionelle Erdarbeiten vor.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Sandra & Michael Koch',
      location: 'Eppingen',
      project: 'Zufahrt & Pflasterarbeiten',
      rating: 5,
      text: 'Von der Beratung bis zur Fertigstellung alles perfekt organisiert. Unsere neue Zufahrt ist nicht nur funktional, sondern auch optisch ein Highlight. Faire Preise und top Service!',
      image: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Markus Zimmermann',
      location: 'Angelbachtal',
      project: 'Böschungssicherung',
      rating: 5,
      text: 'Komplizierte Böschungsarbeiten wurden fachgerecht und sicher ausgeführt. Das Team hat mit viel Erfahrung auch unvorhergesehene Herausforderungen gemeistert. Absolut zuverlässig!',
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-20 w-32 h-32 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-100 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Was unsere <span className="text-emerald-600">Kunden</span> sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Überzeugen Sie sich von der Qualität unserer Arbeit durch die Erfahrungen 
            zufriedener Kunden aus der Region.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-emerald-600"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-emerald-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-emerald-600"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>

          {/* Testimonial Cards */}
          <div className="relative h-96 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-between">
                  <div>
                    <Quote className="h-12 w-12 text-emerald-500 mb-6" />
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      "{testimonials[currentIndex].text}"
                    </p>
                    
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-emerald-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-emerald-600 font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].project}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Project Gallery Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Ausgewählte Projekte
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.pexels.com/photos/1722183/pexels-photo-1722183.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/162539/architecture-building-joy-planning-162539.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Projekt ${index + 1}`}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};