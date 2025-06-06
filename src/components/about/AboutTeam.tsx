import React from 'react';
import { motion } from 'framer-motion';
import { Award, Wrench, Truck, Users } from 'lucide-react';

export const AboutTeam: React.FC = () => {
  const teamMember = {
    name: 'Markus Großmann',
    role: 'Geschäftsführer & Gründer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    description: 'Mit über 15 Jahren Erfahrung in der Baubranche leite ich GM Baggerarbeiten mit Leidenschaft und Engagement. Mein Ziel ist es, jeden Kunden mit hervorragender Qualität und persönlichem Service zu überzeugen.',
    qualifications: [
      'Ausbildung zum Baumaschinenführer',
      'Weiterbildung Erdbau & Tiefbau',
      'Zertifizierung Maschinentechnik',
      'Führerschein für Baumaschinen'
    ],
    experience: '15+ Jahre Branchenerfahrung'
  };

  const equipment = [
    {
      icon: Truck,
      title: 'Bagger & Radlader',
      description: '5 moderne Maschinen verschiedener Größen'
    },
    {
      icon: Wrench,
      title: 'Spezialgeräte',
      description: 'Rüttelplatten, Verdichter, Messinstrumente'
    },
    {
      icon: Award,
      title: 'Neueste Technik',
      description: 'GPS-gesteuerte Systeme für präzise Arbeit'
    },
    {
      icon: Users,
      title: 'Qualifiziertes Team',
      description: '4 erfahrene Mitarbeiter'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lernen Sie uns <span className="text-emerald-600">kennen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hinter GM Baggerarbeiten steht ein engagiertes Team von Fachkräften, 
            die ihre Leidenschaft für präzise Erdarbeiten täglich leben.
          </p>
        </motion.div>

        {/* Team Leader Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {teamMember.name}
              </h3>
              <p className="text-xl text-emerald-600 font-semibold mb-6">
                {teamMember.role}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {teamMember.description}
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Qualifikationen</h4>
              <ul className="space-y-2">
                {teamMember.qualifications.map((qualification, index) => (
                  <motion.li
                    key={qualification}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                    {qualification}
                  </motion.li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-emerald-200">
                <p className="text-emerald-600 font-semibold">{teamMember.experience}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={teamMember.image}
                alt={teamMember.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Quote Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-xl p-6"
              >
                <p className="text-gray-800 italic font-medium">
                  "Qualität ist kein Zufall, sondern das Ergebnis von Erfahrung, 
                  Sorgfalt und dem Willen, das Beste zu geben."
                </p>
                <p className="text-emerald-600 font-semibold mt-2">- Markus Großmann</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Equipment & Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Unser <span className="text-emerald-600">Maschinenpark</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <IconComponent className="h-8 w-8 text-emerald-600" />
                  </motion.div>
                  
                  <h4 className="font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Personal Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
              }}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Warum persönlicher Service wichtig ist
            </h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Als regionaler Betrieb legen wir Wert auf direkte Kommunikation und 
              persönliche Betreuung. Sie haben immer einen festen Ansprechpartner 
              und wissen genau, wer auf Ihrem Grundstück arbeitet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};