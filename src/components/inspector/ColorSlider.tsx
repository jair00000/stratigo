export default function ColorSlider({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  isHue = false
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  isHue?: boolean;
}) {
  return (
    <label className="block text-sm text-white/70 mb-3">
      <div className="flex items-center justify-between mb-2">
        <span>{label}</span>
        {isHue && (
          <div
            className="w-8 h-8 rounded border border-white/20"
            style={{
              background: `hsl(${value}, 70%, 50%)`
            }}
          />
        )}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-blue-500"
        style={
          isHue
            ? {
                background: `linear-gradient(to right, 
                  hsl(0, 70%, 50%), 
                  hsl(60, 70%, 50%), 
                  hsl(120, 70%, 50%), 
                  hsl(180, 70%, 50%), 
                  hsl(240, 70%, 50%), 
                  hsl(300, 70%, 50%), 
                  hsl(360, 70%, 50%))`,
                borderRadius: '4px',
                height: '8px'
              }
            : {}
        }
      />
    </label>
  );
}

