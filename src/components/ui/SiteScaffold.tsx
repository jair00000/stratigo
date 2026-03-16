import React from 'react';

type Props = {
  label: string;
  themeVars?: React.CSSProperties;
  children: React.ReactNode;
  showNav?: boolean;
  showFooter?: boolean;
  stickyFooter?: boolean;
  fillHeight?: boolean;
};

export function SiteScaffold({ label, themeVars, children, showNav = true, showFooter = true, stickyFooter = false, fillHeight = false }: Props) {
  return (
    <div
      className={`w-full flex flex-col rounded-2xl overflow-hidden border ${fillHeight ? 'h-full' : ''}`}
      style={{
        // Variables injected here
        ...themeVars,
        // Layered background: vignette + canvas gradient
        background:
          `radial-gradient(120% 100% at 50% 0%, color-mix(in oklab, var(--bg), transparent 45%) 0%, transparent 60%),
           linear-gradient(180deg, var(--canvas) 0%, color-mix(in oklab, var(--canvas), var(--bg) 20%) 100%)`,
        borderColor: 'var(--stroke)',
        color: 'var(--text)',
        ...(fillHeight ? { height: '100%', maxHeight: '100%', minHeight: 0 } : {}),
      }}
    >
      {/* Navbar */}
      {showNav && (
        <div className="h-12 px-4 flex items-center gap-3 border-b flex-shrink-0"
             style={{ background: "var(--chrome)", borderColor: "var(--stroke)" }}>
          <div className="h-7 w-7 rounded-full border" style={{ background: "var(--accent)", borderColor: "var(--stroke)" }} />
          <div className="h-3 w-32 rounded" style={{ background: "var(--stroke)" }} />
          <div className="ml-auto h-3 w-20 rounded" style={{ background: "var(--stroke)" }} />
        </div>
      )}

      {/* fillHeight: flex column so footer can sit at bottom with marginTop auto */}
      <div
        className={fillHeight ? 'flex-1 min-h-0 flex flex-col' : stickyFooter ? 'grid grid-rows-[1fr_auto]' : 'flex flex-col'}
        style={fillHeight ? { minHeight: 0 } : undefined}
      >
        {/* Stage – grows, can shrink so footer stays in view */}
        <div className={fillHeight ? 'flex-1 min-h-0 overflow-hidden' : ''}>
          <div className={`${fillHeight ? 'h-full min-h-0 overflow-auto' : ''} p-6`} style={fillHeight ? { display: 'flex', flexDirection: 'column', minHeight: 0 } : { display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
        </div>

        {/* Footer – at bottom: flex-shrink-0 and marginTop auto when fillHeight */}
        {showFooter && (
          <div
            className={`flex items-center px-6 py-3 border-t flex-shrink-0 ${stickyFooter ? 'sticky bottom-0' : ''}`}
            style={{
              background: "var(--panel)",
              borderColor: "var(--stroke)",
              position: stickyFooter ? 'sticky' : 'relative',
              zIndex: 10,
              minHeight: fillHeight ? 72 : 44,
              ...(fillHeight ? { marginTop: 'auto' } : {}),
            }}
          >
            <span className="text-sm" style={{ color: 'var(--text)', opacity: 0.9 }}>Website Layout</span>
          </div>
        )}
      </div>
    </div>
  );
}

