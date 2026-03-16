export type HSL = { h: number; s: number; l: number };
const clamp = (n: number, min = 0, max = 100) => Math.max(min, Math.min(max, n));
export const hsl = (h: number, s: number, l: number): HSL => ({
  h: ((h % 360) + 360) % 360,
  s: clamp(s),
  l: clamp(l)
});
export function hslToHex({ h, s, l }: HSL) {
  s /= 100;
  l /= 100;
  const k = (n: number) => (n + (h / 30)) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1));
  const toHex = (x: number) => Math.round(255 * x).toString(16).padStart(2, '0');
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`.toUpperCase();
}
