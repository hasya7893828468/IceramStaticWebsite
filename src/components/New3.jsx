import React, {useState, useEffect, useRef} from 'react';
import {
  Scale,
  Shield,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ArrowRight,
  Award,
  BookOpen,
  Building,
  MessageSquare,
  Briefcase,
  BarChart,
  Globe,
  Target,
  Check,
  ChevronRight,
  Star,
  FileText,
  Calendar,
} from 'lucide-react';

function New3 () {
  const [isMenuOpen, setIsMenuOpen] = useState (false);
  const [isScrolled, setIsScrolled] = useState (false);
  const [activeTab, setActiveTab] = useState ('all');
  const [currentSlide, setCurrentSlide] = useState (0);
  const [isVideoLoaded, setIsVideoLoaded] = useState (false);
  const videoRef = useRef (HTMLVideoElement > null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Innovations',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: "The legal expertise provided by this firm has been instrumental in our company's growth.",
    },
    {
      name: 'Michael Chen',
      role: 'Founder, StartUp Co',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'Their innovative approach to legal challenges sets them apart from traditional law firms.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Global Corp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      text: 'Exceptional service and attention to detail in handling our international legal matters.',
    },
  ];

  const practiceAreas = [
    {
      icon: <Building className="w-12 h-12" />,
      title: 'Corporate Law',
      description: 'Strategic counsel for businesses',
      category: 'business',
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'International Law',
      description: 'Global legal solutions',
      category: 'international',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Intellectual Property',
      description: 'Protect your innovations',
      category: 'ip',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Employment Law',
      description: 'Workplace legal matters',
      category: 'employment',
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Mergers & Acquisitions',
      description: 'Strategic business combinations',
      category: 'business',
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Securities Law',
      description: 'Financial markets compliance',
      category: 'finance',
    },
  ];

  useEffect (() => {
    const handleScroll = () => {
      setIsScrolled (window.scrollY > 50);
    };
    window.addEventListener ('scroll', handleScroll);
    return () => window.removeEventListener ('scroll', handleScroll);
  }, []);

  useEffect (() => {
    const interval = setInterval (() => {
      setCurrentSlide (prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval (interval);
  }, []);

  useEffect (() => {
    if (videoRef.current) {
      videoRef.current.play ().catch (() => {
        console.log ('Video autoplay failed');
      });
    }
  }, []);

  const filteredPracticeAreas = activeTab === 'all'
    ? practiceAreas
    : practiceAreas.filter (area => area.category === activeTab);

  return (
    <div className="min-h-screen bg-white custom-scrollbar">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Scale
                className={`w-8 h-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`}
              />
              <span
                className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                NOVA LAW
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {[
                'Home',
                'Practice Areas',
                'Team',
                'Resources',
                'Contact',
              ].map (item => (
                <a
                  key={item}
                  href={`#${item.toLowerCase ().replace (' ', '-')}`}
                  className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 transition-colors text-sm font-medium`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105">
                Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
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
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
            {[
              'Home',
              'Practice Areas',
              'Team',
              'Resources',
              'Contact',
            ].map (item => (
              <a
                key={item}
                href={`#${item.toLowerCase ().replace (' ', '-')}`}
                className="block px-6 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen (false)}
              >
                {item}
              </a>
            ))}
            <div className="px-6 py-3">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors">
                Free Consultation
              </button>
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center clip-path-slant">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setIsVideoLoaded (true)}
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          >
            <source
              src="https://player.vimeo.com/external/451837014.sd.mp4?s=7a7e37b5b7723e3a3112c0084d7d36d0c58e5a18&profile_id=164&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        </div>

        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <div className="animate-slide-in">
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight text-shadow">
                Legal
                <span className="text-gradient block">Innovation</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Pioneering legal solutions for the digital age. We combine centuries
                of legal expertise with cutting-edge innovation to deliver
                exceptional results.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 flex items-center">
                  Schedule Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all flex items-center">
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {number: '98%', label: 'Success Rate'},
                {number: '500+', label: 'Cases Won'},
                {number: '50+', label: 'Expert Attorneys'},
                {number: '25+', label: 'Years Experience'},
              ].map ((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-xl card-hover animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Practice Areas Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Practice Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized legal expertise across multiple disciplines
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                'all',
                'business',
                'international',
                'ip',
                'employment',
                'finance',
              ].map (tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab (tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {tab.charAt (0).toUpperCase () + tab.slice (1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredPracticeAreas.map ((area, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="mb-6 text-blue-600 transform group-hover:scale-110 transition-transform">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6">{area.description}</p>
                <button className="text-blue-600 font-semibold flex items-center group">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Nova Law?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Innovative Approach',
                    description: 'Combining traditional legal expertise with modern solutions',
                  },
                  {
                    title: 'Global Reach',
                    description: 'International network of legal professionals and resources',
                  },
                  {
                    title: 'Client-Centric Focus',
                    description: 'Tailored strategies aligned with your objectives',
                  },
                  {
                    title: 'Technology Integration',
                    description: 'Leveraging advanced legal tech for optimal results',
                  },
                ].map ((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-500 rounded-full p-2">
                      <Check className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-blue-100">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Modern office"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Star className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold text-xl">4.9/5.0</p>
                    <p className="text-gray-600">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read what our clients say about their experience working with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map ((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${currentSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute top-0 left-0'}`}
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-xl">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map ((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide (index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Legal Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest legal insights and publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8" />,
                title: 'Legal Guides',
                description: 'Comprehensive guides on various legal topics',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Webinars',
                description: 'Regular online sessions with legal experts',
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: 'Case Studies',
                description: 'Real-world examples of our successful cases',
              },
            ].map ((resource, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-6">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <button className="text-blue-600 font-semibold flex items-center group">
                  Access Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-blue-100 mb-8">
                Schedule a consultation with our expert legal team
              </p>
              <div className="space-y-6">
                {[
                  {icon: <Phone />, text: '(555) 123-4567'},
                  {icon: <Mail />, text: 'contact@novalaw.com'},
                  {
                    icon: <MapPin />,
                    text: '123 Innovation Ave, New York, NY 10001',
                  },
                  {icon: <Clock />, text: 'Monday - Friday: 9:00 AM - 6:00 PM'},
                ].map ((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="bg-white p-8 rounded-xl shadow-2xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Practice Area
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select Practice Area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="employment">Employment Law</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Message"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
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
                <Scale className="w-8 h-8 text-blue-600" />
                <span className="text-white font-bold text-xl">NOVA LAW</span>
              </div>
              <p className="text-sm">
                Pioneering legal solutions for the modern world.
              </p>
            </div>

            {['Practice Areas', 'Company', 'Resources'].map ((title, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">{title}</h3>
                <ul className="space-y-2">
                  {[1, 2, 3, 4].map (item => (
                    <li key={item}>
                      <a
                        href="#"
                        className="hover:text-blue-500 transition-colors"
                      >
                        {title} Link {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2024 Nova Law. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default New3;
