import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">LawFirm</h2>
            <p className="text-gray-400">
              Trusted legal advisors providing expert guidance in various areas of law. Protecting your rights with integrity and professionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Contact Info & Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Legal Street, Suite 500</p>
            <p className="text-gray-400">New York, NY 10001</p>
            <p className="text-gray-400 mt-2">Email: info@lawfirm.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date ().getFullYear ()} LawFirm. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
