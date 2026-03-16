export type ColorTokens = {
  surface: string;       // page background
  surfaceAlt: string;    // card bg
  surfaceElev1: string;  // light elevation
  primary: string;       // CTA
  primarySoft: string;   // CTA hover / soft areas
  accent: string;        // markers, dots
  outline: string;       // borders
  outlineSoft: string;   // hairlines
  muted: string;         // lines / placeholders
};

const hexToHsl = (hex: string) => {
  const c = hex.replace('#', '');
  const r = parseInt(c.slice(0, 2), 16) / 255,
    g = parseInt(c.slice(2, 4), 16) / 255,
    b = parseInt(c.slice(4, 6), 16) / 255;
  const mx = Math.max(r, g, b),
    mn = Math.min(r, g, b),
    d = mx - mn,
    l = (mx + mn) / 2;
  let h = 0,
    s = 0;
  if (d) {
    s = d / (1 - Math.abs(2 * l - 1));
    switch (mx) {
      case r:
        h = ((g - b) / d) % 6;
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
    }
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s, l };
};

const hslToHex = (h: number, s: number, l: number) => {
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    return l - a * Math.max(-1, Math.min(Math.min(k - 3, 9 - k), 1));
  };
  const to = (x: number) => Math.round(255 * x).toString(16).padStart(2, '0');
  return `#${to(f(0))}${to(f(8))}${to(f(4))}`.toUpperCase();
};

function tint(hex: string, by: number) {
  const t = hexToHsl(hex);
  return hslToHex(t.h * 60, t.s, Math.min(1, t.l + by));
}

function shade(hex: string, by: number) {
  const t = hexToHsl(hex);
  return hslToHex(t.h * 60, t.s, Math.max(0, t.l - by));
}

// internal auto-mapping; users never see roles
export function tokensFromPalette(swatches: string[]): ColorTokens {
  const get = (i: number, d: string) => swatches[i] ?? d;

  // base picks
  let surface = get(0, '#0B1220');
  let surfaceAlt = get(1, '#111827');
  let primary = get(2, '#2563EB');
  let accent = get(3, '#22C55E');
  const outline = get(4, '#60A5FA');
  const muted = '#9CA3AF';

  // ensure primary contrasts the surface a bit
  const Lp = hexToHsl(primary).l,
    Ls = hexToHsl(surface).l;
  if (Math.abs(Lp - Ls) < 0.18) {
    const t = hexToHsl(primary);
    const adj = t.l > Ls ? t.l + 0.12 : t.l - 0.12;
    primary = hslToHex(t.h * 60, t.s, Math.max(0, Math.min(1, adj)));
  }

  return {
    surface,
    surfaceAlt,
    surfaceElev1: tint(surfaceAlt, 0.06),   // subtle lift
    primary,
    primarySoft: tint(primary, 0.18),
    accent,
    outline,
    outlineSoft: tint(outline, 0.30),
    muted
  };
}
