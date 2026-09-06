import React from 'react';
import { MapPin, Clock, CreditCard, ShoppingBag, Phone } from 'lucide-react';
import schoolUniform from './assets/school_uniform_1.jpg';
import clinicalUniform from './assets/clinical_uniform_1.jpg';
import winterUniform from './assets/winter_uniform_1.jpg';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Top bar */}
      <div className="bg-holland-red text-white py-2 px-4 md:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={16}/> Portales 1260, Temuco</span>
          <span className="hidden md:flex items-center gap-1"><Clock size={16}/> Lun - Vie: 9:30 a 18:00</span>
        </div>
        <div>Confección 100% Nacional</div>
      </div>

      {/* Navigation */}
      <nav className="py-4 px-4 md:px-8 flex justify-between items-center shadow-sm">
        <div className="text-3xl font-black text-holland-red tracking-tighter uppercase">Holland</div>
        <div className="hidden md:flex gap-6 font-bold text-gray-600">
          <a href="#nosotros" className="hover:text-holland-red transition">Nosotros</a>
          <a href="#colegios" className="hover:text-holland-red transition">Colegios</a>
          <a href="#productos" className="hover:text-holland-red transition">Productos</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gray-100 flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10 opacity-70"></div>
        <img src={schoolUniform} alt="Uniformes Escolares" className="absolute inset-0 w-full h-full object-cover object-center opacity-60" />
        
        <div className="relative z-20 text-center md:text-left md:w-2/3 lg:w-1/2 p-8 md:p-12 mx-auto md:ml-12 mt-12 mb-12 bg-white/90 rounded-xl shadow-2xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4 uppercase">
            Vistiendo el futuro de <span className="text-holland-red">Temuco</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-8">
            Calidad, tradición y confort. Fabricamos uniformes escolares y clínicos con 100% de dedicación nacional.
          </p>
          <a href="#productos" className="inline-flex items-center gap-2 bg-holland-red hover:bg-holland-darkRed text-white font-bold py-3 px-8 rounded-full text-lg transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            <ShoppingBag /> Ver Uniformes
          </a>
        </div>
      </section>

      {/* Colegios Section */}
      <section id="colegios" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">Confeccionamos para</h2>
          <div className="w-16 h-1 bg-holland-red mx-auto mb-10"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 font-bold text-gray-600">
            {['Colegio Pumahue', 'Colegio Bautista', 'Colegio Saint Patrick', 'Liceo Camilo Henríquez', 'Liceo Pablo Neruda', 'Instituto Claret', 'Colegio Armando Dufey', 'Liceo Montessori', 'Liceo Industrial', 'Y muchos más...'].map((colegio, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100 hover:border-holland-red hover:text-holland-red transition flex items-center justify-center text-center h-24">
                {colegio}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-2 uppercase">Nuestros Productos</h2>
            <div className="w-16 h-1 bg-holland-red mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium max-w-2xl mx-auto">Fabricamos suéteres, pantalones, faldas, delantales, buzos, poleras y parkas. Encuentra todo lo que necesitas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden relative">
                <img src={schoolUniform} alt="Uniformes Escolares" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Uniformes Escolares</h3>
                <p className="text-gray-600">Poleras, faldas, pantalones y suéteres para todos los colegios.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden relative">
                <img src={winterUniform} alt="Buzos y Parkas" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Buzos y Parkas</h3>
                <p className="text-gray-600">Ropa de abrigo de alta durabilidad para el invierno escolar.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="h-64 overflow-hidden relative">
                <img src={clinicalUniform} alt="Uniformes Clínicos" className="w-full h-full object-top object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Uniformes Clínicos</h3>
                <p className="text-gray-600">Delantales y trajes clínicos para universitarios y profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info & Footer Section */}
      <footer id="nosotros" className="bg-gray-900 text-white pt-16 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-12">
          
          <div>
            <div className="text-3xl font-black text-holland-red tracking-tighter uppercase mb-6">Holland</div>
            <p className="text-gray-400 mb-6 font-medium">
              Somos una tienda 100% nacional dedicada a la confección de uniformes de alta calidad. Tu tranquilidad y el confort de tus hijos son nuestra prioridad.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Visítanos</h4>
            <div className="space-y-4 text-gray-400 font-medium">
              <p className="flex items-center gap-3"><MapPin className="text-holland-red" size={20}/> Portales 1260, Temuco</p>
              <p className="flex items-center gap-3"><Clock className="text-holland-red" size={20}/> Lunes a Viernes: 9:30 - 18:00 hrs</p>
              <p className="flex items-center gap-3"><Phone className="text-holland-red" size={20}/> +56 9 0000 0000</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 uppercase tracking-wider text-white">Medios de Pago</h4>
            <p className="text-gray-400 font-medium mb-4">Aceptamos todos los medios de pago:</p>
            <div className="flex gap-4">
              <div className="bg-white text-gray-900 p-2 rounded font-bold flex items-center justify-center w-16 h-10 shadow-sm"><CreditCard /></div>
              <div className="bg-white text-blue-800 p-2 rounded font-black italic flex items-center justify-center w-16 h-10 shadow-sm">VISA</div>
              <div className="bg-white text-red-600 p-2 rounded font-bold flex items-center justify-center w-16 h-10 shadow-sm">MC</div>
            </div>
            <p className="text-gray-500 text-sm mt-4">Transbank / Webpay / Redcompra / Abono</p>
          </div>

        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Uniformes Holland. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
