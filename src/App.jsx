import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Colegios from './components/Colegios';
import Productos from './components/Productos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 overflow-x-hidden selection:bg-holland-red selection:text-white">
      <TopBar />
      <Navbar />
      <Hero />
      <Colegios />
      <Productos />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
