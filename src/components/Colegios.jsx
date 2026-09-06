import React from 'react';
import { motion } from 'framer-motion';

export default function Colegios() {
  const colegios = ['Colegio Pumahue', 'Colegio Bautista', 'Colegio Saint Patrick', 'Liceo Camilo Henríquez', 'Liceo Pablo Neruda', 'Instituto Claret', 'Colegio Armando Dufey', 'Liceo Montessori', 'Liceo Industrial'];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="colegios" className="py-24 px-4 md:px-8 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold text-holland-red tracking-widest uppercase mb-3">Nuestros Clientes</h2>
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Confeccionamos Para</h3>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {colegios.map((colegio, index) => (
            <motion.div 
              key={index} 
              variants={fadeUpVariant}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-xl shadow-sm hover:shadow-md hover:border-holland-red/30 transition-all cursor-default group flex items-center justify-center"
            >
              <span className="font-bold text-gray-600 group-hover:text-holland-red transition-colors text-sm md:text-base">{colegio}</span>
            </motion.div>
          ))}
          <motion.div 
            variants={fadeUpVariant}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-holland-red text-white px-6 py-4 rounded-xl shadow-[0_4px_20px_rgba(230,34,43,0.2)] transition-all cursor-default flex items-center justify-center"
          >
            <span className="font-bold text-sm md:text-base">Y muchos más...</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
