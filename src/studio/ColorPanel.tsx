import React, { useEffect, useMemo, useState } from "react";
import { buildThemeVars } from "../utils/theme-vars";
import type { Harmony } from "../utils/color-palette";

type Mode = "dark" | "light";

const HARMONIES: Harmony[] = ["complementary", "split", "triadic", "analogous"];

function Slider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block text-sm" style={{ color: "var(--text)" }}>
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

export default function ColorPanel({
  mode,
  onThemeVars,
}: {
  mode: Mode;
  onThemeVars: (vars: React.CSSProperties) => void;
}) {
  const [baseHue, setBaseHue] = useState(210);
  const [harmony, setHarmony] = useState<Harmony>("split");

  const themeVars = useMemo(
    () => buildThemeVars({ baseHue, harmony, mode }),
    [baseHue, harmony, mode]
  );

  useEffect(() => {
    onThemeVars(themeVars);
  }, [themeVars, onThemeVars]);

  return (
    <div className="space-y-4">
      <div>
        <div className="text-xs mb-2 opacity-80">Harmony</div>
        <div className="flex flex-wrap gap-2">
          {HARMONIES.map((h) => (
            <button
              key={h}
              onClick={() => setHarmony(h)}
              className={`px-3 py-1.5 rounded-lg text-xs border transition ${
                harmony === h
                  ? "opacity-100"
                  : "opacity-60 hover:opacity-80"
              }`}
              style={{
                borderColor: "var(--stroke)",
                background:
                  harmony === h
                    ? "color-mix(in oklab, var(--panel), var(--primary) 12%)"
                    : "var(--panel)",
                color: "var(--text)",
              }}
            >
              {h.charAt(0).toUpperCase() + h.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Slider
          label={`Base Hue (${baseHue}°)`}
          value={baseHue}
          onChange={setBaseHue}
          min={0}
          max={360}
        />
      </div>
    </div>
  );
}
