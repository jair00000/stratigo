import React from 'react';

export default function LayoutPatternTile({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group rounded-xl border p-2 text-left transition ${
        active
          ? 'border-blue-400 bg-white/10 shadow-md shadow-blue-600/30 ring-1 ring-blue-600/50'
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}
    >
      <div className="aspect-video rounded-lg bg-white/5 relative overflow-hidden">
        <div className="absolute inset-x-2 top-2 h-2 rounded bg-white/10" />
        <div className="absolute left-2 right-2 bottom-2 grid grid-cols-3 gap-1 opacity-80">
          <div className="rounded bg-white/10 h-8" />
          <div className="rounded bg-white/10 h-8" />
          <div className="rounded bg-white/10 h-8" />
        </div>
      </div>
      <div className={`mt-2 text-xs ${active ? 'text-white' : 'text-white/80'}`}>{label}</div>
    </button>
  );
}

