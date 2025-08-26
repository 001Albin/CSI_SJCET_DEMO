import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import headerImg from '../assets/Sjc113-1.webp';
import { Eye, Target } from 'lucide-react';

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Header"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-70" />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative flex-1 flex flex-col justify-start items-center px-4 sm:px-6 pt-10 pb-20">
        {/* Hero Section */}
        <div className="text-center text-white mb-20">
          <div
            className={`transform transition-all duration-1200 ease-out ${
              isLoaded
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                CSI SJCET
              </span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Where innovation meets opportunity and technology transforms lives
            </p>

            <a
              href="#Contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Join with US
            </a>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div
              className={`h-full transform transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="h-full flex flex-col backdrop-brightness-80 border justify-between rounded-3xl p-8 transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-2xl mr-4">
                    <Eye className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg flex-1">
                  The Computer Society of India (CSI) aims to promote Information
                  Technology as a profession with the vision of{' '}
                  <span className="text-blue-300 font-semibold italic">
                    "IT for Masses"
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div
              className={`h-full transform transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="h-full flex flex-col backdrop-brightness-80 border justify-between rounded-3xl p-8 transition-all hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-cyan-500/20 rounded-2xl mr-4">
                    <Target className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg flex-1">
                  To facilitate research and career enhancement for IT professionals
                  while inspiring and nurturing new entrants into the industry,
                  helping them integrate into the IT community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;