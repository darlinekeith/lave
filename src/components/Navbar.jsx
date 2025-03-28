import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import logos from '../assets/LAVE Logo-02.png';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <RouterLink to="/">
              <img 
                className="h-14 md:h-20 w-auto object-contain hover:opacity-80 transition-opacity" 
                src={logos} 
                alt="LAVE Logo" 
              />
            </RouterLink>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4 items-center">
            {/* Home Link - Hidden on mobile */}
            <RouterLink
              to="/"
              className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 transition-colors hidden md:block"
            >
              Home
            </RouterLink>

            {/* Donations Link - Visible on all screens */}
            <a
              href="#donations"
              className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 transition-colors text-sm md:text-base"
            >
              Donations
            </a>
            
            {/* Gallery Link - Visible on all screens */}
            <RouterLink
              to="/photoGallery"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors text-sm md:text-base"
            >
              Gallery
            </RouterLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;