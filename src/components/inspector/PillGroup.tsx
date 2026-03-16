import React from 'react';

export function PillGroup({
  value,
  onChange,
  options
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            onClick={() => onChange(o)}
            aria-selected={active}
            className={`px-3 py-1.5 rounded-lg text-sm border transition ${
              active
                ? 'bg-blue-600 border-blue-400 text-white'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

