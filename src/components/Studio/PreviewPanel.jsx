import React from 'react';
import RenderWebsitePattern from '../../wireframe/patterns-website';
import { buildThemeVars } from '../../utils/theme-vars';

const BROWSER_TITLE_BAR_HEIGHT = 52;

const PreviewPanel = ({ artifact, device, websitePatterns, previewImage, panelVisible, onTogglePanel, onDeviceChange, colorTokens }) => {
  const [imageError, setImageError] = React.useState(false);
  const [contentKey, setContentKey] = React.useState(0);
  const [zoom, setZoom] = React.useState(1);
  const [theme, setTheme] = React.useState('light');
  const [showGrid, setShowGrid] = React.useState(false);
  const [previewWidth, setPreviewWidth] = React.useState(1200); // px, adjustable width similar to Projects preview
  const [multiBlockCanvasHeight, setMultiBlockCanvasHeight] = React.useState(720);
  const previewSlotRef = React.useRef(null);

  // Trigger crossfade animation on artifact, device, or pattern change
  React.useEffect(() => {
    setContentKey(prev => prev + 1);
  }, [artifact, device, websitePatterns]);

  // Zoom to fit on load
  React.useEffect(() => {
    setZoom(1);
  }, [artifact, device]);

  // Get width class based on artifact and device
  const getWidthClass = () => {
    if (artifact === 'website') {
      if (device === 'desktop') return 'max-w-[1100px]';
      if (device === 'tablet') return 'max-w-[800px]';
      return 'max-w-[420px]';
    }
    if (artifact === 'crm') {
      if (device === 'desktop') return 'max-w-[1200px]';
      return 'max-w-[900px]';
    }
    return 'max-w-[420px]'; // mobileApp
  };

  // Debug: log when patterns change
  React.useEffect(() => {
    if (artifact === 'website' && websitePatterns?.length > 0) {
      console.log('Patterns changed to:', websitePatterns);
    }
  }, [artifact, websitePatterns]);

  // Measure preview slot so multi-block browser fits and the inner scrollbar can reach the end
  React.useEffect(() => {
    if (artifact !== 'website' || !websitePatterns?.length || websitePatterns.length <= 1) return;
    const el = previewSlotRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const h = el.clientHeight;
      const contentH = Math.min(720, Math.max(360, h - BROWSER_TITLE_BAR_HEIGHT));
      setMultiBlockCanvasHeight(contentH);
    });
    ro.observe(el);
    const h = el.clientHeight;
    const contentH = Math.min(720, Math.max(360, h - BROWSER_TITLE_BAR_HEIGHT));
    setMultiBlockCanvasHeight(contentH);
    return () => ro.disconnect();
  }, [artifact, websitePatterns?.length]);

  // Realistic placeholder UI blocks with true wireframe content
  const renderPlaceholderUI = () => {
    if (artifact === 'website' && websitePatterns?.length > 0) {
      // Theme-aware vars: buildThemeVars supports light/dark; use theme state so toggle works
      const styleVars = colorTokens
        ? {
            '--bg': colorTokens.bg,
            '--panel': colorTokens.panel,
            '--elev': colorTokens.elev,
            '--stroke': colorTokens.stroke,
            '--cta': colorTokens.cta,
            '--accent': colorTokens.accent,
            '--chrome': colorTokens.panel,
            '--canvas': colorTokens.bg,
            '--text': theme === 'light' ? 'hsl(210 18% 12%)' : 'hsl(210 18% 90%)',
            background: 'var(--bg)',
          }
        : { ...buildThemeVars({ baseHue: 210, harmony: 'split', mode: theme }), background: 'var(--bg)' };
      
      const firstPattern = websitePatterns[0];
      const shouldHideNavOnFirst = firstPattern === 'hiddenNav';
      const isSingleSection = websitePatterns.length === 1;
      const canvasHeight = '720px';

      // One block: fill the canvas (no scroll). Two+ blocks: canvas fixed 720px, each block 720px, scroll.
      if (isSingleSection) {
        return (
          <div
            className="relative w-full rounded-2xl flex flex-col overflow-hidden"
            style={{ ...styleVars, height: canvasHeight }}
          >
            <div className="w-full flex-1 min-h-0 flex flex-col">
              {websitePatterns.map((pattern, index) => {
                const isLast = index === websitePatterns.length - 1;
                const showNav = index === 0 && !shouldHideNavOnFirst;
                const showFooter = isLast;
                const layoutMode =
                  previewWidth <= 640 ? 'mobile' : previewWidth <= 1024 ? 'tablet' : 'desktop';
                return (
                  <div key={`${pattern}-${index}`} className="flex-1 min-h-0 flex flex-col">
                    <RenderWebsitePattern
                      pattern={pattern}
                      themeVars={styleVars}
                      showNav={showNav}
                      showFooter={showFooter}
                      stickyFooter={true}
                      fillHeight={true}
                      isNarrow={previewWidth <= 640}
                      layoutMode={layoutMode}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      // Multiple blocks: viewport height fits in preview slot so scrollbar isn't clipped and can reach the end.
      const fixedH = multiBlockCanvasHeight;
      return (
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            ...styleVars,
            width: '100%',
            height: fixedH,
            minHeight: fixedH,
            maxHeight: fixedH,
            flexShrink: 0,
            alignSelf: 'flex-start',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="browser-scroll"
            style={{
              width: '100%',
              height: fixedH,
              minHeight: fixedH,
              maxHeight: fixedH,
              overflowY: 'auto',
              overflowX: 'hidden',
              boxSizing: 'border-box',
            }}
          >
            <div>
            {websitePatterns.map((pattern, index) => {
              const isLast = index === websitePatterns.length - 1;
              const showNav = index === 0 && !shouldHideNavOnFirst;
              const showFooter = isLast; // only the last block gets the footer
              const layoutMode =
                previewWidth <= 640 ? 'mobile' : previewWidth <= 1024 ? 'tablet' : 'desktop';
              return (
                <div
                  key={`${pattern}-${index}`}
                  style={{
                    height: fixedH,
                    minHeight: fixedH,
                    maxHeight: fixedH,
                    overflow: 'hidden',
                    boxSizing: 'border-box',
                    marginBottom: index < websitePatterns.length - 1 ? 24 : 0,
                  }}
                >
                  <RenderWebsitePattern
                    pattern={pattern}
                    themeVars={styleVars}
                    showNav={showNav}
                    showFooter={showFooter}
                    stickyFooter={false}
                    fillHeight={true}
                    isNarrow={previewWidth <= 640}
                    layoutMode={layoutMode}
                  />
                </div>
              );
            })}
            </div>
          </div>
        </div>
      );
    }

    if (artifact === 'mobileApp') {
      return (
        <div className="w-full h-full p-6 space-y-4 bg-gradient-to-b from-white to-gray-100 shadow-inner">
          <div className="h-4 w-1/2 rounded bg-gray-300/40" />
          <div className="h-28 rounded-2xl bg-gray-200/30 shimmer" />
          <div className="space-y-2">
            <div className="h-3 w-4/5 rounded bg-gray-300/25" />
            <div className="h-3 w-3/5 rounded bg-gray-300/15" />
          </div>
          <div className="h-10 w-36 rounded-lg bg-gray-300/25" />
        </div>
      );
    }

    if (artifact === 'crm') {
      return (
        <div className="w-full h-full p-6 space-y-6 bg-gradient-to-b from-white to-gray-100 shadow-inner overflow-y-auto">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-20 rounded-xl bg-gray-200/25 shimmer" />
            ))}
          </div>
          <div className="h-7 w-1/3 rounded bg-gray-300/30" />
          <div className="h-40 rounded-xl bg-gray-200/20 shimmer" />
        </div>
      );
    }

    return null;
  };

  // Device mockup frames with enhanced realism
  // fixedContentHeight: when set (e.g. 720 for multi-block), browser content area is fixed height so content cannot stretch
  const renderDeviceFrame = (content, { fixedContentHeight } = {}) => {
    const widthClass = getWidthClass();
    const frameContent = (
      <>
        {artifact === 'website' && (
          <div
            className={`w-full mx-auto bg-gray-900 rounded-2xl shadow-[0_0_44px_rgba(37,99,235,0.18)] overflow-hidden transition-all duration-300 ease-out flex flex-col ${fixedContentHeight == null ? 'h-full' : ''}`}
            style={{
              width: previewWidth,
              maxWidth: '100%',
              ...(fixedContentHeight != null
                ? { flexShrink: 0, alignSelf: 'flex-start' }
                : {}),
            }}
          >
            {/* Browser Top Bar with Glossy Highlight */}
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-black/10 relative flex-shrink-0">
              {/* Glossy highlight */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-white/5 rounded-t-2xl"></div>
              <div className="flex gap-2 relative z-10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4 bg-gray-700 rounded-md px-4 py-1.5 text-xs text-gray-400 relative z-10">
                https://example.com
              </div>
            </div>
            {/* Browser Content - fixed height in multi-block so blocks don't stretch */}
            <div
              className="rounded-b-2xl flex-shrink-0"
              style={{
                background: colorTokens
                  ? colorTokens.bg
                  : buildThemeVars({ baseHue: 210, harmony: 'split', mode: theme })['--bg'],
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                overflow: 'hidden',
                minHeight: 0,
                ...(fixedContentHeight != null
                  ? {
                      height: fixedContentHeight,
                      minHeight: fixedContentHeight,
                      maxHeight: fixedContentHeight,
                    }
                  : { flex: 1 }),
              }}
            >
              {content || renderPlaceholderUI()}
            </div>
          </div>
        )}

        {artifact === 'mobileApp' && (
          <div
            className="w-full mx-auto transition-all duration-300 ease-out"
            style={{ width: Math.min(previewWidth, 480), maxWidth: "100%" }}
          >
            {/* iPhone Frame with Bezel/Shadow */}
            <div className="bg-gray-900 rounded-[2.5rem] p-2 shadow-[0_0_40px_rgba(37,99,235,0.18)] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              {/* Notch */}
              <div className="bg-gray-900 h-6 w-32 mx-auto rounded-b-2xl mb-2"></div>
              {/* Screen with rounded corners */}
              <div className="bg-white rounded-[18px] overflow-hidden aspect-[9/19.5] relative">
                {content || renderPlaceholderUI()}
                {/* Home Indicator Pill */}
                <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-black/30"></div>
              </div>
            </div>
          </div>
        )}

        {artifact === 'crm' && (
          <div
            className="w-full h-full mx-auto bg-gray-50 rounded-2xl shadow-[0_0_44px_rgba(37,99,235,0.18)] overflow-hidden transition-all duration-300 ease-out flex flex-col"
            style={{ width: previewWidth, maxWidth: "100%" }}
          >
            {/* Dashboard Top Bar */}
            <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#2563EB] rounded-lg"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar with Active Item */}
              <div className="w-20 bg-gray-100 border-r border-gray-200 p-4 space-y-4 flex-shrink-0">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className={`w-12 h-12 rounded-lg mx-auto ${
                      i === 1 ? 'bg-blue-500/20' : 'bg-gray-200'
                    }`}
                  ></div>
                ))}
              </div>
              {/* Main Content - Full Height */}
              <div className="flex-1 p-6 overflow-auto">
                {content || renderPlaceholderUI()}
              </div>
            </div>
          </div>
        )}
      </>
    );

    return (
      <div
        style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
        className="transition-transform duration-300 w-full h-full flex items-center justify-center"
      >
        {frameContent}
      </div>
    );
  };

  const getPreviewContent = () => {
    if (previewImage && !imageError) {
      const imageContent = (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#2563EB]/10 rounded-2xl blur-3xl"></div>
          <img 
            src={previewImage} 
            alt={`${artifact} preview`}
            className="relative w-full h-full object-contain rounded-xl"
            style={{ maxHeight: '100%' }}
            onError={() => setImageError(true)}
          />
        </div>
      );

      return (
        <div 
          key={contentKey}
          className="w-full h-full transition-all duration-250 ease-out opacity-0 scale-95 data-[enter=true]:opacity-100 data-[enter=true]:scale-100"
          data-enter={true}
        >
          {renderDeviceFrame(imageContent)}
        </div>
      );
    }

    // For website artifact, always show the pattern (not empty state)
    if (artifact === 'website' && websitePatterns?.length > 0) {
      const isMultiBlock = websitePatterns.length > 1;
      return (
        <div 
          key={`${contentKey}-${theme}`}
          className="w-full h-full transition-all duration-250 ease-out opacity-0 scale-95 data-[enter=true]:opacity-100 data-[enter=true]:scale-100"
          data-enter={true}
        >
          {renderDeviceFrame(null, isMultiBlock ? { fixedContentHeight: multiBlockCanvasHeight } : {})}
        </div>
      );
    }

    // Enhanced "No Preview Yet" illustration with improved clarity (for mobile/crm)
    const emptyState = (
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="h-16 w-16 rounded-2xl bg-white/10 text-white/70 flex items-center justify-center shadow-[0_0_24px_rgba(255,255,255,0.08)] animate-pulse" style={{ animationDuration: '1500ms' }}>
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-white/90">
          {artifact === 'mobileApp' && 'Mobile App Preview'}
          {artifact === 'crm' && 'CRM Dashboard Preview'}
        </h3>
        <p className="mt-1 text-sm text-white/60">
          {imageError ? 'Preview image not found' : 'Describe your design and click "Apply Prompt".'}
        </p>
      </div>
    );

    return (
      <div 
        key={contentKey}
        className="w-full h-full transition-all duration-250 ease-out opacity-0 scale-95 data-[enter=true]:opacity-100 data-[enter=true]:scale-100"
        data-enter={true}
      >
        {renderDeviceFrame(emptyState)}
      </div>
    );
  };

  React.useEffect(() => {
    if (previewImage) {
      setImageError(false);
    }
  }, [previewImage]);

  return (
    <div className="h-full w-full bg-[#0B1120] relative overflow-hidden">
      {/* Dynamic Dark Gradient Backgrounds - Stacked for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.12),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(14,165,233,0.1),transparent_80%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_80%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/30 via-[#0B1120] to-navy/20"></div>
      </div>
      
      {/* Canvas Toolbar - Top Left (width control + theme) */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-4 rounded-xl bg-white/8 border border-white/10 backdrop-blur-md px-4 py-2.5 shadow-[0_6px_30px_rgba(0,0,0,0.35)]">
        <span className="text-xs sm:text-sm font-medium text-white/80 whitespace-nowrap">
          Canvas width
        </span>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={370}
            max={1440}
            value={previewWidth}
            onChange={(e) => setPreviewWidth(Number(e.target.value))}
            className="w-32 sm:w-40 accent-blue-400 cursor-ew-resize"
          />
          <span className="hidden sm:inline text-[11px] text-white/60 tabular-nums w-14 text-right">
            {previewWidth}px
          </span>
        </div>

        {/* Divider */}
        <div className="h-6 w-px bg-white/20" />

        {/* Theme */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="px-3 py-1.5 rounded text-white/70 hover:bg-white/10 text-xs transition-colors"
        >
          {theme === 'dark' ? '☀︎ Light' : '🌙 Dark'}
        </button>
      </div>

      {/* Show Panel Button - Only visible when panel is hidden */}
      {!panelVisible && (
        <button
          onClick={onTogglePanel}
          className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          aria-label="Show control panel"
        >
          <span className="text-base font-semibold leading-none">{'>'}</span>
        </button>
      )}
      
      {/* Preview Container - Floating Canvas Frame with Hero Lighting */}
      <div className="relative z-10 h-full w-full flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 overflow-hidden group">
        {/* Parallax Gradient Layers */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl will-change-transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl will-change-transform group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
        </div>
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0),rgba(0,0,0,0.25))] pointer-events-none"></div>
        
        {/* Main Canvas Frame */}
        <div className="relative w-full h-full max-w-full max-h-full rounded-3xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-md p-10 flex items-center justify-center overflow-hidden transition-all duration-300 ease-out">
          {/* Grid Overlay */}
          {showGrid && (
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl" />
          )}
          <div ref={previewSlotRef} className="w-full h-full flex items-center justify-center transition-all duration-300 ease-out">
            {getPreviewContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
