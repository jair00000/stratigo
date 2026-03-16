type Scheme = {
  bg: string;      // page (darkest)
  panel: string;   // sections/cards (lighter than bg)
  elev: string;    // soft elevation for media blocks
  stroke: string;  // hairlines/borders
  cta: string;     // brand/CTA
  accent: string;  // small markers/dots
};

// Produces a cohesive *dark* scheme from a base hue.
// intensity: 0..100 (how "bold" the brand hue is)
export function schemeFromHue(h = 210, intensity = 60): Scheme {
  const hsl = (hh: number, s: number, l: number) =>
    `hsl(${(hh % 360 + 360) % 360} ${Math.max(0, Math.min(100, s))}% ${Math.max(0, Math.min(100, l))}%)`;

  // Neutrals: same hue, *very* low chroma -> harmony without rainbow
  const neutralS = 8;
  const bg = hsl(h, neutralS, 10);
  const panel = hsl(h, neutralS, 14);
  const elev = hsl(h, neutralS, 18);
  const stroke = hsl(h, 18, 32);

  // Brand (CTA) + subtle accent rotated off-hue
  const cta = hsl(h, Math.max(45, intensity), 52);
  const accent = hsl(h + 30, 58, 56);

  return { bg, panel, elev, stroke, cta, accent };
}

export type { Scheme };

