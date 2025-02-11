import React, {useState} from 'react';
import {motion} from 'framer-motion';
// import axios from 'axios';
import img from '../assets/Get a Free Law Firm Layout Pack for Divi.jpeg';

const ConsultationForm = () => {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    phone: '',
    caseType: '',
    message: '',
  });

  const handleChange = e => {
    setFormData ({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault ();
    console.log (formData);
  };

  return (
    <section
      className="relative flex items-center justify-between min-h-screen bg-cover bg-center px-8"
      style={{backgroundImage: `url(${img})`}}
    >
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="relative z-10 w-1/2 text-white space-y-6 text-lg leading-relaxed">
        <h2 className="text-4xl font-bold">Understanding the Law</h2>
        <p>
          The law serves as a framework to maintain justice, protect individual rights, and uphold order in society.
        </p>
      </div>

      <motion.div
        className="relative z-10 w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl p-8 text-white m-5"
        initial={{x: 100, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.6}}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Request a Consultation
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-lg mb-1">Case Type</label>
            <select
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value="" disabled>Select case type</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Corporate Law">Corporate Law</option>
              <option value="Property Law">Property Law</option>
              <option value="Employment Law">Employment Law</option>
            </select>
          </div>
          <div>
            <label className="block text-lg mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 h-24 rounded-lg bg-white/20 backdrop-blur-md text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Describe your case"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ConsultationForm;
