import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StratigoLogo from '../../assets/logos/stratigologo1.png';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-navy text-white p-4 shadow-lg w-full relative z-40">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 text-xl font-bold text-white hover:text-electric-light transition-colors">
          <img 
            src={StratigoLogo} 
            alt="Stratigo Logo" 
            className="h-12 w-auto"
          />
          <span>Stratigo</span>
        </Link>
        <div className="flex space-x-6 items-center">
          <Link to="/" className="text-white hover:text-electric-light transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-electric-light transition-colors">About</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="text-white hover:text-electric-light transition-colors cursor-pointer">
              Services
            </span>
            <div className={`absolute top-full left-0 mt-2 bg-navy border border-gray-700 shadow-2xl rounded-md overflow-hidden w-[220px] z-50 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <Link 
                to="/services/marketing" 
                className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200 whitespace-nowrap"
              >
                Marketing
              </Link>
              <Link 
                to="/services/software-development" 
                className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200 whitespace-nowrap"
              >
                Software Development
              </Link>
              <Link 
                to="/services/hosting" 
                className="block px-6 py-3 text-white hover:bg-electric-light hover:text-navy transition-all duration-200 whitespace-nowrap"
              >
                Hosting
              </Link>
            </div>
          </div>

          <Link to="/projects" className="text-white hover:text-electric-light transition-colors">Projects</Link>
          <Link to="/contact" className="text-white hover:text-electric-light transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
