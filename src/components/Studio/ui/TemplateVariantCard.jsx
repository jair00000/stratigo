import React from 'react';

const TemplateVariantCard = ({ name, subtitle, preview, active }) => {
  return (
    <button
      className={`group relative aspect-video rounded-xl border-2 overflow-hidden transition-all duration-300 hover:scale-[1.01] ${
        active
          ? 'border-[#2563EB] ring-2 ring-[#2563EB]/50 shadow-lg shadow-[#2563EB]/20'
          : 'border-white/10 hover:border-white/20 shadow-md hover:shadow-lg'
      }`}
      style={{
        backgroundImage: active 
          ? 'radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)'
          : 'none'
      }}
    >
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundSize: '200px 200px'
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex flex-col items-center justify-center">
        {preview ? (
          <img 
            src={preview} 
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        ) : (
          <div className="text-center p-4">
            <svg className="w-10 h-10 text-white/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs text-white/50 font-medium block">{name}</span>
            {subtitle && (
              <span className="text-xs text-white/30 block mt-1">{subtitle}</span>
            )}
          </div>
        )}
      </div>
      
      {/* Bottom label overlay */}
      <div className={`absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t ${
        active ? 'from-[#2563EB]/20 to-transparent' : 'from-black/40 to-transparent'
      } backdrop-blur-sm`}>
        <div className="text-left px-2">
          <div className={`text-xs font-semibold ${active ? 'text-white' : 'text-white/70'}`}>
            {name}
          </div>
          {subtitle && (
            <div className="text-xs text-white/50">{subtitle}</div>
          )}
        </div>
      </div>
      
      {active && (
        <div className="absolute top-2 right-2 w-6 h-6 bg-[#2563EB] rounded-full flex items-center justify-center shadow-lg ring-2 ring-white/20">
          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default TemplateVariantCard;



