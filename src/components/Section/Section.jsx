import React from 'react';

const Section = ({ 
  children, 
  variant = 'content', 
  className = '', 
  id,
  ...props 
}) => {
  const variants = {
    hero: 'section-hero',
    content: 'section-content',
    navy: 'w-full bg-navy py-20 px-4 sm:px-6 lg:px-8',
    bg: 'w-full bg-bg py-20 px-4 sm:px-6 lg:px-8',
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <section
      id={id}
      className={classes}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
