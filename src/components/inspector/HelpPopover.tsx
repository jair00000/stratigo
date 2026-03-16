import React, { useState } from 'react';

export function HelpPopover() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-6 h-6 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 flex items-center justify-center text-xs transition-colors"
        aria-label="Help"
      >
        ?
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-8 w-64 rounded-xl border border-white/10 bg-white/10 backdrop-blur-md p-4 shadow-lg z-20">
            <p className="text-sm text-white/80">
              Use the canvas toolbar to switch devices. Press Ctrl/Cmd+Enter in the prompt to apply.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

