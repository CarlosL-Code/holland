import React from 'react';
import { MapPin, Phone, Clock, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
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
  );
}
