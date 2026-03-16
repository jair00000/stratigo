import React from 'react';

const StyleSelector = ({ value, onChange }) => {
  const styles = [
    { id: 'modern', label: 'Modern' },
    { id: 'minimal', label: 'Minimal' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'dark', label: 'Dark' },
    { id: 'light', label: 'Light' }
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {styles.map((style) => (
        <button
          key={style.id}
          onClick={() => onChange(style.id)}
          className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
            value === style.id
              ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-md shadow-[#2563EB]/30 ring-1 ring-[#2563EB]/50'
              : 'bg-white/5 border-white/8 text-white/60 hover:bg-white/8 hover:text-white/80 hover:border-white/12'
          }`}
        >
          {style.label}
        </button>
      ))}
    </div>
  );
};

export default StyleSelector;

