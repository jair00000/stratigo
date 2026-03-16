import React from 'react';
import { websitePatterns, WebsitePatternId } from '../../data/layout-patterns';
import WebsitePatternSelector from './WebsitePatternSelector';

function Thumb({ id }: { id: WebsitePatternId }) {
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

export default function MultiPatternSelector({
  patterns,
  onChange
}: {
  patterns: WebsitePatternId[];
  onChange: (patterns: WebsitePatternId[]) => void;
}) {
  const toggle = (id: WebsitePatternId) => {
    if (patterns.includes(id)) {
      onChange(patterns.filter(p => p !== id));
    } else {
      if (patterns.length >= 5) return; // cap at 5
      onChange([...patterns, id]);
    }
  };

  const move = (index: number, direction: -1 | 1) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= patterns.length) return;
    const newPatterns = [...patterns];
    [newPatterns[index], newPatterns[newIndex]] = [newPatterns[newIndex], newPatterns[index]];
    onChange(newPatterns);
  };

  const remove = (index: number) => {
    onChange(patterns.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* Pattern Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {websitePatterns.map((p) => {
          const isSelected = patterns.includes(p.id);
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              className={`rounded-xl border p-2 text-left transition ${
                isSelected
                  ? 'border-blue-400 bg-white/10 shadow-md shadow-blue-600/30 ring-1 ring-blue-600/50'
                  : patterns.length >= 5
                  ? 'border-white/5 bg-white/5 opacity-40 cursor-not-allowed'
                  : 'border-white/10 bg-white/5 hover:bg-white/10'
              }`}
              disabled={!isSelected && patterns.length >= 5}
              title={isSelected ? 'Click to remove' : patterns.length >= 5 ? 'Maximum 5 layouts' : 'Click to add'}
            >
              <Thumb id={p.id} />
              <div className={`mt-2 text-xs flex items-center justify-between ${
                isSelected ? 'text-white' : 'text-white/80'
              }`}>
                <span>{p.label}</span>
                {isSelected && <span className="text-blue-400">✓</span>}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Patterns Order List */}
      {patterns.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-xs text-white/70">
              Order (top to bottom) • {patterns.length}/5
            </div>
            <button
              onClick={() => onChange([])}
              className="text-xs px-2 py-1 rounded border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 transition"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2 max-h-[200px] overflow-y-auto pr-1">
            {patterns.map((id, index) => {
              const pattern = websitePatterns.find(p => p.id === id);
              return (
                <div
                  key={`${id}-${index}`}
                  className="flex items-center justify-between px-3 py-2 rounded-lg border border-white/10 bg-white/5 text-sm"
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-xs text-white/50 w-5">{index + 1}.</span>
                    <Thumb id={id} />
                    <span className="text-white/90 truncate ml-2">{pattern?.label || id}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => move(index, -1)}
                      disabled={index === 0}
                      className="px-2 py-1 rounded border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs text-white/70 transition"
                      title="Move up"
                    >
                      ↑
                    </button>
                    <button
                      onClick={() => move(index, 1)}
                      disabled={index === patterns.length - 1}
                      className="px-2 py-1 rounded border border-white/10 bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed text-xs text-white/70 transition"
                      title="Move down"
                    >
                      ↓
                    </button>
                    <button
                      onClick={() => remove(index)}
                      className="px-2 py-1 rounded border border-white/10 bg-white/5 hover:bg-red-500/20 hover:border-red-500/30 text-xs text-white/70 transition"
                      title="Remove"
                    >
                      ×
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {patterns.length < 3 && (
            <div className="mt-2 text-xs text-yellow-400/80">
              💡 Pick 3-5 layouts for best results
            </div>
          )}
        </div>
      )}
    </div>
  );
}
