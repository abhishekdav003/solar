import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sun } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar - Contact & Scheme Info */}
      <div className="bg-gradient-to-r hidden sm:flex flex from-blue-900 to-blue-800 text-white py-2 px-4 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto hidden sm:flex flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1.5 hover:text-orange-300 transition-colors duration-200"
              aria-label="Call us"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">+91 9917010055</span>
            </a>
            <a
              href="mailto:info@akashpower.com"
              className="flex items-center gap-1.5 hover:text-orange-300 transition-colors duration-200"
              aria-label="Email us"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">akashpower980@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 bg-orange-500/20 px-3 py-1 rounded-full">
            <Sun className="w-4 h-4 text-orange-400" />
            <span className="font-bold text-orange-300">PM Surya Ghar Yojana</span>
            <span className="hidden sm:inline">– Authorized Partner</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-lg'
            : 'bg-white shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">

            {/* Logo + Brand - Larger Logo, No Extra Div */}
            <div
              onClick={scrollToTop}
              className="flex items-center gap-4 cursor-pointer group"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
              aria-label="Go to homepage"
            >
              {/* Larger Logo with Gradient Border & Hover Effects */}
              <div className="relative overflow-hidden    transition-all duration-300">
                <div className=" rounded-xl p-2">
                  <img
                    src={`${import.meta.env.BASE_URL}logo.jpg`}
                    alt="Akash Power Solutions Logo"
                    className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain rounded-lg group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                </div>
              </div>

              {/* Brand Text - Hidden on Mobile */}
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
                  Akash Power Solutions
                </h1>
                <p className="text-sm text-orange-600 font-semibold tracking-wider">
                  Solar Energy Excellence
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {['home', 'about', 'services', 'partners', 'contact'].map((section) => {
                const labels = {
                  home: 'Home',
                  about: 'About Us',
                  services: 'Services',
                  partners: 'Partners',
                  contact: 'Contact Us'
                };
                const isCTA = section === 'contact';

                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm md:text-base ${
                      isCTA
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg hover:from-orange-600 hover:to-orange-700'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {labels[section]}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7 text-gray-700" />
              ) : (
                <Menu className="w-7 h-7 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
            <nav className="px-4 py-4 space-y-1">
              {['home', 'about', 'services', 'partners', 'contact'].map((section) => {
                const labels = {
                  home: 'Home',
                  about: 'About Us',
                  services: 'Services',
                  partners: 'Partners',
                  contact: 'Contact Us'
                };
                const isCTA = section === 'contact';

                return (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`w-full text-left px-5 py-3.5 rounded-lg font-medium transition-all duration-200 text-base ${
                      isCTA
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {labels[section]}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}