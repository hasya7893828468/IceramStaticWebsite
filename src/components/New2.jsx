import React, {useState, useEffect} from 'react';
import {
  Scale,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Award,
  BookOpen,
  Building,
  MessageSquare,
} from 'lucide-react';

function App () {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  const [isScrolled, setIsScrolled] = useState (false);

  useEffect (() => {
    const handleScroll = () => {
      setIsScrolled (window.scrollY > 50);
    };
    window.addEventListener ('scroll', handleScroll);
    return () => window.removeEventListener ('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Scale className="w-8 h-8 text-amber-600" />
              <span
                className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                LEXICON
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map (item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase ()}`}
                  className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-amber-600 transition-colors`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-full transition-colors">
                Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen (!isMenuOpen)}
            >
              {isMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
            {['Home', 'Services', 'About', 'Contact'].map (item => (
              <a
                key={item}
                href={`#${item.toLowerCase ()}`}
                className="block px-6 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen (false)}
              >
                {item}
              </a>
            ))}
          </div>}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source
              src="https://player.vimeo.com/external/451837014.sd.mp4?s=7a7e37b5b7723e3a3112c0084d7d36d0c58e5a18&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Modern Solutions for
              <span className="text-gradient block">Legal Excellence</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Navigating complex legal challenges with innovative strategies
              and unwavering dedication to your success.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {number: '25+', label: 'Years Experience'},
              {number: '1000+', label: 'Cases Won'},
              {number: '98%', label: 'Success Rate'},
              {number: '50+', label: 'Legal Experts'},
            ].map ((stat, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:transform hover:scale-105 transition-all"
              >
                <h3 className="text-4xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Legal Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-12 h-12 text-amber-600" />,
                title: 'Corporate Law',
                description: 'Strategic legal counsel for businesses of all sizes',
              },
              {
                icon: <Users className="w-12 h-12 text-amber-600" />,
                title: 'Family Law',
                description: 'Compassionate support for family-related matters',
              },
              {
                icon: <Shield className="w-12 h-12 text-amber-600" />,
                title: 'Civil Litigation',
                description: 'Powerful advocacy in complex disputes',
              },
              {
                icon: <Award className="w-12 h-12 text-amber-600" />,
                title: 'Intellectual Property',
                description: 'Protection for your innovative ideas',
              },
              {
                icon: <BookOpen className="w-12 h-12 text-amber-600" />,
                title: 'Estate Planning',
                description: 'Secure your legacy for future generations',
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-amber-600" />,
                title: 'Legal Consultation',
                description: 'Expert advice on your legal matters',
              },
            ].map ((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="text-amber-600 font-semibold flex items-center group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Scale className="w-full h-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Discuss Your Case?
            </h2>
            <p className="text-gray-300 mb-8">
              Schedule a free consultation with our expert legal team today
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:transform hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Our team is ready to provide the legal expertise you need
              </p>
              <div className="space-y-6">
                {[
                  {icon: <Phone />, text: '(555) 123-4567'},
                  {icon: <Mail />, text: 'contact@lexicon.law'},
                  {
                    icon: <MapPin />,
                    text: '123 Legal Avenue, New York, NY 10001',
                  },
                  {icon: <Clock />, text: 'Monday - Friday: 9:00 AM - 6:00 PM'},
                ].map ((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      {item.icon}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your Message"
                  />
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Scale className="w-8 h-8 text-amber-600" />
                <span className="text-white font-bold text-xl">LEXICON</span>
              </div>
              <p className="text-sm">
                Providing exceptional legal services with integrity and dedication.
              </p>
            </div>

            {['Services', 'Company', 'Support'].map ((title, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map (item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-amber-500 transition-colors"
                      >
                        {title} Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p>© 2024 Lexicon Law Firm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
