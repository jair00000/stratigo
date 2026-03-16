import React, { useEffect } from 'react';
import SectionCard from '../inspector/SectionCard';
import { SegmentedControl } from '../inspector/SegmentedControl';
import MultiPatternSelector from '../inspector/MultiPatternSelector';

const EditorPanel = ({
  artifact,
  setArtifact,
  websitePatterns,
  setWebsitePatterns,
  onReset,
  onSaveDesign,
  panelVisible,
  onTogglePanel
}) => {
  // When switching artifacts, default the pattern
  useEffect(() => {
    if (artifact === 'website' && websitePatterns.length === 0) {
      setWebsitePatterns(['twoColumn']);
    }
    // (mobile/crm will be added later)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artifact]);

  return (
    <div className="h-full bg-white/10 backdrop-blur-xl border-l border-white/10 overflow-y-auto scrollbar-left">
      <div className="p-4 sm:p-6 space-y-5">
          {/* Header with Toggle Button */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <button
                onClick={onTogglePanel}
                className="w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white text-gray-800 rounded-lg transition-all duration-200 flex-shrink-0 shadow-sm hover:shadow-md"
                aria-label={panelVisible ? 'Hide control panel' : 'Show control panel'}
              >
                <span className="text-base font-semibold leading-none">
                  {panelVisible ? '×' : '>'}
                </span>
              </button>
              <h2 className="text-2xl font-semibold text-white/90">Design Studio</h2>
            </div>
          </div>

          {/* Artifact */}
          <SectionCard
            title="Artifact"
            helper="Pick what you want to visualize."
          >
            <SegmentedControl
              value={artifact}
              onChange={setArtifact}
              options={[
                {
                  value: 'website',
                  label: 'Website',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                },
                {
                  value: 'mobileApp',
                  label: 'Mobile App',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )
                },
                {
                  value: 'crm',
                  label: 'CRM',
                  icon: (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                }
              ]}
            />
          </SectionCard>

          {/* Section - Layout Pattern */}
          <SectionCard
            title="Section"
            helper="Pick 3-5 layouts to stack. First chosen appears at top."
          >
            {artifact === 'website' && (
              <MultiPatternSelector 
                patterns={websitePatterns} 
                onChange={setWebsitePatterns} 
              />
            )}
            {artifact !== 'website' && (
              <div className="text-xs text-white/50">Other artifacts coming next.</div>
            )}
          </SectionCard>
        </div>
      </div>
  );
};

export default EditorPanel;
