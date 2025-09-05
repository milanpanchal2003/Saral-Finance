import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/image/saral.png'; // update with your path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
  <nav className="bg-white shadow-sm fixed top-0 w-full z-50 border-b border-gray-200 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2 text-2xl font-bold text-yellow-600">
            <img src={img1} alt="Logo" className="h-10 w-auto align-middle object-contain" style={{marginBottom: '2px'}} />
            <span className="leading-tight">Saral finance</span>
          </div>
          {/* Hamburger button for mobile */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border-2 border-yellow-600 bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-1 rounded-full bg-yellow-600 mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-1 rounded-full bg-yellow-600 mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-1 rounded-full bg-yellow-600 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">About</Link>
            <Link to="/services" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Contact</Link>
            <Link to="/login" className="hover:text-yellow-600 focus:text-yellow-600 transition-colors">Login</Link>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`md:hidden flex flex-col w-full mt-2 rounded bg-yellow-600 transition-all duration-300 origin-top overflow-hidden z-40 ${menuOpen ? 'max-h-96 py-2' : 'max-h-0 py-0'}`}
          style={{ transformOrigin: 'top' }}
        >
          <Link to="/" className="block px-4 py-3 text-white hover:bg-yellow-300 hover:text-yellow-600 focus:text-yellow-600 focus:bg-yellow-300 transition-colors border-b border-yellow-300 last:border-b-0" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="block px-4 py-3 text-white hover:bg-yellow-300 hover:text-yellow-600 focus:text-yellow-600 focus:bg-yellow-300 transition-colors border-b border-yellow-300 last:border-b-0" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" className="block px-4 py-3 text-white hover:bg-yellow-300 hover:text-yellow-600 focus:text-yellow-600 focus:bg-yellow-300 transition-colors border-b border-yellow-300 last:border-b-0" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/contact" className="block px-4 py-3 text-white hover:bg-yellow-300 hover:text-yellow-600 focus:text-yellow-600 focus:bg-yellow-300 transition-colors border-b border-yellow-300 last:border-b-0" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/login" className="block px-4 py-3 text-white hover:bg-yellow-300 hover:text-yellow-600 focus:text-yellow-600 focus:bg-yellow-300 transition-colors" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;