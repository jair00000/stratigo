import React from 'react';

export function ActionsBar({
  onApply,
  onReset,
  onSave
}: {
  onApply: () => void;
  onReset: () => void;
  onSave: () => void;
}) {
  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={onApply}
        className="flex-1 h-11 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors"
      >
        Apply Prompt
      </button>
      <button
        onClick={onReset}
        className="h-11 px-4 rounded-xl bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition-colors"
      >
        Reset
      </button>
      <button
        onClick={onSave}
        className="h-11 px-4 rounded-xl bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition-colors"
      >
        Save
      </button>
    </div>
  );
}

