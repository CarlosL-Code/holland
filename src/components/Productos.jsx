import React from 'react';
import { motion } from 'framer-motion';

import schoolUniform from '../assets/school_uniform_1.jpg';
import clinicalUniform from '../assets/clinical_uniform_1.jpg';
import winterUniform from '../assets/winter_uniform_1.jpg';

export default function Productos() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const productos = [
    { img: schoolUniform, title: 'Uniformes Escolares', desc: 'Poleras, faldas, pantalones y suéteres de corte impecable.' },
    { img: winterUniform, title: 'Buzos y Parkas', desc: 'Protección y abrigo con tecnología de alta durabilidad.' },
    { img: clinicalUniform, title: 'Uniformes Clínicos', desc: 'Delantales y scrubs profesionales con ajuste perfecto.' }
  ];

  return (
    <section id="productos" className="py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-sm font-bold text-holland-red tracking-widest uppercase mb-3">Catálogo</h2>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Líneas de Producto</h3>
          </div>
          <p className="text-gray-500 font-medium max-w-md text-sm md:text-base">
            Diseños exclusivos y materiales de alta durabilidad para resistir el día a día escolar y profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {productos.map((prod, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(230,34,43,0.15)] transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="h-80 overflow-hidden relative">
                <motion.img 
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={prod.img} 
                  alt={prod.title} 
                  className="w-full h-full object-cover object-top origin-bottom" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="p-8 relative bg-white">
                <div className="w-10 h-1 bg-holland-red mb-6 transition-all duration-300 group-hover:w-full"></div>
                <h3 className="text-2xl font-black text-gray-900 mb-3 uppercase tracking-tight">{prod.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed">{prod.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
