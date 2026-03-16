export type Artifact = 'website' | 'mobileApp' | 'crm';

export type WebsitePatternId =
  | 'twoColumn'
  | 'splitScreen'
  | 'asymmetrical'
  | 'fShape'
  | 'zShape'
  | 'cardBlock'
  | 'featuredMedia'
  | 'masonry'
  | 'magazine'
  | 'fixedNav'
  | 'hiddenNav'
  | 'interactiveCarousel';

export const websitePatterns: { id: WebsitePatternId; label: string }[] = [
  { id: 'twoColumn', label: 'Two-Column' },
  { id: 'splitScreen', label: 'Split Screen' },
  { id: 'asymmetrical', label: 'Asymmetrical' },
  { id: 'fShape', label: 'F-Shape' },
  { id: 'zShape', label: 'Z-Shape' },
  { id: 'cardBlock', label: 'Card / Block' },
  { id: 'featuredMedia', label: 'Featured Media' },
  { id: 'masonry', label: 'Masonry' },
  { id: 'magazine', label: 'Magazine' },
  { id: 'fixedNav', label: 'Fixed Nav' },
  { id: 'hiddenNav', label: 'Hidden Nav' },
  { id: 'interactiveCarousel', label: 'Interactive' }
];

