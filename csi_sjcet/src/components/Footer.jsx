import React from 'react'
import csiLogo from '../assets/csi.png'

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-black w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Contact Section */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Connect with us</h3>
          <p className="text-gray-400">
            St. Joseph&apos;s College of Engineering and Technology,
            <br />
            Choondacherry, Palai,
            <br />
            Kerala, India - 686579
          </p>
          <p className="text-gray-400 mt-3">
            📧{" "}
            <a
              href="mailto:csi@sjcetpalai.ac.in"
              className="hover:text-white"
            >
              csi@sjcetpalai.ac.in
            </a>
            <br />
            📞{" "}
            <a href="tel:+919961163649" className="hover:text-white">
              +91 99611 63649
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a href="#Header" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#Events" className="hover:text-white">
                Events
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* CSI Logo */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <div className="bg-white p-10 rounded-lg flex items-center justify-center">
            <img src={csiLogo} alt="CSI Logo" className="w-24 h-auto" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        © 2025 CSI SJCET Palai. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
