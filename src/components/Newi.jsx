import React from 'react';
import {
  Scale,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from 'lucide-react';

function App () {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
          alt="Law Office"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Justice & Excellence<br />in Legal Practice
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Dedicated to providing exceptional legal services with integrity,
            professionalism, and a commitment to our clients' success.
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md text-lg font-semibold w-fit transition-colors">
            Schedule Consultation
          </button>
        </div>
      </header>

      {/* Practice Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Practice Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="w-8 h-8 text-amber-600" />,
                title: 'Corporate Law',
                description: 'Expert guidance for businesses of all sizes in corporate matters.',
              },
              {
                icon: <Users className="w-8 h-8 text-amber-600" />,
                title: 'Family Law',
                description: 'Compassionate representation in family-related legal matters.',
              },
              {
                icon: <Shield className="w-8 h-8 text-amber-600" />,
                title: 'Civil Litigation',
                description: 'Strong advocacy in complex civil disputes and litigation.',
              },
            ].map ((area, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
                <button className="mt-4 text-amber-600 font-semibold flex items-center group">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose Our Firm</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                '25+ Years of Experience',
                'Dedicated Legal Team',
                'Proven Track Record',
                'Client-Focused Approach',
              ].map ((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
              <p className="mb-8">Get in touch with our legal experts today.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-amber-500" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-amber-500" />
                  <span>contact@lawfirm.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-amber-500" />
                  <span>123 Legal Street, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-amber-500" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Law Firm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
