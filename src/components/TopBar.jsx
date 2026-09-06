import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-holland-darkRed to-holland-red text-white py-2 px-4 md:px-8 flex justify-between items-center text-[10px] sm:text-xs md:text-sm font-medium tracking-wide">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="flex items-center gap-1 md:gap-1.5 opacity-90 hover:opacity-100 transition"><MapPin size={12} className="md:w-3.5 md:h-3.5"/> Portales 1260</span>
        <span className="hidden sm:flex items-center gap-1 md:gap-1.5 opacity-90 hover:opacity-100 transition"><Clock size={12} className="md:w-3.5 md:h-3.5"/> 9:30 - 18:00</span>
      </div>
      <div className="flex items-center gap-1.5 md:gap-2">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="hidden sm:inline">Confección</span> 100% Nacional
      </div>
    </div>
  );
}
