import { contrastRatio } from '../../color/utils';

export default function PalettePreview({
  swatches,
  onCopy
}: {
  swatches: string[];
  onCopy?: (hex: string) => void;
}) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {swatches.map((hex) => (
        <button
          key={hex}
          onClick={() => onCopy?.(hex)}
          title={`${hex}`}
          className="rounded-xl border border-white/10 h-16 flex items-end justify-start p-2 text-xs transition hover:scale-105"
          style={{
            background: hex,
            color: contrastRatio(hex, '#000') > 4.5 ? '#000' : '#fff'
          }}
        >
          {hex}
        </button>
      ))}
    </div>
  );
}

