import React, { useEffect, useState } from 'react';
import csiLogo from '../assets/logocsi.png';
import menu from '../assets/menu_icon.svg';
import cross from '../assets/cross_icon.svg';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <>
      <nav className={`md:fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        {/* Navbar Container - Made more compact */}
        <div className="container mx-auto flex justify-between items-center py-3 px-6 md:px-12 lg:px-16">
          <div className="flex items-center">
            {/* Logo in black box */}
            <div className="bg-black p-1.5 rounded-md mr-2">
              <img src={csiLogo} alt="CSI Logo" className="w-12 md:w-10 transition-all duration-300" />
            </div>
            <span className={`font-bold text-md hidden sm:block transition-colors duration-300 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              CSI Student Chapter
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">
            <li>
              <a
                href="#Header"
                className={`cursor-pointer font-medium transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-blue-500 ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className={`cursor-pointer font-medium transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-green-500 ${isScrolled ? 'text-gray-700 hover:text-green-600' : 'text-white hover:text-green-300'}`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Event"
                className={`cursor-pointer font-medium transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-purple-500 ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'}`}
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className={`cursor-pointer font-medium transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-orange-500 ${isScrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-300'}`}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(true)}
            className={`md:hidden transition-all duration-300`}
          >
            <div className="p-1.5 rounded-lg bg-gray-600">
              <img
                src={menu}
                className="w-8 h-8 transition-filter duration-300"
                alt="Menu"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 bg-black z-40 transition-all duration-300 ${showMobileMenu ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setShowMobileMenu(false)}
        ></div>

        {/* Mobile Slide-in Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-72 max-w-full bg-gray-800 text-white z-50 transform transition-transform duration-300 ease-in-out shadow-2xl
          ${showMobileMenu ? 'translate-x-0' : 'translate-x-full'}`}
        >
          {/* Header with Close Button */}
          <div className="flex justify-between items-center p-5 border-b border-gray-700 bg-gray-900">
            <div className="flex items-center">
              <div className="bg-black p-1.5 rounded-md mr-3">
                <img src={csiLogo} alt="CSI Logo" className="w-8" />
              </div>
              <span className="text-white font-semibold text-sm">CSI Student Chapter</span>
            </div>
            <button
              onClick={() => setShowMobileMenu(false)}
              className="p-1 rounded-full hover:bg-gray-700 transition-colors duration-200"
              aria-label="Close menu"
            >
              <img src={cross} className="w-5 h-5" alt="Close" />
            </button>
          </div>

          {/* Menu Items */}
          <div className="p-5 h-[calc(100%-120px)] overflow-y-auto">
            <ul className="flex flex-col gap-1 mt-3">
              <li>
                <a
                  onClick={() => setShowMobileMenu(false)}
                  href="#Header"
                  className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover:text-blue-300 transition-colors duration-200">Home</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShowMobileMenu(false)}
                  href="#About"
                  className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold group"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover:text-green-300 transition-colors duration-200">About</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShowMobileMenu(false)}
                  href="#Event"
                  className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold group"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover:text-purple-300 transition-colors duration-200">Events</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShowMobileMenu(false)}
                  href="#Contact"
                  className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-200 font-semibold group"
                >
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="group-hover:text-orange-300 transition-colors duration-200">Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Section */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-gray-700 bg-gray-900">
            <div className="text-center text-gray-400 text-xs">
              <p className="font-medium">Computer Society of India</p>
              <p className="text-xs mt-1">© {new Date().getFullYear()} All rights reserved</p>
            </div>
          </div>
        </div>
      </nav>

      {/* Add spacing from the top to prevent content collision on medium screens and up */}
      <div className="h-16 hidden md:block"></div>
    </>
  );
};

export default Navbar;