import React from 'react';

const Heading = ({ 
  children, 
  level = 1, 
  variant = 'section', 
  className = '', 
  ...props 
}) => {
  const variants = {
    hero: 'heading-hero',
    section: 'heading-section',
    card: 'heading-card',
  };
  
  const classes = `${variants[variant]} ${className}`;
  const Tag = `h${level}`;
  
  return (
    <Tag
      className={classes}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
