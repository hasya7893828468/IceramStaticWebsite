import React, { useState } from "react";
import img from "../assets/MainImg.jpeg";

const MainComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="absolute w-full top-0 left-0 z-50 backdrop-blur-lg bg-black/10 border-b border-white/20 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">LawFirm</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="text-lg hover:text-gray-300 transition-all">Home</a>
              <a href="#about" className="text-lg hover:text-gray-300 transition-all">About Us</a>
              <a href="#services" className="text-lg hover:text-gray-300 transition-all">Services</a>
              <a href="#contact" className="text-lg hover:text-gray-300 transition-all">Contact</a>
              <a href="#login" className="text-lg hover:text-gray-300 border border-white/30 px-4 py-2 rounded-md transition-all">Login</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={handleMenuToggle} className="text-white focus:outline-none z-50 relative">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 w-full bg-black text-white py-4 z-50 rounded-lg shadow-lg">
            <a href="#home" className="block px-6 py-3 text-lg hover:bg-gray-800 transition-all">Home</a>
            <a href="#about" className="block px-6 py-3 text-lg hover:bg-gray-800 transition-all">About Us</a>
            <a href="#services" className="block px-6 py-3 text-lg hover:bg-gray-800 transition-all">Services</a>
            <a href="#contact" className="block px-6 py-3 text-lg hover:bg-gray-800 transition-all">Contact</a>
            <a href="#login" className="block px-6 py-3 text-lg border-t border-white/20 mt-2 hover:bg-gray-800 transition-all">Login</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />

        {/* Content Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Welcome to Our Law Firm
          </h1>
          <p className="text-xl mb-6 max-w-2xl">
            Experienced lawyers committed to providing expert legal services in various areas of law. Let us guide you through your legal journey with confidence and care.
          </p>
          <a href="#contact" className="bg-blue-600 text-white py-3 px-8 rounded-md text-lg hover:bg-blue-700 transition-all">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default MainComponent;
