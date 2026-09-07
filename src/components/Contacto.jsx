import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Send } from 'lucide-react';

export default function Contacto() {
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
    <section id="contacto" className="py-24 px-4 md:px-8 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:w-1/2"
        >
          <motion.h2 variants={fadeUpVariant} className="text-sm font-bold text-holland-red tracking-widest uppercase mb-3">Contacto</motion.h2>
          <motion.h3 variants={fadeUpVariant} className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight mb-6">Cotiza con <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-holland-red to-holland-darkRed">Nosotros</span></motion.h3>
          <motion.p variants={fadeUpVariant} className="text-gray-500 font-medium mb-10 max-w-md leading-relaxed text-base md:text-lg">
            ¿Necesitas uniformes para tu institución o empresa? Déjanos tus datos y un ejecutivo especializado te contactará a la brevedad.
          </motion.p>
          
          <motion.div variants={fadeUpVariant} className="flex gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-holland-red"><Phone size={24}/></div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Llámanos directo</p>
              <p className="font-bold text-gray-800 text-lg">+56 9 0000 0000</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="w-full lg:w-1/2 bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-100 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-holland-red/5 rounded-full blur-3xl"></div>
          
          <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Nombre Completo</label>
                <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-holland-red focus:ring-1 focus:ring-holland-red transition-all font-medium text-gray-800 text-sm" placeholder="Ej. Juan Pérez" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Teléfono / Celular</label>
                <input type="tel" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-holland-red focus:ring-1 focus:ring-holland-red transition-all font-medium text-gray-800 text-sm" placeholder="+56 9 0000 0000" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Institución o Empresa</label>
              <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-holland-red focus:ring-1 focus:ring-holland-red transition-all font-medium text-gray-800 text-sm" placeholder="Nombre de tu colegio o empresa" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider ml-1">Mensaje</label>
              <textarea rows="4" className="w-full bg-white border border-gray-200 px-4 py-3.5 rounded-xl focus:outline-none focus:border-holland-red focus:ring-1 focus:ring-holland-red transition-all font-medium text-gray-800 text-sm resize-none" placeholder="Cuéntanos qué necesitas cotizar..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gray-900 hover:bg-holland-red text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl transition-colors duration-300 shadow-md flex items-center justify-center gap-2 group mt-2">
              Enviar Mensaje <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
