import React, { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Auto-redirect to home after 5 seconds if user doesn't interact
    const timer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Check if this is likely a direct page reload/access
  const isDirectAccess = !document.referrer || document.referrer.includes(window.location.origin);

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-electric mb-4">404</div>
          <div className="w-24 h-1 bg-electric mx-auto rounded"></div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          {isDirectAccess ? "Welcome to Stratigo!" : "Page Not Found"}
        </h1>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          {isDirectAccess 
            ? "It looks like you've accessed this page directly. Let's get you to our homepage where you can explore our services."
            : "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
          }
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block w-full bg-electric hover:bg-electric-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Go to Homepage
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/services"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 backdrop-blur-sm"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Auto-redirect notice */}
        <div className="mt-8 text-sm text-gray-400">
          <p>You'll be automatically redirected to the homepage in a few seconds...</p>
        </div>

        {/* Helpful Links */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <p className="text-gray-400 text-sm mb-3">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/about" className="text-electric hover:text-electric-light text-sm transition-colors">About</Link>
            <span className="text-gray-500">•</span>
            <Link to="/projects" className="text-electric hover:text-electric-light text-sm transition-colors">Projects</Link>
            <span className="text-gray-500">•</span>
            <Link to="/faq" className="text-electric hover:text-electric-light text-sm transition-colors">FAQ</Link>
            <span className="text-gray-500">•</span>
            <Link to="/support" className="text-electric hover:text-electric-light text-sm transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
