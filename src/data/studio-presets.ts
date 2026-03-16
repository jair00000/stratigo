export type PatternId =
  | 'twoColumn' | 'splitScreen' | 'asymmetrical' | 'fShape' | 'zShape' | 'cardBlock' | 'featuredMedia' | 'masonry' | 'magazine' | 'fixedNav' | 'hiddenNav' | 'interactiveCarousel'
  | 'onboarding' | 'login' | 'listFeed' | 'grid' | 'productDetail' | 'filtersSort' | 'tabs'
  | 'kpiDashboard' | 'sidebarTable' | 'kanban' | 'analytics' | 'directory';

export type Artifact = 'website' | 'mobileApp' | 'crm';

export const patternDefaults: Record<Artifact, PatternId> = {
  website: 'twoColumn',
  mobileApp: 'onboarding',
  crm: 'kpiDashboard'
};

