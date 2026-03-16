import React from 'react';

export function SegmentedControl<T extends string>({
  value,
  onChange,
  options
}: {
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string; icon?: React.ReactNode }[];
}) {
  return (
    <div className="flex items-center gap-1.5">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            aria-pressed={active}
            className={`px-3 py-2 text-sm rounded-lg border transition ${
              active
                ? 'bg-blue-600 border-blue-500/50 text-white'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
            }`}
          >
            <span className="inline-flex items-center gap-2">
              {o.icon}
              {o.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

