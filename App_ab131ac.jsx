import React, { useState, useEffect } from 'react';
import { MapPin, Clock, CreditCard, ShoppingBag, Phone, Menu, X, ChevronRight, GraduationCap, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import schoolUniform from './assets/school_uniform_1.jpg';
import clinicalUniform from './assets/clinical_uniform_1.jpg';
import winterUniform from './assets/winter_uniform_1.jpg';

import schoolUniformNoBg from './assets/school_uniform_1_sin_fondo.png';
import clinicalUniformNoBg from './assets/clinical_uniform_1_sin_fondo.png';
import winterUniformNoBg from './assets/winter_uniform_1_sin_fondo.png';
import iconoChileno from './assets/icono_chileno_sin_fondo.png';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const heroImages = [clinicalUniformNoBg, schoolUniformNoBg, winterUniformNoBg];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
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

  const colegios = ['Colegio Pumahue', 'Colegio Bautista', 'Colegio Saint Patrick', 'Liceo Camilo Henríquez', 'Liceo Pablo Neruda', 'Instituto Claret', 'Colegio Armando Dufey', 'Liceo Montessori', 'Liceo Industrial'];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden selection:bg-holland-red selection:text-white">
      
      {/* Top bar */}
      <div className="bg-gradient-to-r from-holland-darkRed to-holland-red text-white py-2 px-4 md:px-8 flex justify-between items-center text-xs md:text-sm font-medium tracking-wide">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition"><MapPin size={14}/> Portales 1260, Temuco</span>
          <span className="hidden md:flex items-center gap-1.5 opacity-90 hover:opacity-100 transition"><Clock size={14}/> Lun - Vie: 9:30 a 18:00</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Confección 100% Nacional
        </div>
      </div>

      {/* Navigation (Sticky & Glassmorphism) */}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 font-bold text-gray-700">
               {['Inicio', 'Nosotros', 'Colegios', 'Productos'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="py-3 border-b border-gray-50 uppercase text-sm">{item}</a>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative flex items-center justify-center min-h-[85vh] overflow-hidden bg-gray-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img src={schoolUniform} alt="Uniformes Escolares" className="w-full h-full object-cover object-center" />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent z-10"></div>
        
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="md:w-1/2 lg:w-3/5"
          >
            <motion.div variants={fadeUpVariant} className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 mt-10 md:mt-0">
              Excelencia en Confección
            </motion.div>
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase tracking-tighter">
              Vistiendo el <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-holland-red to-red-400">futuro de Temuco</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-gray-300 font-medium mb-10 max-w-lg leading-relaxed">
              Diseño, tradición y confort en cada costura. Fabricamos uniformes escolares y clínicos con dedicación 100% nacional.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <a href="#productos" className="inline-flex items-center justify-center gap-2 bg-holland-red hover:bg-holland-darkRed text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(230,34,43,0.4)] hover:shadow-[0_0_30px_rgba(230,34,43,0.6)] transform hover:-translate-y-1">
                <ShoppingBag size={18} /> Ver Colección
              </a>
              <a href="#colegios" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold py-4 px-8 rounded-full text-sm uppercase tracking-wide transition-all hover:pr-6 group">
                Conoce más <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side circle slideshow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-1/2 lg:w-2/5 flex justify-center items-center relative min-h-[400px]"
          >
            {/* Background transparent circle */}
            <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
            
            {/* White circle background */}
            <div className="absolute w-[230px] h-[230px] md:w-[310px] md:h-[310px] bg-white rounded-full shadow-2xl border-4 border-white/50 z-0"></div>

            {/* Icono chileno in front of the white circle, behind uniform */}
            <img src={iconoChileno} alt="Sello Nacional" className="absolute w-[280px] md:w-[380px] opacity-80 z-10 drop-shadow-lg" />

            {/* Image overlapping the circle to the left */}
            <div className="relative w-full h-full flex items-center justify-center z-20 -ml-28 md:-ml-48">
              <AnimatePresence>
                <motion.img 
                  key={heroImageIndex}
                  src={heroImages[heroImageIndex]}
                  initial={{ opacity: 0, scale: 0.9, x: 30 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.1, x: -30 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute w-[320px] h-[320px] md:w-[460px] md:h-[460px] object-cover object-center drop-shadow-2xl"
                  alt="Prenda rotativa"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Colegios Section */}
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

      {/* Productos Section */}
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
            
            {[
              { img: schoolUniform, title: 'Uniformes Escolares', desc: 'Poleras, faldas, pantalones y suéteres de corte impecable.' },
              { img: winterUniform, title: 'Buzos y Parkas', desc: 'Protección y abrigo con tecnología de alta durabilidad.' },
              { img: clinicalUniform, title: 'Uniformes Clínicos', desc: 'Delantales y scrubs profesionales con ajuste perfecto.' }
            ].map((prod, idx) => (
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

      {/* Contacto Section */}
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

      {/* Info & Footer Section */}
      <footer id="nosotros" className="bg-gray-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-holland-red/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto pt-24 pb-12 px-4 md:px-8 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            <div className="md:col-span-5 lg:col-span-4">
              <div className="text-4xl font-black text-white tracking-tighter uppercase mb-6 flex items-center gap-2">
                <span className="text-holland-red">Holland</span>
              </div>
              <p className="text-gray-400 mb-8 font-medium leading-relaxed">
                Somos una casa confeccionista 100% nacional. Combinamos técnicas tradicionales con tecnología moderna para entregar prendas duraderas, cómodas y elegantes.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders if needed */}
              </div>
            </div>

            <div className="md:col-span-4 lg:col-span-4 lg:col-start-6">
              <h4 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">Contacto Directo</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-gray-300 font-medium group">
                  <div className="bg-white/5 p-3 rounded-full group-hover:bg-holland-red/20 group-hover:text-holland-red transition-colors"><MapPin size={20}/></div>
                  <div className="pt-1">Calle Portales 1260<br/><span className="text-gray-500 text-sm">Temuco, Chile</span></div>
                </li>
                <li className="flex items-center gap-4 text-gray-300 font-medium group">
                  <div className="bg-white/5 p-3 rounded-full group-hover:bg-holland-red/20 group-hover:text-holland-red transition-colors"><Phone size={20}/></div>
                  <span>+56 9 0000 0000</span>
                </li>
                <li className="flex items-center gap-4 text-gray-300 font-medium group">
                  <div className="bg-white/5 p-3 rounded-full group-hover:bg-holland-red/20 group-hover:text-holland-red transition-colors"><Clock size={20}/></div>
                  <span>Lun - Vie: 9:30 a 18:00 hrs</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-3 lg:col-span-3">
              <h4 className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-widest">Medios de Pago</h4>
              <p className="text-gray-400 font-medium mb-6 text-sm leading-relaxed">Operamos con total seguridad mediante sistema Transbank.</p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 hover:bg-white text-gray-300 hover:text-gray-900 p-2.5 rounded-lg transition flex items-center justify-center w-[70px] h-[45px] shadow-sm"><CreditCard size={24}/></div>
                <div className="bg-white/10 hover:bg-white text-gray-300 hover:text-blue-800 p-2.5 rounded-lg transition font-black italic flex items-center justify-center w-[70px] h-[45px] shadow-sm">VISA</div>
                <div className="bg-white/10 hover:bg-white text-gray-300 hover:text-red-600 p-2.5 rounded-lg transition font-bold flex items-center justify-center w-[70px] h-[45px] shadow-sm text-lg">MC</div>
              </div>
            </div>

          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
            <div>&copy; {new Date().getFullYear()} Uniformes Holland. Todos los derechos reservados.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">Privacidad</a>
              <a href="#" className="hover:text-white transition">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
