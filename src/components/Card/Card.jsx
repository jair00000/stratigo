import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = 'transition-all duration-300';
  
  const variants = {
    default: 'card',
    feature: 'card-feature',
    interactive: 'card cursor-pointer hover:scale-105',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${className}`;
  
  const Component = onClick ? 'button' : 'div';
  
  return (
    <Component
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
