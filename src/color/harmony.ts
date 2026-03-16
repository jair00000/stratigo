import { hsl, hslToHex } from './utils';

const huesFor = (base: number, type: string): number[] => {
  switch (type) {
    case 'monochrome':
      return [base];
    case 'analogous':
      return [base - 30, base, base + 30];
    case 'complementary':
      return [base, base + 180];
    case 'split-complementary':
      return [base, base + 150, base - 150];
    case 'triad':
      return [base, base + 120, base - 120];
    case 'tetrad':
      return [base, base + 90, base + 180, base + 270];
    default:
      return [base];
  }
};

export function buildPalette(baseHue: number, sat: number, light: number, type: string) {
  const hues = huesFor(baseHue, type).map((h) => ((h % 360) + 360) % 360);
  const swatches: string[] = [];
  // neutral surface from baseHue (darker)
  swatches.push(hslToHex(hsl(baseHue, Math.max(8, sat * 0.15), Math.max(6, light * 0.25))));
  // mid/bright per hue
  hues.forEach((h) => {
    swatches.push(hslToHex(hsl(h, sat, Math.min(65, light))));
    swatches.push(hslToHex(hsl(h, Math.min(90, sat + 10), Math.min(85, light + 20))));
  });
  // white cap
  swatches.push('#FFFFFF');
  return Array.from(new Set(swatches)).slice(0, 8);
}
