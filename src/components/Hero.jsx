import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import schoolUniformBg from '../assets/school_uniform_1.jpg';
import schoolUniformNoBg from '../assets/school_uniform_1_sin_fondo.png';
import clinicalUniformNoBg from '../assets/clinical_uniform_1_sin_fondo.png';
import winterUniformNoBg from '../assets/winter_uniform_1_sin_fondo.png';
import iconoChileno from '../assets/icono_chileno_sin_fondo.png';

export default function Hero() {
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const heroImages = [clinicalUniformNoBg, schoolUniformNoBg, winterUniformNoBg];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="inicio" className="relative flex items-center justify-center min-h-[85vh] overflow-hidden bg-gray-900 py-12 md:py-0">
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img src={schoolUniformBg} alt="Fondo Uniformes" className="w-full h-full object-cover object-center" />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-gray-900 via-gray-900/90 md:via-gray-900/80 to-transparent md:to-gray-900/40 z-10"></div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-12 mt-8 md:mt-0">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <motion.div variants={fadeUpVariant} className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-widest mb-4 sm:mb-6">
            Excelencia en Confección
          </motion.div>
          <motion.h1 variants={fadeUpVariant} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-4 sm:mb-6 uppercase tracking-tighter">
            Vistiendo el <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-holland-red to-red-400">futuro de Temuco</span>
          </motion.h1>
          <motion.p variants={fadeUpVariant} className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-8 sm:mb-10 max-w-md md:max-w-lg leading-relaxed px-4 md:px-0">
            Diseño, tradición y confort en cada costura. Fabricamos uniformes escolares y clínicos con dedicación 100% nacional.
          </motion.p>
          <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto px-4 md:px-0">
            <a href="#productos" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-holland-red hover:bg-holland-darkRed text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(230,34,43,0.4)] hover:shadow-[0_0_30px_rgba(230,34,43,0.6)] transform hover:-translate-y-1">
              <ShoppingBag size={18} /> Ver Colección
            </a>
            <a href="#colegios" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-sm uppercase tracking-wide transition-all hover:pr-6 group">
              Conoce más <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center relative min-h-[300px] sm:min-h-[400px] mt-8 md:mt-0 transform scale-90 sm:scale-100"
        >
          <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          
          <img src={iconoChileno} alt="Sello Nacional" className="absolute w-[220px] sm:w-[280px] md:w-[380px] opacity-80 z-0 drop-shadow-lg" />

          <div className="absolute w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] md:w-[310px] md:h-[310px] bg-white rounded-full shadow-2xl border-4 border-white/50 z-0"></div>

          <div className="relative flex items-center justify-center z-10 -ml-12 sm:-ml-28 md:-ml-48">
            <AnimatePresence mode="wait">
              <motion.img 
                key={heroImageIndex}
                src={heroImages[heroImageIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[460px] md:h-[460px] object-cover object-center drop-shadow-2xl"
                alt="Prenda rotativa"
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
