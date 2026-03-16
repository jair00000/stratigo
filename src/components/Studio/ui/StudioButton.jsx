import React from 'react';

const StudioButton = ({ children, variant = 'primary', onClick, className = '', disabled = false }) => {
  const baseClasses = 'px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md hover:shadow-lg hover:shadow-[#2563EB]/30',
    secondary: 'bg-white/8 hover:bg-white/15 text-white/90 border border-white/15 hover:border-white/25',
    outline: 'bg-transparent hover:bg-white/5 text-white/80 border border-white/15 hover:border-white/25'
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default StudioButton;

