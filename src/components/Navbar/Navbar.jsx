import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StratigoLogo from '../../assets/logos/stratigo-logo.svg';
import { SearchBar } from '../Search';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <>
      <nav className="bg-navy text-white p-4 shadow-lg w-full relative z-40">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3 text-xl font-bold text-white hover:text-electric-light transition-colors">
              <img 
                src={StratigoLogo} 
                alt="Stratigo Logo" 
                className="h-12 w-auto"
              />
              <span>Stratigo</span>
            </Link>
            
            {/* Center Search Bar - Desktop */}
            <div className="flex-1 max-w-md mx-8">
              <SearchBar />
            </div>

            {/* Desktop Navigation */}
            <div className="flex space-x-6 items-center">
              <Link to="/" className="text-white hover:text-electric-light transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-electric-light transition-colors">About</Link>
              
              {/* Services Dropdown - Desktop */}
              <div 
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span className="text-white hover:text-electric-light transition-colors cursor-pointer">
                  Services
                </span>
                <div className={`absolute top-full left-0 mt-2 bg-navy border border-gray-700 shadow-2xl rounded-md overflow-hidden w-[250px] z-50 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <Link 
                    to="/services/marketing" 
                    className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200 whitespace-nowrap"
                  >
                    Marketing Solutions
                  </Link>
                  <Link 
                    to="/services/software-development" 
                    className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200 whitespace-nowrap"
                  >
                    Software Solutions
                  </Link>
                  <Link 
                    to="/services/hosting" 
                    className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200 whitespace-nowrap"
                  >
                    Hosting Solutions
                  </Link>
                </div>
              </div>

              <Link to="/projects" className="text-white hover:text-electric-light transition-colors">Projects</Link>
              <Link to="/contact" className="text-white hover:text-electric-light transition-colors">Contact</Link>
              <Link to="/login" className="bg-electric hover:bg-electric-dark text-white px-4 py-2 rounded-lg font-semibold transition-colors">Login</Link>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex justify-between items-center">
            {/* Mobile Logo */}
            <Link to="/" className="flex items-center space-x-2 text-lg font-bold text-white hover:text-electric-light transition-colors" onClick={closeMobileMenu}>
              <img 
                src={StratigoLogo} 
                alt="Stratigo Logo" 
                className="h-8 w-auto"
              />
              <span>Stratigo</span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="flex flex-col items-center justify-center w-8 h-8 space-y-1 focus:outline-none focus:ring-2 focus:ring-electric-light rounded bg-transparent hover:bg-transparent"
              aria-label="Toggle mobile menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-navy shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <img 
                src={StratigoLogo} 
                alt="Stratigo Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-white">Stratigo</span>
            </div>
            <button
              onClick={closeMobileMenu}
              className="flex items-center justify-center text-white hover:text-electric-light transition-colors bg-transparent hover:bg-transparent"
              aria-label="Close mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Search Bar */}
          <div className="p-6 border-b border-gray-700">
            <div className="w-full">
              <SearchBar />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="py-6 pb-32 overflow-y-auto flex-1">
            <nav className="space-y-2">
              <Link
                to="/"
                className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200"
                onClick={closeMobileMenu}
              >
                About
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="px-6">
                <button
                  onClick={toggleMobileServices}
                  className="flex items-center justify-between w-full py-3 text-white hover:text-electric-light transition-colors"
                >
                  <span>Services</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Services Submenu */}
                <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-1">
                    <Link
                      to="/services/marketing"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded"
                      onClick={closeMobileMenu}
                    >
                      Marketing Solutions
                    </Link>
                    <Link
                      to="/services/software-development"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded"
                      onClick={closeMobileMenu}
                    >
                      Software Solutions
                    </Link>
                    <Link
                      to="/services/hosting"
                      className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded"
                      onClick={closeMobileMenu}
                    >
                      Hosting Solutions
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/projects"
                className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              
              <Link
                to="/login"
                className="block px-6 py-3 bg-electric hover:bg-electric-dark text-white font-semibold transition-all duration-200 mx-6 rounded-lg text-center"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </nav>
          </div>

          {/* Mobile Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-gray-700">
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Get in touch</p>
              <Link
                to="/contact"
                className="block px-6 py-3 bg-electric hover:bg-electric-dark text-white font-semibold transition-all duration-200 mx-6 rounded-lg text-center"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
