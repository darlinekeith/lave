import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import logos from '../assets/LAVE Logo-02.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed w-full bg-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <RouterLink to="/">
              <img className="h-20 md:h-24 lg:h-28 w-auto object-contain" src={logos} alt="LAVE Logo" />
            </RouterLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {isHomePage ? (
              <>
                {["home", "about", "nature", "values", "donations"].map((item) => (
                  <ScrollLink
                    key={item}
                    to={item}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="cursor-pointer text-gray-700 hover:text-indigo-600 transition-colors font-medium"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </ScrollLink>
                ))}
              </>
            ) : (
              <RouterLink to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
                Home
              </RouterLink>
            )}
            <RouterLink
              to="/photoGallery"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Gallery
            </RouterLink>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden flex items-center">
            <button onClick={handleClick} className="focus:outline-none">
              {nav ? <XIcon className="h-6 w-6 text-gray-700" /> : <MenuIcon className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 px-4 py-6">
            {isHomePage ? (
              <>
                {["home", "about", "nature", "values", "donations"].map((item) => (
                  <li key={item} onClick={handleClose}>
                    <ScrollLink
                      to={item}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="block text-gray-700 hover:text-indigo-600 font-medium"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </ScrollLink>
                  </li>
                ))}
              </>
            ) : (
              <li>
                <RouterLink to="/" onClick={handleClose} className="block text-gray-700 hover:text-indigo-600 font-medium">
                  Home
                </RouterLink>
              </li>
            )}
            <li>
              <RouterLink
                to="/photoGallery"
                onClick={handleClose}
                className="block bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Gallery
              </RouterLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
