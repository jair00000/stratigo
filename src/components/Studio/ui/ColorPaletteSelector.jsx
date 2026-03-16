import React from 'react';

const ColorPaletteSelector = ({ value, onChange }) => {
  const palettes = [
    { id: 'blue', name: 'Blue', colors: ['#2563EB', '#1E40AF', '#1E3A8A'] },
    { id: 'purple', name: 'Purple', colors: ['#7C3AED', '#6D28D9', '#5B21B6'] },
    { id: 'green', name: 'Green', colors: ['#10B981', '#059669', '#047857'] },
    { id: 'orange', name: 'Orange', colors: ['#F59E0B', '#D97706', '#B45309'] },
    { id: 'red', name: 'Red', colors: ['#EF4444', '#DC2626', '#B91C1C'] },
    { id: 'teal', name: 'Teal', colors: ['#14B8A6', '#0D9488', '#0F766E'] }
  ];

  return (
    <div className="grid grid-cols-3 gap-2.5">
      {palettes.map((palette) => (
        <button
          key={palette.id}
          onClick={() => onChange(palette.id)}
          className={`relative p-2.5 rounded-lg border transition-all duration-200 ${
            value === palette.id
              ? 'border-[#2563EB] ring-1 ring-[#2563EB]/50 bg-white/5 shadow-md shadow-[#2563EB]/20'
              : 'border-white/8 bg-white/5 hover:bg-white/8 hover:border-white/12'
          }`}
        >
          <div className="flex gap-1 justify-center mb-2">
            {palette.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-5 h-5 rounded-full border border-white/20 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className={`text-xs font-medium block text-center ${
            value === palette.id ? 'text-white' : 'text-white/60'
          }`}>
            {palette.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ColorPaletteSelector;

