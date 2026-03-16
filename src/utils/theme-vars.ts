import type { Harmony } from './color-palette';
import { paletteFromHarmony } from './color-palette';

export type Mode = 'dark' | 'light';

export function buildThemeVars(args: {
  baseHue: number;
  harmony: Harmony;
  mode: Mode;
}) {
  const { baseHue, harmony, mode } = args;
  const pal = paletteFromHarmony(baseHue, harmony);

  // Neutral surfaces derive from a slight shift off primary hue for coherence.
  const neutralHue = (pal as any)._hues.P - (mode === 'dark' ? 12 : -12);
  const bg      = `hsl(${neutralHue} 20% ${mode === 'dark' ? 7 : 97}%)`;
  const chrome  = `hsl(${neutralHue} 20% ${mode === 'dark' ? 8 : 95}%)`;
  const canvas  = `hsl(${neutralHue} 22% ${mode === 'dark' ? 10 : 92}%)`;
  const panel   = `hsl(${neutralHue} 24% ${mode === 'dark' ? 12 : 98}%)`;
  const elev    = `hsl(${neutralHue} 28% ${mode === 'dark' ? 16 : 99}%)`;
  const stroke  = `hsl(${neutralHue} 25% ${mode === 'dark' ? 26 : 86}%)`;
  const text    = `hsl(${neutralHue} 18% ${mode === 'dark' ? 90 : 12}%)`;
  const muted   = `hsl(${neutralHue} 16% ${mode === 'dark' ? 65 : 38}%)`;

  return {
    // brand roles from your 4-color palette
    '--primary':   pal.primary,
    '--secondary': pal.secondary,
    '--accent-1':  pal.accent1,
    '--accent-2':  pal.accent2,

    // UI roles
    '--bg': bg,
    '--chrome': chrome,
    '--canvas': canvas,
    '--panel': panel,
    '--elev': elev,
    '--stroke': stroke,
    '--text': text,
    '--muted': muted,

    // action roles (tie CTA to primary, dots to accent-2)
    '--cta': pal.primary,
    '--cta-contrast': mode === 'dark' 
      ? `hsl(${(pal as any)._hues.P} 85% 12%)` 
      : 'white',
    '--accent': pal.accent2,
  } as React.CSSProperties;
}
