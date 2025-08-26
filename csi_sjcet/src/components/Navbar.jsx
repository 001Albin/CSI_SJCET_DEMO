import React, { useEffect, useState } from 'react';
import csiLogo from '../assets/logocsi.png';
import menu from '../assets/menu_icon.svg';
import cross from '../assets/cross_icon.svg';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <nav className="top-0 left-0 w-full z-50">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={csiLogo} alt="Logo" className="w-20" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white font-medium">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
          <a href="#Event" className="cursor-pointer hover:text-gray-400">Event</a>
          <a href="#Contact" className="cursor-pointer hover:text-gray-400">Contact</a>
        </ul>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={menu}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          showMobileMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowMobileMenu(false)}
      ></div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-gray-900 text-white z-50 transform transition-transform duration-300 shadow-lg
        ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={cross}
            className="w-6"
            alt="Close"
          />
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col items-start gap-6 mt-10 px-6 text-lg font-medium">
          <li><a onClick={() => setShowMobileMenu(false)} href="#Header" className="hover:text-gray-400">Home</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#About" className="hover:text-gray-400">About</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#Event" className="hover:text-gray-400">Event</a></li>
          <li><a onClick={() => setShowMobileMenu(false)} href="#Contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
