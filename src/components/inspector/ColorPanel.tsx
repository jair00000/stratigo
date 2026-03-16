import React, { useEffect, useMemo, useState } from 'react';
import SectionCard from './SectionCard';
import { buildPalette } from '../../color/harmony';
import { seedFromPrompt } from '../../color/prompt';
import { schemeFromHue } from '../../color/scheme';

const HARMONIES = ['monochrome', 'analogous', 'complementary', 'split-complementary', 'triad', 'tetrad'] as const;
type Harmony = (typeof HARMONIES)[number];

function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block text-sm text-white/70">
      <div className="mb-1">{label}</div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-500"
      />
    </label>
  );
}

function PalettePreview({ swatches }: { swatches: string[] }) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {swatches.map((hex) => (
        <button
          key={hex}
          title={hex}
          onClick={() => navigator.clipboard?.writeText(hex)}
          className="h-16 rounded-xl border border-white/10 flex items-end p-2 text-[10px] transition hover:scale-105"
          style={{ background: hex, color: '#000000AA' }}
        >
          {hex}
        </button>
      ))}
    </div>
  );
}

export default function ColorPanel({
  onPalette
}: {
  onPalette: (swatches: string[], scheme: any) => void;
}) {
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState<Harmony>('analogous');
  const [hue, setHue] = useState(210);
  const [sat, setSat] = useState(60);
  const [light, setLight] = useState(50);

  const swatches = useMemo(() => buildPalette(hue, sat, light, type), [hue, sat, light, type]);
  // Convert saturation to intensity (0-100) for scheme
  const intensity = Math.round(sat);
  const scheme = useMemo(() => schemeFromHue(hue, intensity), [hue, intensity]);

  // Live-apply
  useEffect(() => {
    onPalette(swatches, scheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swatches, scheme]);

  function handleGenerate() {
    const seed = seedFromPrompt(prompt);
    setType(seed.type as Harmony);
    setHue(seed.hue);
    setSat(seed.sat);
    setLight(seed.light);
  }

  return (
    <>
      <SectionCard title="Vibe (Prompt for Color)" helper="Describe only the mood/colors.">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='e.g., "Luxury black & gold", "Calm tech blues", "Fresh nature greens"'
          className="w-full rounded-xl bg-white/5 border border-white/10 text-white/80 placeholder-white/40 p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none text-sm"
        />
        <div className="mt-3">
          <button
            onClick={handleGenerate}
            className="h-10 px-4 rounded-xl bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition-colors"
          >
            Generate Palette
          </button>
        </div>
      </SectionCard>

      <SectionCard title="Harmony" helper="Classic color relationships.">
        <div className="flex flex-wrap gap-2">
          {HARMONIES.map((h) => (
            <button
              key={h}
              onClick={() => setType(h)}
              className={`px-3 py-1.5 rounded-lg text-sm border transition ${
                type === h
                  ? 'border-blue-400 bg-white/10 text-white shadow-md shadow-blue-600/30 ring-1 ring-blue-600/50'
                  : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {h.replace('-', ' ')}
            </button>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Base Hue & Intensity" helper="Hue (color), strength, and light–dark.">
        <div className="space-y-3">
          <Slider label={`Hue (${hue}°)`} value={hue} onChange={setHue} min={0} max={360} />
          <Slider label={`Saturation (${sat}%)`} value={sat} onChange={setSat} />
          <Slider label={`Brightness (${light}%)`} value={light} onChange={setLight} />
        </div>
      </SectionCard>

      <SectionCard title="Palette Preview" helper="Click a swatch to copy its hex.">
        <PalettePreview swatches={swatches} />
      </SectionCard>
    </>
  );
}
