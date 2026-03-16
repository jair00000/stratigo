// src/studio/DesignStudio.tsx
import React, { useMemo, useState } from "react";
import ColorPanel from "./ColorPanel";
import RenderWebsitePattern from "../wireframe/patterns-website";
import type { WebsitePatternId } from "../data/layout-patterns";

const ALL: { id: WebsitePatternId; label: string }[] = [
  { id: "twoColumn", label: "Two Column" },
  { id: "splitScreen", label: "Split Screen" },
  { id: "asymmetrical", label: "Asymmetrical" },
  { id: "fShape", label: "F-Shape" },
  { id: "zShape", label: "Z-Shape" },
  { id: "cardBlock", label: "Card Block" },
  { id: "featuredMedia", label: "Featured Media" },
  { id: "masonry", label: "Masonry" },
  { id: "magazine", label: "Magazine" },
  { id: "fixedNav", label: "Fixed Nav" },
  { id: "hiddenNav", label: "Hidden Nav" },
  { id: "interactiveCarousel", label: "Interactive" },
];

export default function DesignStudio() {
  const [vars, setVars] = useState<React.CSSProperties>({});
  // ordered stack: first chosen appears first
  const [stack, setStack] = useState<WebsitePatternId[]>(["twoColumn"]);

  const toggle = (id: WebsitePatternId) => {
    setStack(prev => {
      if (prev.includes(id)) return prev.filter(x => x !== id);
      if (prev.length >= 5) return prev;        // cap at 5
      return [...prev, id];
    });
  };

  const move = (i: number, dir: -1 | 1) => {
    setStack(prev => {
      const j = i + dir;
      if (j < 0 || j >= prev.length) return prev;
      const copy = [...prev];
      [copy[i], copy[j]] = [copy[j], copy[i]];
      return copy;
    });
  };

  const scrollable = stack.length >= 2; // becomes scrollable when 2nd layout is chosen
  const previewFrameStyle: React.CSSProperties = useMemo(
    () => ({
      ...vars,
      background: "var(--canvas)",
    }),
    [vars]
  );

  return (
    <div className="grid grid-cols-[360px_1fr] gap-8">
      {/* Control panel */}
      <aside className="rounded-xl border p-4 space-y-6"
             style={{ background: "var(--panel)", borderColor: "var(--stroke)" }}>
        <div>
          <h3 className="text-sm mb-3">Colors</h3>
          <ColorPanel mode="dark" onThemeVars={setVars} />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm">Select Sections (pick 3–5)</h3>
            <button
              onClick={() => setStack([])}
              className="text-xs px-2 py-1 rounded border"
              style={{ borderColor: "var(--stroke)", background: "var(--panel)", color: "var(--text)" }}
            >
              Clear
            </button>
          </div>

          <div className="grid grid-cols-1 gap-2 max-h-[280px] overflow-auto pr-1">
            {ALL.map(opt => {
              const active = stack.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  onClick={() => toggle(opt.id)}
                  className={`flex items-center justify-between px-3 py-2 rounded border text-sm ${
                    active ? "opacity-100" : "opacity-75"
                  }`}
                  style={{
                    borderColor: "var(--stroke)",
                    background: active ? "color-mix(in oklab, var(--panel), var(--primary) 12%)" : "var(--panel)",
                    color: "var(--text)",
                  }}
                  title={active ? "Remove" : "Add"}
                >
                  <span>{opt.label}</span>
                  <span className="text-xs">{active ? "Selected" : "Add"}</span>
                </button>
              );
            })}
          </div>

          {stack.length > 0 && (
            <div className="mt-4">
              <div className="text-xs mb-2 opacity-80">Order (top first)</div>
              <ul className="space-y-2">
                {stack.map((id, i) => {
                  const label = ALL.find(x => x.id === id)?.label ?? id;
                  return (
                    <li key={id} className="flex items-center justify-between px-3 py-2 rounded border text-sm"
                        style={{ borderColor: "var(--stroke)", background: "var(--panel)", color: "var(--text)" }}>
                      <span className="truncate">{label}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => move(i, -1)}
                          className="px-2 py-1 rounded border text-xs"
                          style={{ borderColor: "var(--stroke)" }}
                          disabled={i === 0}
                          title="Move up"
                        >↑</button>
                        <button
                          onClick={() => move(i, +1)}
                          className="px-2 py-1 rounded border text-xs"
                          style={{ borderColor: "var(--stroke)" }}
                          disabled={i === stack.length - 1}
                          title="Move down"
                        >↓</button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </aside>

      {/* Preview frame (fixed height; scrolls only after 2nd selection) */}
      <main>
        <div className="rounded-2xl border"
             style={{ borderColor: "var(--stroke)", background: "var(--canvas)" }}>
          <div
            className={scrollable ? "h-[720px] overflow-y-auto" : "h-auto"}
            style={previewFrameStyle}
          >
            <div className="p-6 space-y-6">
              {stack.length === 0 && (
                <div className="rounded-xl border p-6 text-sm opacity-80"
                     style={{ borderColor: "var(--stroke)", background: "var(--panel)", color: "var(--text)" }}>
                  Pick 3–5 sections on the left to stack a preview.
                </div>
              )}

              {stack.map(id => (
                <RenderWebsitePattern key={id} pattern={id} themeVars={vars} />
              ))}
            </div>
          </div>

          {/* Non-sticky footer: sits below, scrolls out of view with the frame itself */}
          <div className="px-4 py-3 border-t text-xs"
               style={{ borderColor: "var(--stroke)", background: "var(--panel)", color: "var(--text)" }}>
            Stack size: {stack.length} (recommended 3–5). Hidden Nav will render without the header bar.
          </div>
        </div>
      </main>
    </div>
  );
}
