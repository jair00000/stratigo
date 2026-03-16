import React from 'react';

const SectionSelector = ({ value, onChange, artifact }) => {
  const sectionsByArtifact = {
    website: [
      { id: 'Hero', label: 'Hero' },
      { id: 'About', label: 'About' },
      { id: 'Services', label: 'Services' },
      { id: 'Features', label: 'Features' },
      { id: 'Testimonials', label: 'Testimonials' },
      { id: 'Contact', label: 'Contact' },
      { id: 'Pricing', label: 'Pricing' },
      { id: 'Blog', label: 'Blog' }
    ],
    mobileApp: [
      { id: 'Splash', label: 'Splash' },
      { id: 'Onboarding', label: 'Onboarding' },
      { id: 'Login', label: 'Login' },
      { id: 'Home', label: 'Home' },
      { id: 'Feed', label: 'Feed' },
      { id: 'Product', label: 'Product' },
      { id: 'Cart', label: 'Cart' },
      { id: 'Profile', label: 'Profile' },
      { id: 'Settings', label: 'Settings' }
    ],
    crm: [
      { id: 'Overview', label: 'Overview' },
      { id: 'Sales', label: 'Sales' },
      { id: 'Contacts', label: 'Contacts' },
      { id: 'Tickets', label: 'Tickets' },
      { id: 'Analytics', label: 'Analytics' },
      { id: 'Settings', label: 'Settings' }
    ]
  };

  const sections = sectionsByArtifact[artifact] || sectionsByArtifact.website;

  return (
    <div className="grid grid-cols-2 gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onChange(section.id)}
          className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
            value === section.id
              ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-md shadow-[#2563EB]/30 ring-1 ring-[#2563EB]/50'
              : 'bg-white/5 border-white/8 text-white/60 hover:bg-white/8 hover:text-white/80 hover:border-white/12'
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
};

export default SectionSelector;

