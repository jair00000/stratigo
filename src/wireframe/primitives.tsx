import React from 'react';

// Simple wireframe primitives - shapes only, no text (using CSS variables)

export function Line({ w = 'w-full', h = 'h-3', className = '' }: { w?: string; h?: string; className?: string }) {
  return <div className={`rounded ${w} ${h} ${className}`} style={{ background: 'var(--stroke)' }} />;
}

export function Card({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <div 
      className={`rounded-2xl p-4 border ${className}`}
      style={{ 
        background: 'var(--panel)', 
        borderColor: 'var(--stroke)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.22)'
      }}
    >
      {children}
    </div>
  );
}

export function EmphasisBlock({ className = '', wide = false }: { className?: string; wide?: boolean }) {
  return (
    <div 
      className={`h-10 rounded-xl border ${wide ? 'w-40' : 'min-w-[96px]'} ${className}`}
      style={{ background: 'var(--cta)', borderColor: 'var(--cta)' }} 
    />
  );
}

export function ImgBlock({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div 
      className={`rounded-2xl w-full ${className}`}
      style={{
        background: 'linear-gradient(180deg, var(--elev), var(--panel))',
        border: '1px solid var(--stroke)',
        ...style
      }}
    />
  );
}

export function MarkerDot({ className = '' }: { className?: string }) {
  return <div className={`h-2 w-2 rounded-full ${className}`} style={{ background: 'var(--accent)' }} />;
}

export function ActiveOutline({
  active,
  className = '',
  children
}: {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ 
        outline: active ? '2px solid var(--stroke)' : undefined,
        borderRadius: '1rem'
      }}
    >
      {children}
    </div>
  );
}

