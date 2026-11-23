import React, { useState } from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function BookMockup3D({ onOpenSample }) {
  const [tilt, setTilt] = useState({ x: 4, y: -14 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Math.max(-12, Math.min(12, -yPct * 18)),
      y: Math.max(-24, Math.min(12, -12 + xPct * 24)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 4, y: -14 });
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center py-6 select-none perspective-1200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Aura luminosa atrás do livro */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-amber-500/25 via-dawn-gold/20 to-sky-400/10 blur-3xl animate-pulse-glow pointer-events-none" />

      {/* Livro 3D Interativo */}
      <div
        onClick={onOpenSample}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && onOpenSample()}
        aria-label="Abrir degustação da obra Qual parte do Espiritismo você não entendeu?"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        className="group relative w-[290px] sm:w-[330px] h-[435px] sm:h-[490px] cursor-pointer preserve-3d shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]"
      >
        {/* Lombada do Livro */}
        <div
          style={{ transform: 'rotateY(-90deg) translateZ(16px)' }}
          className="absolute top-0 left-0 w-[32px] h-full bg-gradient-to-b from-slate-800 via-amber-900 to-stone-900 border-l border-amber-300/20 flex items-center justify-center overflow-hidden"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase text-amber-200/80 whitespace-nowrap -rotate-90 font-medium">
            Geraldo Corrêa de Lyra Junior • Qual parte do Espiritismo você não entendeu?
          </span>
        </div>

        {/* Corte das Páginas (Lateral Direita) */}
        <div
          style={{ transform: 'rotateY(90deg) translateZ(274px)' }}
          className="hidden sm:block absolute top-[4px] right-0 w-[28px] h-[482px] bg-gradient-to-r from-stone-200 via-amber-50 to-stone-300 opacity-95"
        />

        {/* Capa Frontal Ilustrada */}
        <div className="relative w-full h-full rounded-r-xl rounded-l-sm overflow-hidden border border-amber-200/30 bg-gradient-to-b from-[#274B6D] via-[#89A5A6] to-[#2B331F] flex flex-col justify-between p-6 text-center">
          {/* Céu & Amanhecer Dourado */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_46%,rgba(255,244,196,0.98)_0%,rgba(246,193,92,0.72)_22%,rgba(123,157,156,0.28)_55%,rgba(24,42,64,0.85)_100%)] pointer-events-none" />

          {/* Montanhas & Vale estilizados em SVG */}
          <svg
            viewBox="0 0 400 560"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <defs>
              <linearGradient id="sunGlow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF7D6" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lakeGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3B6978" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#FDE68A" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#4A6B5D" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="pathGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#5C5338" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* Montanhas ao fundo */}
            <path d="M0 265 Q95 215 190 250 T400 235 L400 340 L0 340 Z" fill="#476A78" opacity="0.65" />
            <path d="M0 285 Q120 255 245 280 T400 265 L400 365 L0 365 Z" fill="#3B5B61" opacity="0.75" />

            {/* Rio iluminado */}
            <path d="M0 325 Q140 300 280 315 L400 325 L400 385 Q210 365 0 415 Z" fill="url(#lakeGrad)" />

            {/* Encosta verdejante */}
            <path d="M0 375 Q170 335 400 350 L400 560 L0 560 Z" fill="#364628" />
            <path d="M120 560 Q210 430 295 348 L335 352 Q280 445 250 560 Z" fill="url(#pathGrad)" />

            {/* Silhueta do caminhante rumo à luz */}
            <g transform="translate(292, 316)">
              <circle cx="8" cy="5" r="3.2" fill="#1C1917" />
              <path d="M4 10 L12 10 L13 22 L10 22 L10 32 L6 32 L6 22 L3 22 Z" fill="#1C1917" />
            </g>
          </svg>

          {/* Tipografia Superior da Capa */}
          <div className="relative z-10 pt-2">
            <p className="font-serif text-stone-900/90 text-xl sm:text-2xl font-semibold tracking-tight leading-none drop-shadow-[0_1px_8px_rgba(255,255,255,0.45)]">
              Qual parte do
            </p>
            <h2 className="font-serif text-[34px] sm:text-[40px] font-bold tracking-wide leading-tight bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)]">
              ESPIRITISMO
            </h2>
            <p className="font-serif text-stone-900 text-xl sm:text-2xl font-semibold leading-none -mt-1 drop-shadow-[0_1px_8px_rgba(255,255,255,0.4)]">
              você não entendeu?
            </p>
            <p className="font-serif italic text-stone-900/90 text-xs sm:text-sm mt-2.5 leading-snug max-w-[210px] mx-auto font-medium">
              Respostas simples para grandes perguntas da alma
            </p>
          </div>

          {/* Brilho especular interativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Nome do Autor na Base da Capa */}
          <div className="relative z-10 pb-1">
            <div className="w-12 h-[1px] bg-amber-200/60 mx-auto mb-2" />
            <p className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-stone-100 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Geraldo Corrêa de Lyra Junior
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={onOpenSample}
        className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm text-amber-200/90 hover:text-amber-100 bg-white/5 hover:bg-white/10 border border-amber-300/25 px-4 py-2 rounded-full transition-all"
      >
        <BookOpen className="w-4 h-4 text-dawn-gold" />
        <span>Clique na capa para folhear trechos reais</span>
        <Sparkles className="w-3.5 h-3.5 text-dawn-gold" />
      </button>
    </div>
  );
}
