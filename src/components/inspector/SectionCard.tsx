import React from 'react';

export default function SectionCard({ title, helper, children }: {
  title: string;
  helper?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_6px_24px_rgba(0,0,0,0.18)]">
      <div className="mb-3 flex items-start justify-between">
        <div>
          <h3 className="text-white/90 font-semibold">{title}</h3>
          {helper && <p className="text-xs text-white/50 mt-0.5">{helper}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

