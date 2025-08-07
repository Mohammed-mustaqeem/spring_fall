import React from 'react';
import { motion } from 'framer-motion';

const GlobeSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image with Slight Top Crop (Modern Look) */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/images/globe-bg.jpg" // ⚠️ Note: Vite may require dynamic import or public folder
          alt="Global Network"
          className="w-full h-full object-cover object-center scale-110"
          style={{ transform: 'scale(1.1)' }} // Ensures consistent scale
        />
        {/* Gradient Overlay: Fade from transparent to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full px-4 sm:px-6 lg:px-8 pt-28 pb-36">
        {/* Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={titleVariants}
          className="max-w-4xl mx-auto text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Global Support for Students
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 opacity-90 max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            A U.S.-based nonprofit empowering international students with accurate visa guidance, resources, and support — wherever you are.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto"
        >
          {[
            {
              title: '100+ Country Coverage',
              description: 'Access tailored visa information for over 100 countries, updated regularly by immigration experts.',
            },
            {
              title: 'Free Expert Guidance',
              description: 'Get reliable, up-to-date advice from verified counselors and alumni networks worldwide.',
            },
            {
              title: 'Scholarship Resources',
              description: 'Discover funding opportunities and application support for international education.',
            },
            {
              title: '24/7 Community Support',
              description: 'Join a global network of students sharing experiences, tips, and real-time updates.',
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-5 text-center transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-800/10"
            >
              <h3 className="text-xl font-semibold mb-2.5 bg-gradient-to-r from-blue-50 to-purple-100 bg-clip-text text-transparent">
                {card.title}
              </h3>
              <p className="text-sm md:text-base opacity-90 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobeSection;