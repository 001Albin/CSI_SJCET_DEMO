import React, { useState, useEffect } from 'react'
import csiLogo from '../assets/csi.png'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    const element = document.getElementById('About')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 to-blue-50" id="About">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header */}
        <div className={`text-center mb-8 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-3">
            About <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            Bridging academia and industry through innovation and excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - About Us */}
          <div className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`} style={{ transitionDelay: '300ms' }}>
            
            {/* About Us Section */}
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10m4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">About Us</h3>
              </div>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  Welcome to the Computer Society of India (CSI) chapter at St Joseph's College of Engineering and Technology, Palai. We are a community dedicated to technology and innovation. Our chapter provides a platform for tech enthusiasts to learn, grow, and collaborate through workshops, seminars, and events. We aim to foster curiosity, enhance skills, and create networking opportunities within the tech community.
                </p>
              </div>
            </div>

            {/* What is CSI */}
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">What is CSI?</h3>
              </div>
              <div className="text-slate-600 leading-relaxed text-sm md:text-base">
                <p>
                  The Computer Society of India (CSI) is the largest organization of computer professionals in India. Established in 1965, it represents the nation's computer professionals. CSI is dedicated to maintaining the integrity and competence of the computing profession and promoting collaboration among its members through chapters and student branches.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - CSI Logo */}
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`} style={{ transitionDelay: '500ms' }}>
            
            <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 border border-slate-200">
              
              {/* CSI Logo */}
              <div className="text-center">
                <div className="inline-block p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl mb-4 md:mb-6">
                  <img 
                    src={csiLogo} 
                    alt="Computer Society of India" 
                    className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                  Computer Society of India
                </h3>
                <p className="text-lg md:text-xl text-blue-600 font-semibold mb-3">Est. March 6, 1965</p>
                <div className="w-16 md:w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
                <p className="text-base md:text-lg text-slate-600 mb-4">
                  India's Premier Professional Body for Computer Professionals
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 md:p-4">
                  <p className="text-slate-700 font-medium text-sm md:text-base">
                    "Leading India's Digital Transformation for Nearly 60 Years"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About