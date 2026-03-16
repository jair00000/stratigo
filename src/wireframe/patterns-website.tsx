import React, { useMemo } from 'react';
import { ImgBlock, Line, Card, EmphasisBlock, MarkerDot, ActiveOutline } from './primitives';
import { SiteScaffold } from '../components/ui/SiteScaffold';
import type { WebsitePatternId } from '../data/layout-patterns';
import { buildThemeVars } from '../utils/theme-vars';
import type { Harmony } from '../utils/color-palette';

export default function RenderWebsitePattern({ 
  pattern, 
  themeVars: providedThemeVars,
  showNav = true,
  showFooter = true,
  stickyFooter = false,
  fillHeight = false,
  isNarrow = false, // when true, treat as mobile-width canvas
  layoutMode = "desktop", // 'mobile' | 'tablet' | 'desktop'
}: { 
  pattern: WebsitePatternId;
  themeVars?: React.CSSProperties;
  showNav?: boolean;
  showFooter?: boolean;
  stickyFooter?: boolean;
  fillHeight?: boolean;
  isNarrow?: boolean;
  layoutMode?: "mobile" | "tablet" | "desktop";
}) {
  // Use provided theme vars or fallback to defaults
  const baseHue = 210;
  const harmony: Harmony = 'split';
  const mode: 'dark' | 'light' = 'dark';

  const defaultThemeVars = useMemo(
    () => buildThemeVars({ baseHue, harmony, mode }),
    [baseHue, harmony, mode]
  );

  const themeVars = providedThemeVars || defaultThemeVars;
  switch (pattern) {
    case 'twoColumn':
      return (
        <SiteScaffold
          label="Website / Two Column"
          themeVars={themeVars}
          showNav={showNav}
          showFooter={showFooter}
          stickyFooter={stickyFooter}
          fillHeight={fillHeight}
        >
          {/* When canvas is narrow (e.g. mobile), stack media on top and copy below */}
          {isNarrow ? (
            <div
              className="flex flex-col gap-4"
              style={fillHeight ? {} : { minHeight: '260px' }}
            >
              {/* Top: media */}
              <div
                className="rounded-2xl border p-4 flex flex-col"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)' }}
              >
                <div
                  className="rounded-2xl border mb-3 w-full"
                  style={{
                    background: 'linear-gradient(180deg,var(--elev),var(--panel))',
                    borderColor: 'var(--stroke)',
                    minHeight: '132px',
                  }}
                />
              </div>

              {/* Bottom: copy + CTA */}
              <div
                className="rounded-2xl border p-4 flex flex-col"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)' }}
              >
                <div className="space-y-2 mb-3">
                  <div className="h-2.5 w-4/5 rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-2/3 rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-1/2 rounded" style={{ background: 'var(--stroke)' }} />
                </div>
                <div
                  className="h-9 w-36 rounded-lg border mt-2"
                  style={{ background: 'var(--cta)', borderColor: 'var(--cta)' }}
                />
              </div>
            </div>
          ) : (
            <div
              className={`grid gap-6 ${fillHeight ? 'h-full' : ''} grid-cols-2`}
              style={fillHeight ? {} : { minHeight: '260px' }}
            >
              {/* Left: media first */}
              <div
                className="rounded-2xl border p-4 flex flex-col"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)' }}
              >
                <div
                  className="rounded-2xl border mb-3 w-full"
                  style={{
                    background: 'linear-gradient(180deg,var(--elev),var(--panel))',
                    borderColor: 'var(--stroke)',
                    minHeight: '132px',
                  }}
                />
                <div className="space-y-2">
                  <div className="h-2.5 w-3/4 rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-2/3 rounded" style={{ background: 'var(--stroke)' }} />
                </div>
              </div>

              {/* Right: copy + CTA */}
              <div
                className="rounded-2xl border p-4 flex flex-col"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)' }}
              >
                <div className="space-y-2 mb-3">
                  <div className="h-2.5 w-2/3 rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-1/2 rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-5/12 rounded" style={{ background: 'var(--stroke)' }} />
                </div>
                <div
                  className="h-9 w-36 rounded-lg border mt-auto"
                  style={{ background: 'var(--cta)', borderColor: 'var(--cta)' }}
                />
              </div>
            </div>
          )}
        </SiteScaffold>
      );

    case 'splitScreen':
      return (
        <SiteScaffold label="Website / Split Screen" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          {isNarrow ? (
            // On narrow canvases, stack hero media on top and supporting panel below
            <div
              className="flex flex-col gap-4"
              style={fillHeight ? {} : { minHeight: '260px' }}
            >
              <div
                className="rounded-2xl border"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)', minHeight: '180px' }}
              />
              <div
                className="rounded-2xl border"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)', minHeight: '140px' }}
              />
            </div>
          ) : (
            <div
              className={`grid gap-6 ${fillHeight ? 'h-full' : ''} grid-cols-2`}
              style={fillHeight ? {} : { minHeight: '260px' }}
            >
              <div
                className="rounded-2xl border"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)', minHeight: '180px' }}
              />
              <div
                className="rounded-2xl border"
                style={{ background: 'var(--panel)', borderColor: 'var(--stroke)', minHeight: '180px' }}
              />
            </div>
          )}
        </SiteScaffold>
      );

    case 'asymmetrical':
      return (
        <SiteScaffold label="Website / Asymmetrical" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          {isNarrow ? (
            // On narrow canvases, stack hero media first, then supporting copy/CTA
            <div
              className="flex flex-col gap-4"
              style={fillHeight ? {} : { minHeight: '260px' }}
            >
              <div
                className="rounded-xl border"
                style={{
                  background: 'linear-gradient(180deg,var(--elev),var(--panel))',
                  borderColor: 'var(--stroke)',
                  minHeight: '180px',
                }}
              />
              <div className="rounded-xl border p-4 flex flex-col gap-3" style={{ background: 'var(--panel)', borderColor: 'var(--stroke)' }}>
                <div className="space-y-2">
                  <div className="h-2.5 w-4/5 rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-3/5 rounded" style={{ background: 'var(--stroke)' }} />
                </div>
                <div
                  className="h-9 w-28 rounded-lg border mt-2"
                  style={{ background: 'var(--cta)', borderColor: 'var(--cta)' }}
                />
              </div>
            </div>
          ) : (
            <div
              className={`grid grid-cols-3 gap-4 ${fillHeight ? 'h-full' : ''}`}
              style={fillHeight ? {} : { height: '280px' }}
            >
              <div className="col-span-2">
                <div
                  className="rounded-xl border h-full"
                  style={{ background: 'linear-gradient(180deg,var(--elev),var(--panel))', borderColor: 'var(--stroke)' }}
                />
              </div>
              <div className="h-full flex flex-col">
                <div className="space-y-2 mb-3">
                  <div className="h-2.5 w-full rounded" style={{ background: 'var(--stroke)' }} />
                  <div className="h-2.5 w-4/5 rounded" style={{ background: 'var(--stroke)' }} />
                </div>
                <div
                  className="h-9 w-28 rounded-lg border mt-auto"
                  style={{ background: 'var(--cta)', borderColor: 'var(--cta)' }}
                />
              </div>
            </div>
          )}
        </SiteScaffold>
      );

    case 'fShape':
      return (
        <SiteScaffold label="Website / F-Shape" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          <div className="space-y-4">
            <div className="h-3 w-5/6 rounded" style={{ background: "var(--stroke)" }} />
            <div className="h-3 w-full rounded" style={{ background: "var(--stroke)" }} />
            <div className="h-3 w-2/3 rounded" style={{ background: "var(--stroke)" }} />
            {/* Responsive card row driven by layoutMode:
                - mobile: 1 / 1 / 1 (stacked)
                - tablet: 2 cards on first row, 1 on second
                - desktop: 3-column F-shape row */}
            {layoutMode === "mobile" && (
              <div className="flex flex-col gap-4 pt-2">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="rounded-2xl border"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                      minHeight: "150px",
                    }}
                  />
                ))}
              </div>
            )}
            {layoutMode === "tablet" && (
              <div className="flex flex-wrap gap-4 pt-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                      minHeight: "150px",
                      flexBasis: i < 2 ? "calc(50% - 0.5rem)" : "100%",
                      maxWidth: i < 2 ? "calc(50% - 0.5rem)" : "100%",
                    }}
                  />
                ))}
              </div>
            )}
            {layoutMode === "desktop" && (
              <div
                className="grid gap-4 pt-2"
                style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
              >
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="rounded-2xl border"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                      minHeight: "160px",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </SiteScaffold>
      );

    case 'zShape':
      return (
        <SiteScaffold
          label="Website / Z-Shape"
          themeVars={themeVars}
          showNav={showNav}
          showFooter={showFooter}
          stickyFooter={stickyFooter}
          fillHeight={fillHeight}
        >
          {/* For mobile/tablet we let height grow naturally so rows aren't clipped.
              Desktop keeps a fixed preview height for the classic F/Z hero feel. */}
          <div
            className="space-y-4"
            style={
              layoutMode === "desktop" && !fillHeight
                ? { height: "280px", display: "flex", flexDirection: "column" }
                : { minHeight: "260px", display: "flex", flexDirection: "column" }
            }
          >
            {/* Top text bar of the Z */}
            <div className="h-3 w-2/3 rounded" style={{ background: "var(--stroke)" }} />

            {/* Responsive Z row: mobile = 1/1/1, tablet = 2+1, desktop = 3 across */}
            {layoutMode === "mobile" && (
              <div className="flex flex-col gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                      minHeight: "150px",
                    }}
                  />
                ))}
              </div>
            )}

            {layoutMode === "tablet" && (
              <div className="flex flex-wrap gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                      minHeight: "150px",
                      flexBasis: i < 2 ? "calc(50% - 0.5rem)" : "100%",
                      maxWidth: i < 2 ? "calc(50% - 0.5rem)" : "100%",
                    }}
                  />
                ))}
              </div>
            )}

            {layoutMode === "desktop" && (
              <div
                className={`grid gap-4 ${fillHeight ? "" : "flex-1"}`}
                style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
              >
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="rounded-2xl border"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                      height: fillHeight ? "200px" : "100%",
                      minHeight: "160px",
                    }}
                  />
                ))}
              </div>
            )}

            {/* Bottom right accent line of the Z */}
            <div className="flex justify-end">
              <div className="h-3 w-1/3 rounded" style={{ background: "var(--stroke)" }} />
            </div>
          </div>
        </SiteScaffold>
      );

    case 'cardBlock':
      return (
        <SiteScaffold label="Website / Card Block" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          {/* Responsive card grid:
              - mobile: single column list
              - tablet: 2-column grid
              - desktop: 3-column card block */}
          {layoutMode === "mobile" && (
            <div className="flex flex-col gap-3" style={fillHeight ? {} : { minHeight: "260px" }}>
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-3"
                  style={{ background: "var(--panel)", borderColor: "var(--stroke)" }}
                >
                  <div
                    className="rounded-lg border mb-2 aspect-[4/3]"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                    }}
                  />
                  <div className="h-2.5 w-full rounded mb-1.5" style={{ background: "var(--stroke)" }} />
                  <div className="h-2.5 w-2/3 rounded" style={{ background: "var(--stroke)" }} />
                </div>
              ))}
            </div>
          )}

          {layoutMode === "tablet" && (
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                ...(fillHeight ? {} : { minHeight: "260px" }),
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-3"
                  style={{ background: "var(--panel)", borderColor: "var(--stroke)" }}
                >
                  <div
                    className="rounded-lg border mb-2 aspect-[4/3]"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                    }}
                  />
                  <div className="h-2.5 w-full rounded mb-1.5" style={{ background: "var(--stroke)" }} />
                  <div className="h-2.5 w-2/3 rounded" style={{ background: "var(--stroke)" }} />
                </div>
              ))}
            </div>
          )}

          {layoutMode === "desktop" && (
            <div
              className="grid grid-cols-3 gap-4"
              // Let height grow naturally so both rows and footer fit inside the scaffold.
              // The outer preview frame will handle any scrolling.
              style={fillHeight ? {} : { minHeight: "320px" }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-2.5 flex flex-col"
                  style={{ background: "var(--panel)", borderColor: "var(--stroke)" }}
                >
                  <div
                    // Slightly shorter media to keep six cards visible within the canvas
                    className="rounded-lg border mb-2 aspect-[16/9]"
                    style={{
                      background: "linear-gradient(180deg,var(--elev),var(--panel))",
                      borderColor: "var(--stroke)",
                    }}
                  />
                  <div className="h-2.5 w-full rounded mb-1.5" style={{ background: "var(--stroke)" }} />
                  <div className="h-2.5 w-2/3 rounded" style={{ background: "var(--stroke)" }} />
                </div>
              ))}
            </div>
          )}
        </SiteScaffold>
      );

    case 'featuredMedia':
      return (
        <SiteScaffold label="Website / Featured Media" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          <div className={`${fillHeight ? 'h-full flex flex-col' : 'space-y-3'}`} style={fillHeight ? {} : { height: '280px', display: 'flex', flexDirection: 'column' }}>
            {fillHeight ? (
              <div className="flex-1 min-h-0 flex flex-col space-y-3">
                <div
                  className="rounded-xl border flex-1 min-h-[140px]"
                  style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)" }}
                />
                <div className="flex gap-3">
                  <div className="h-9 w-28 rounded-lg border" style={{ background: "var(--cta)", borderColor: "var(--cta)" }} />
                  <div className="h-2.5 w-1/3 rounded" style={{ background: "var(--stroke)" }} />
                </div>
              </div>
            ) : (
              <>
                <div
                  className="rounded-xl border flex-1"
                  style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '200px' }}
                />
                <div className="flex gap-3">
                  <div className="h-9 w-28 rounded-lg border" style={{ background: "var(--cta)", borderColor: "var(--cta)" }} />
                  <div className="h-2.5 w-1/3 rounded" style={{ background: "var(--stroke)" }} />
                </div>
              </>
            )}
          </div>
        </SiteScaffold>
      );

    case 'masonry':
      return (
        <SiteScaffold label="Website / Masonry" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          {fillHeight ? (
            <div className="grid grid-cols-3 gap-2" style={{ maxHeight: '100%', overflow: 'hidden', height: '100%' }}>
              {/* Column 1 - Left */}
              <div className="space-y-2 flex flex-col">
                <div className="rounded-lg border flex-1" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '80px' }} />
                <div className="rounded-lg border" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", height: '45px' }} />
              </div>
              {/* Column 2 - Middle */}
              <div className="space-y-2 flex flex-col">
                <div className="rounded-lg border" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", height: '45px' }} />
                <div className="rounded-lg border flex-1" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '80px' }} />
              </div>
              {/* Column 3 - Right */}
              <div className="space-y-2 flex flex-col">
                <div className="rounded-lg border flex-1" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '80px' }} />
                <div className="rounded-lg border" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", height: '45px' }} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2" style={{ height: '280px' }}>
              {/* Column 1 - Left */}
              <div className="space-y-2 h-full flex flex-col">
                <div className="rounded-lg border flex-1" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '140px' }} />
                <div className="rounded-lg border h-12" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)" }} />
              </div>
              {/* Column 2 - Middle */}
              <div className="space-y-2 h-full flex flex-col">
                <div className="rounded-lg border h-12" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)" }} />
                <div className="rounded-lg border flex-1" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '140px' }} />
              </div>
              {/* Column 3 - Right */}
              <div className="space-y-2 h-full flex flex-col">
                <div className="rounded-lg border flex-1" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)", minHeight: '140px' }} />
                <div className="rounded-lg border h-12" style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)" }} />
              </div>
            </div>
          )}
        </SiteScaffold>
      );

    case 'magazine':
      return (
        <SiteScaffold label="Website / Magazine" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          <div className={`${fillHeight ? 'h-full' : ''} flex flex-col`}>
            {/* Fill the scaffold, keep consistent vertical rhythm */}
            <div className={`${fillHeight ? 'flex-1 min-h-0' : ''} flex flex-col gap-3 pb-3`}>
              {/* Row 1 grows */}
              <div className={`grid grid-cols-3 gap-3 ${fillHeight ? 'flex-1 min-h-0' : ''}`}>
                <div
                  className={`col-span-2 rounded-xl border ${fillHeight ? 'h-full' : 'h-48'} min-h-[120px]`}
                  style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)" }}
                />
                <div className="space-y-2 self-stretch">
                  <div className="h-2.5 w-full rounded" style={{ background: "var(--stroke)" }} />
                  <div className="h-2.5 w-full rounded" style={{ background: "var(--stroke)" }} />
                  <div className="h-2.5 w-full rounded" style={{ background: "var(--stroke)" }} />
                </div>
              </div>

              {/* Row 2 pinned to bottom, gap above preserved */}
              <div className="mt-auto">
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border h-[64px]"
                      style={{ background: "var(--panel)", borderColor: "var(--stroke)" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SiteScaffold>
      );

    case 'fixedNav':
      return (
        <SiteScaffold label="Website / Fixed Nav" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          <div className={`${fillHeight ? 'h-full' : ''} flex flex-col`}>
            <div className={`${fillHeight ? 'flex-1 min-h-0' : ''} flex flex-col`}>
              <div
                className={`rounded-xl border ${fillHeight ? 'flex-1' : 'h-48'} min-h-[120px] mb-3`}
                style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))", borderColor: "var(--stroke)" }}
              />
              <div className="h-2.5 w-full rounded mb-3" style={{ background: "var(--stroke)" }} />
              <div className="h-2.5 w-full rounded mb-3" style={{ background: "var(--stroke)" }} />
              <div className="h-9 w-28 rounded-lg border mt-auto" style={{ background: "var(--cta)", borderColor: "var(--cta)" }} />
            </div>
          </div>
        </SiteScaffold>
      );

    case 'hiddenNav':
      return (
        <SiteScaffold label="Website / Hidden Nav" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          <div className={`${fillHeight ? 'h-full' : ''} flex flex-col`} style={fillHeight ? {} : { height: '280px', minHeight: '280px' }}>
            <div className={`${fillHeight ? 'flex-1 min-h-0' : 'h-full'} flex flex-col`} style={fillHeight ? {} : { minHeight: '100%' }}>
              <div className="h-2 w-10 rounded mb-3 flex-shrink-0" style={{ background: "var(--stroke)" }} />
              <div
                className={`rounded-xl border ${fillHeight ? 'flex-1' : 'flex-1'} mb-3`}
                style={{ 
                  background: "linear-gradient(180deg,var(--elev),var(--panel))", 
                  borderColor: "var(--stroke)",
                  minHeight: '0',
                  flex: '1 1 0%'
                }}
              />
              <div className="h-2.5 w-full rounded mb-3 flex-shrink-0" style={{ background: "var(--stroke)" }} />
              <div className="h-2.5 w-full rounded flex-shrink-0" style={{ background: "var(--stroke)" }} />
            </div>
          </div>
        </SiteScaffold>
      );

    case 'interactiveCarousel':
      return (
        <SiteScaffold label="Website / Interactive" themeVars={themeVars} showNav={showNav} showFooter={showFooter} stickyFooter={stickyFooter} fillHeight={fillHeight}>
          <div
            className={`flex flex-col ${fillHeight ? "h-full" : ""}`}
            style={fillHeight ? {} : { height: "280px" }}
          >
            {/* Main carousel / display area – visible square layout */}
            <div
              className={`relative rounded-2xl border overflow-hidden ${fillHeight ? "flex-1 min-h-[200px]" : "flex-1"}`}
              style={{
                borderColor: "var(--stroke)",
                minHeight: fillHeight ? "200px" : undefined,
              }}
            >
              <div
                className="h-full w-full rounded-2xl"
                style={{ background: "linear-gradient(180deg,var(--elev),var(--panel))" }}
              />
              <div
                className="absolute inset-y-0 left-0 w-10 rounded-l-xl"
                style={{ background: "rgba(0,0,0,0.1)" }}
              />
              <div
                className="absolute inset-y-0 right-0 w-10 rounded-r-xl"
                style={{ background: "rgba(0,0,0,0.1)" }}
              />
            </div>
            {/* Carousel dots */}
            <div className="mt-3 flex justify-center gap-2 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
              ))}
            </div>
          </div>
        </SiteScaffold>
      );

    default:
      return null;
  }
}
