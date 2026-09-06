import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'} px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-black text-holland-red tracking-tighter uppercase cursor-pointer"
          >
            Holland
          </motion.div>
          
          <div className="hidden md:flex gap-8 font-bold text-gray-600">
            {['Inicio', 'Nosotros', 'Colegios', 'Productos'].map((item, i) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="hover:text-holland-red transition relative group text-sm uppercase tracking-wider"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-holland-red transition-all group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="hidden md:flex items-center gap-2 bg-gray-900 hover:bg-holland-red text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-wide transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Contactar <ChevronRight size={16} />
          </motion.button>

          <button className="md:hidden text-gray-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden sticky top-[72px] z-40"
          >
            <div className="flex flex-col p-4 font-bold text-gray-700">
               {['Inicio', 'Nosotros', 'Colegios', 'Productos'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="py-3 border-b border-gray-50 uppercase text-sm">{item}</a>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
