const ROLES = ['primary', 'secondary', 'accent', 'surface', 'surfaceAlt', 'text', 'subtext', 'border'] as const;
type Role = (typeof ROLES)[number];

export default function RoleMapper({
  swatches,
  roles,
  onChange
}: {
  swatches: string[];
  roles: Record<Role, string>;
  onChange: (r: Role, hex: string) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {ROLES.map((role) => (
        <div key={role} className="rounded-xl border border-white/10 p-3">
          <div className="text-xs text-white/60 mb-2 capitalize">{role}</div>
          <div className="flex gap-2 flex-wrap">
            {swatches.map((hex) => (
              <button
                key={hex}
                className={`h-7 w-7 rounded-full border transition ${
                  roles[role] === hex ? 'ring-2 ring-white border-white/30' : 'border-white/20 hover:border-white/40'
                }`}
                style={{ background: hex }}
                onClick={() => onChange(role, hex)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

