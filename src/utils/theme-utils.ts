type Harmony = 'analogous' | 'complementary' | 'split' | 'triadic' | 'tetradic' | 'mono';
type Mode = 'dark' | 'light';

export function rotate(h: number, deg: number) {
  const x = (h + deg) % 360;
  return x < 0 ? x + 360 : x;
}

export function harmonyHues(baseHue: number, kind: Harmony) {
  switch (kind) {
    case 'analogous':      return [rotate(baseHue, -20), baseHue, rotate(baseHue, 20)];
    case 'complementary':  return [baseHue, rotate(baseHue, 180)];
    case 'split':          return [baseHue, rotate(baseHue, 150), rotate(baseHue, -150)];
    case 'triadic':        return [baseHue, rotate(baseHue, 120), rotate(baseHue, -120)];
    case 'tetradic':       return [baseHue, rotate(baseHue, 90), rotate(baseHue, 180), rotate(baseHue, 270)];
    case 'mono': default:  return [baseHue];
  }
}

function hsl(h: number, s: number, l: number) {
  return `hsl(${Math.round(h)} ${Math.round(s*100)}% ${Math.round(l*100)}%)`;
}

export function buildThemeVars(
  opts: { baseHue: number; harmony: Harmony; mode: Mode; sat?: number; light?: number }
) {
  const { baseHue, harmony, mode } = opts;
  const s = opts.sat ?? (mode === 'dark' ? 0.58 : 0.62);
  const l = opts.light ?? (mode === 'dark' ? 0.50 : 0.45);
  const hues = harmonyHues(baseHue, harmony);

  // Map palette → roles
  const brand = hues[0];
  const accent = hues[1] ?? rotate(brand, 30);
  const neutral = rotate(brand, mode === 'dark' ? -12 : 12);

  // Surfaces use desaturated/low-light neutrals in dark mode
  const bg     = hsl(neutral, 0.20, mode === 'dark' ? 0.07 : 0.97);
  const chrome = hsl(neutral, 0.20, mode === 'dark' ? 0.08 : 0.95);
  const canvas = hsl(neutral, 0.22, mode === 'dark' ? 0.10 : 0.92);
  const panel  = hsl(neutral, 0.24, mode === 'dark' ? 0.12 : 0.98);
  const elev   = hsl(neutral, 0.28, mode === 'dark' ? 0.16 : 0.99);

  const stroke = hsl(neutral, 0.26, mode === 'dark' ? 0.26 : 0.86);
  const ring   = hsl(accent, 0.65, mode === 'dark' ? 0.55 : 0.45);

  const cta    = hsl(brand, 0.70, mode === 'dark' ? 0.55 : 0.46);
  const ctaContrast = mode === 'dark' ? hsl(brand, 0.85, 0.12) : hsl(brand, 0.85, 0.98);
  const accentFill  = hsl(accent, 0.68, mode === 'dark' ? 0.62 : 0.42);

  const text   = hsl(neutral, 0.18, mode === 'dark' ? 0.90 : 0.12);
  const muted  = hsl(neutral, 0.16, mode === 'dark' ? 0.65 : 0.38);

  return {
    '--bg': bg,
    '--chrome': chrome,
    '--canvas': canvas,
    '--panel': panel,
    '--elev': elev,
    '--stroke': stroke,
    '--ring': ring,
    '--cta': cta,
    '--cta-contrast': ctaContrast,
    '--accent': accentFill,
    '--text': text,
    '--muted': muted,
  } as React.CSSProperties;
}

export type { Harmony, Mode };
