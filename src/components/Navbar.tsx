import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-xl shadow-lg py-4 sticky top-0 z-50 border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-sky-600">
          2424 Carpet Cleaning
        </Link>
        <div className="flex space-x-4">
          <Link to="/services" className="hover:underline text-gray-700">Services</Link>
          <Link to="/testimonials" className="hover:underline text-gray-700">Testimonials</Link>
          <Link to="/about-us" className="hover:underline text-gray-700">About Us</Link>
          <Link to="/contact" className="hover:underline text-gray-700">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;