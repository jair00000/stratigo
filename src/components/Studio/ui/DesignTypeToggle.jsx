import React from 'react';

const ArtifactToggle = ({ value, onChange }) => {
  const options = [
    { 
      id: 'website', 
      label: 'Website', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    { 
      id: 'mobileApp', 
      label: 'Mobile App', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      id: 'crm', 
      label: 'CRM Dashboard', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="flex gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`flex-1 flex flex-col items-center justify-center gap-2 px-3 py-2.5 rounded-lg border transition-all duration-200 ${
            value === option.id
              ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-md shadow-[#2563EB]/30 ring-1 ring-[#2563EB]/50'
              : 'bg-white/5 border-white/8 text-white/60 hover:bg-white/8 hover:text-white/80 hover:border-white/12'
          }`}
        >
          <span className="flex items-center justify-center">
            {option.icon}
          </span>
          <span className="text-xs font-semibold">{option.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ArtifactToggle;

