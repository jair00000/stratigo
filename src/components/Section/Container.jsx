import React from 'react';

const Container = ({ 
  children, 
  variant = 'default', 
  className = '', 
  ...props 
}) => {
  const variants = {
    default: 'max-w-7xl mx-auto',
    center: 'container-center max-w-7xl mx-auto',
    narrow: 'max-w-4xl mx-auto',
    wide: 'max-w-none mx-auto px-4 sm:px-6 lg:px-8',
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
