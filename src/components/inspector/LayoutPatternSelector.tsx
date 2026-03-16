import React from 'react';

type PatternId =
  | 'twoColumn' | 'splitScreen' | 'asymmetrical' | 'fShape' | 'zShape' | 'cardBlock' | 'featuredMedia' | 'masonry' | 'magazine' | 'fixedNav' | 'hiddenNav' | 'interactiveCarousel'
  | 'onboarding' | 'login' | 'listFeed' | 'grid' | 'productDetail' | 'filtersSort' | 'tabs'
  | 'kpiDashboard' | 'sidebarTable' | 'kanban' | 'analytics' | 'directory';

type Artifact = 'website' | 'mobileApp' | 'crm';

const patternsByArtifact: Record<Artifact, { id: PatternId; label: string }[]> = {
  website: [
    { id: 'twoColumn', label: 'Two Column' },
    { id: 'splitScreen', label: 'Split Screen' },
    { id: 'asymmetrical', label: 'Asymmetrical' },
    { id: 'fShape', label: 'F-Shape' },
    { id: 'zShape', label: 'Z-Shape' },
    { id: 'cardBlock', label: 'Card Block' },
    { id: 'featuredMedia', label: 'Featured Media' },
    { id: 'masonry', label: 'Masonry' },
    { id: 'magazine', label: 'Magazine' },
    { id: 'fixedNav', label: 'Fixed Nav' },
    { id: 'hiddenNav', label: 'Hidden Nav' },
    { id: 'interactiveCarousel', label: 'Carousel' }
  ],
  mobileApp: [
    { id: 'onboarding', label: 'Onboarding' },
    { id: 'login', label: 'Login' },
    { id: 'listFeed', label: 'List Feed' },
    { id: 'grid', label: 'Grid' },
    { id: 'productDetail', label: 'Product Detail' },
    { id: 'filtersSort', label: 'Filters & Sort' },
    { id: 'tabs', label: 'Tabs' }
  ],
  crm: [
    { id: 'kpiDashboard', label: 'KPI Dashboard' },
    { id: 'sidebarTable', label: 'Sidebar Table' },
    { id: 'kanban', label: 'Kanban' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'directory', label: 'Directory' }
  ]
};

export function LayoutPatternSelector({
  artifact,
  value,
  onChange
}: {
  artifact: Artifact;
  value: PatternId;
  onChange: (v: PatternId) => void;
}) {
  const options = patternsByArtifact[artifact] || patternsByArtifact.website;

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            aria-selected={active}
            className={`px-3 py-1.5 rounded-lg text-sm border transition ${
              active
                ? 'bg-blue-600 border-blue-400 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-600/50'
                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white/80'
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

