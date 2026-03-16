import React from 'react';
import { websitePatterns, WebsitePatternId } from '../../data/layout-patterns';

function Thumb({ id }: { id: WebsitePatternId }) {
  // tiny wireframes per id
  const box = 'bg-white/10 rounded';
  switch (id) {
    case 'twoColumn':
      return (
        <div className="aspect-video p-2 grid grid-cols-2 gap-2">
          <div className={box} />
          <div className="flex flex-col gap-2">
            <div className={`${box} h-2`} />
            <div className={`${box} h-2`} />
            <div className={`${box} h-2`} />
          </div>
        </div>
      );
    case 'splitScreen':
      return (
        <div className="aspect-video grid grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="m-1 rounded bg-white/10" />
          ))}
        </div>
      );
    case 'asymmetrical':
      return (
        <div className="aspect-video p-2 grid grid-cols-3 gap-2">
          <div className={`${box} col-span-2`} />
          <div className="flex flex-col gap-2">
            <div className={`${box} h-2`} />
            <div className={`${box} h-2`} />
            <div className={`${box} h-3`} />
          </div>
        </div>
      );
    case 'fShape':
      return (
        <div className="aspect-video p-2 space-y-1">
          <div className={`${box} h-2 w-5/6`} />
          <div className={`${box} h-2 w-full`} />
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className={`${box} h-6`} />
            <div className={`${box} h-6`} />
            <div className={`${box} h-6`} />
          </div>
        </div>
      );
    case 'zShape':
      return (
        <div className="aspect-video p-2">
          <div className={`${box} h-2 w-2/3 mb-1`} />
          <div className="grid grid-cols-3 gap-2 h-6">
            <div className={box} />
            <div className={box} />
            <div className={box} />
          </div>
          <div className="flex justify-end">
            <div className={`${box} h-2 w-1/3 mt-1`} />
          </div>
        </div>
      );
    case 'cardBlock':
      return (
        <div className="aspect-video grid grid-cols-3 gap-2 p-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`${box} h-6`} />
          ))}
        </div>
      );
    case 'featuredMedia':
      return (
        <div className="aspect-video p-2">
          <div className={`${box} h-8 mb-2`} />
          <div className="flex gap-2">
            <div className={`${box} h-2 w-1/4`} />
            <div className={`${box} h-2 w-1/6`} />
          </div>
        </div>
      );
    case 'masonry':
      return (
        <div className="aspect-video p-2 grid grid-cols-3 gap-2 items-end">
          <div className={`${box} h-4`} />
          <div className={`${box} h-6`} />
          <div className={`${box} h-8`} />
        </div>
      );
    case 'magazine':
      return (
        <div className="aspect-video p-2 grid grid-cols-3 gap-2">
          <div className={`${box} col-span-2`} />
          <div className="space-y-1">
            <div className={`${box} h-2`} />
            <div className={`${box} h-2`} />
            <div className={`${box} h-2`} />
          </div>
        </div>
      );
    case 'fixedNav':
      return (
        <div className="aspect-video p-2">
          <div className="h-2 bg-white/15 rounded mb-1" />
          <div className={box + ' h-8'} />
        </div>
      );
    case 'hiddenNav':
      return (
        <div className="aspect-video p-2">
          <div className="h-1.5 w-8 bg-white/15 rounded mb-1" />
          <div className={box + ' h-8'} />
        </div>
      );
    case 'interactiveCarousel':
      return (
        <div className="aspect-video p-2">
          <div className={`${box} h-8 mb-1`} />
          <div className="flex gap-1 justify-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-white/15" />
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function WebsitePatternSelector({
  value,
  onChange
}: {
  value: WebsitePatternId;
  onChange: (v: WebsitePatternId) => void;
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {websitePatterns.map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`rounded-xl border p-2 text-left transition ${
            value === p.id
              ? 'border-blue-400 bg-white/10 shadow-md shadow-blue-600/30 ring-1 ring-blue-600/50'
              : 'border-white/10 bg-white/5 hover:bg-white/10'
          }`}
        >
          <Thumb id={p.id} />
          <div className={`mt-2 text-xs ${value === p.id ? 'text-white' : 'text-white/80'}`}>
            {p.label}
          </div>
        </button>
      ))}
    </div>
  );
}
