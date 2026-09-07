import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, GraduationCap } from 'lucide-react';

export default function Colegios() {
  const colegios = ['Colegio Pumahue', 'Colegio Bautista', 'Colegio Saint Patrick', 'Liceo Camilo Henríquez', 'Liceo Pablo Neruda', 'Instituto Claret', 'Colegio Armando Dufey', 'Liceo Montessori', 'Liceo Industrial'];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
          variants={fadeUpVariant}
          className="relative w-full overflow-hidden mt-8 py-4"
        >
          {/* Gradient masks for fading effect at the edges */}
          <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track - Contains 2 sets of items to loop smoothly */}
          <div className="flex w-max animate-marquee gap-6 md:gap-10 items-center">
            {[...colegios, "Y muchos más...", ...colegios, "Y muchos más..."].map((colegio, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-white border border-gray-100 px-8 py-4 md:py-5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(230,34,43,0.12)] hover:border-holland-red/20 transition-all duration-300 cursor-default group"
              >
                <div className="bg-gray-50 text-gray-400 p-2.5 rounded-full group-hover:bg-holland-red group-hover:text-white transition-colors duration-300 flex-shrink-0">
                  {colegio === "Y muchos más..." ? <ChevronRight size={20} /> : <GraduationCap size={20} />}
                </div>
                <span className="font-bold text-gray-700 group-hover:text-gray-900 transition-colors whitespace-nowrap text-sm md:text-base">{colegio}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
