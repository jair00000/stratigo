import React from 'react';

const palettes = [
  { name: 'Blue', colors: ['#2563EB', '#1D4ED8', '#0B3B91'] },
  { name: 'Purple', colors: ['#8B5CF6', '#7C3AED', '#4C1D95'] },
  { name: 'Green', colors: ['#10B981', '#059669', '#065F46'] },
  { name: 'Orange', colors: ['#F59E0B', '#D97706', '#92400E'] },
  { name: 'Red', colors: ['#EF4444', '#DC2626', '#7F1D1D'] },
  { name: 'Teal', colors: ['#14B8A6', '#0D9488', '#115E59'] }
];

export function PaletteSelector({
  value,
  onChange
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {palettes.map((p) => {
        const active = p.name.toLowerCase() === value.toLowerCase();
        return (
          <button
            key={p.name}
            onClick={() => onChange(p.name)}
            className={`rounded-xl p-3 border transition text-left ${
              active
                ? 'border-blue-400 bg-white/10'
                : 'border-white/10 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className="mb-2 flex gap-1">
              {p.colors.map((c) => (
                <div
                  key={c}
                  className="h-4 w-4 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className={`text-sm ${active ? 'text-white' : 'text-white/70'}`}>
              {p.name}
            </div>
          </button>
        );
      })}
      <button
        onClick={() => onChange('Custom')}
        className="rounded-xl p-3 border border-dashed border-white/20 text-white/70 hover:bg-white/5"
      >
        + Custom…
      </button>
    </div>
  );
}

