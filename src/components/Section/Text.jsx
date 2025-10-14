import React from 'react';

const Text = ({ 
  children, 
  variant = 'body', 
  className = '', 
  as: Component = 'p',
  ...props 
}) => {
  const variants = {
    hero: 'text-hero',
    body: 'text-body',
    small: 'text-sm text-text-secondary',
    large: 'text-lg text-text-secondary',
  };
  
  const classes = `${variants[variant]} ${className}`;
  
  return (
    <Component
      className={classes}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
