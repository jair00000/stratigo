export type Harmony = 'complementary' | 'split' | 'triadic' | 'analogous';

const clampHue = (h: number) => ((h % 360) + 360) % 360;
const H = (h: number) => clampHue(h);

const hsl = (h: number, s: number, l: number) => `hsl(${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%)`;

/**
 * Returns exactly four colors: [primary, secondary, accent1, accent2]
 * Primary always equals baseHue. Others depend on harmony relationship.
 */
export function paletteFromHarmony(
  baseHue: number,
  harmony: Harmony,
  opts?: { s?: number; l?: number; sAcc?: number; lAcc?: number }
) {
  const s = opts?.s ?? 0.70;         // base saturation
  const l = opts?.l ?? 0.50;         // base lightness
  const sAcc = opts?.sAcc ?? 0.68;   // accents saturation
  const lAcc = opts?.lAcc ?? 0.52;   // accents lightness

  const P = H(baseHue);

  let S: number, A1: number, A2: number;
  switch (harmony) {
    case 'complementary':
      S = H(P + 180);
      A1 = H(P + 30);
      A2 = H(P - 30);
      break;
    case 'split':
      S  = H(P + 150);
      A1 = H(P - 150);
      A2 = H(P + 30);
      break;
    case 'triadic':
      S  = H(P + 120);
      A1 = H(P - 120);
      A2 = H(P + 60);
      break;
    case 'analogous':
    default:
      S  = H(P + 20);
      A1 = H(P - 20);
      A2 = H(P + 40);
      break;
  }

  return {
    primary:  hsl(P,  s,    l),
    secondary:hsl(S,  s,    l * 0.96),
    accent1:  hsl(A1, sAcc, lAcc),
    accent2:  hsl(A2, sAcc, lAcc * 0.94),
    // Keep raw hues if needed outside:
    _hues: { P, S, A1, A2 },
  };
}
