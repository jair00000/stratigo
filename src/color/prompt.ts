export function seedFromPrompt(p: string) {
  const s = p.toLowerCase();
  if (/luxury|gold|elegant/.test(s)) return { hue: 45, sat: 70, light: 40, type: 'split-complementary' };
  if (/nature|fresh|green|eco|organic/.test(s)) return { hue: 140, sat: 65, light: 52, type: 'analogous' };
  if (/tech|modern|saas|blue|trust/.test(s)) return { hue: 210, sat: 70, light: 50, type: 'triad' };
  if (/warm|creative|orange/.test(s)) return { hue: 25, sat: 75, light: 52, type: 'complementary' };
  if (/passion|alert|red/.test(s)) return { hue: 0, sat: 75, light: 50, type: 'split-complementary' };
  if (/calm|minimal|neutral|gray/.test(s)) return { hue: 210, sat: 18, light: 48, type: 'monochrome' };
  return { hue: 200, sat: 60, light: 50, type: 'analogous' };
}
