import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logos from '../assets/LAVE Logo-02.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => setIsMenuOpen(false);
  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'What We Do', href: '/#about' },
    { label: 'Where We Work', href: '/#where-we-work' },
    { label: 'Impact', href: '/#impact' },
    { label: 'Who We Are', href: '/#who-we-are' },
    { label: 'How to Help', href: '/#donations' },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="page-container flex h-20 items-center justify-between px-5 sm:px-8">
        <RouterLink to="/" onClick={closeMenu} className="flex shrink-0 items-center">
              <img 
                className="h-12 w-auto object-contain sm:h-14"
                src={logos} 
                alt="LAVE Logo" 
              />
        </RouterLink>

        <div className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:text-lave-blue"
            >
              {item.label}
            </a>
          ))}
          <RouterLink
            to="/photoGallery"
            className={`ml-2 px-3 py-2 text-sm font-semibold transition-colors ${
              !isHome ? 'text-lave-blue' : 'text-slate-700 hover:text-lave-blue'
            }`}
          >
            Gallery
          </RouterLink>
          <a
            href="/#donations"
            className="ml-3 rounded-md bg-lave-blue px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-sky-700"
          >
            Give Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-lave-ink xl:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX className="h-6 w-6" aria-hidden="true" /> : <HiMenu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-3 shadow-lg xl:hidden">
          <div className="page-container flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <RouterLink
              to="/photoGallery"
              onClick={closeMenu}
              className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
            >
              Gallery
            </RouterLink>
            <a
              href="/#donations"
              onClick={closeMenu}
              className="mt-3 rounded-md bg-lave-blue px-4 py-3 text-center text-sm font-bold text-white"
            >
              Give Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;