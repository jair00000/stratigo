import React from 'react';
import Card from './Card';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  iconColor = 'electric',
  className = '',
  button = null
}) => {
  const iconClasses = {
    electric: 'icon-circle-electric',
    orange: 'icon-circle-orange',
    coral: 'icon-circle-coral',
  };
  
  return (
    <Card variant="feature" className={className}>
      <CardHeader>
        <div className={iconClasses[iconColor]}>
          {icon}
        </div>
      </CardHeader>
      <CardBody>
        <h3 className="heading-card text-center">{title}</h3>
        <p className="text-body text-center">{description}</p>
        {button && (
          <div className="mt-4 flex justify-center">
            {button}
          </div>
        )}
      </CardBody>
    </Card>
  );
};

export default FeatureCard;
