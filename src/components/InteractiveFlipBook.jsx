import React, { useState } from 'react';
import { BookOpen, RotateCcw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SAMPLE_EXCERPTS } from '../data/bookData';

export default function InteractiveFlipBook({ isOpen, onToggleOpen }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageTurning, setPageTurning] = useState(false);

  const currentExcerpt = SAMPLE_EXCERPTS[pageIndex];

  const handleTurnPage = (direction) => {
    setPageTurning(true);
    setTimeout(() => {
      setPageIndex((prev) => {
        if (direction === 'next') return (prev + 1) % SAMPLE_EXCERPTS.length;
        return (prev - 1 + SAMPLE_EXCERPTS.length) % SAMPLE_EXCERPTS.length;
      });
      setPageTurning(false);
    }, 200);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full select-none">
      <div className="relative flex items-center justify-center">
        <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-tr from-amber-300/35 via-teal-200/30 to-sky-200/35 blur-2xl animate-pulse-classic pointer-events-none" />

        <div className="relative w-[310px] sm:w-[370px] h-[475px] sm:h-[545px] overflow-hidden rounded-r-2xl rounded-l-md shadow-[0_28px_65px_-12px_rgba(15,37,55,0.42)]">
          {isOpen ? (
            <div className="w-full h-full classic-paper border-2 border-amber-400/80 flex flex-col justify-between p-5 sm:p-7 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-5 bg-gradient-to-r from-amber-900/15 via-slate-900/5 to-transparent pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between gap-2 pb-3 border-b border-amber-300/70 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-amber-300 border border-amber-500 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3 text-black" />
                  {currentExcerpt.badge}
                </span>

                <button
                  type="button"
                  onClick={onToggleOpen}
                  className="inline-flex items-center gap-1 text-xs font-bold text-black hover:bg-amber-100 bg-white border border-slate-400 px-2.5 py-1 rounded-full transition"
                  title="Fechar capa do livro"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-black" />
                  <span>Fechar capa</span>
                </button>
              </div>

              <div
                className={`relative z-10 flex-1 overflow-y-auto py-3 pr-1 transition-all duration-200 ${
                  pageTurning ? 'opacity-0 translate-x-2' : 'opacity-100 translate-x-0'
                }`}
              >
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-black mb-3 leading-snug">
                  {currentExcerpt.title}
                </h3>

                <div className="space-y-3 font-serif text-[15.5px] sm:text-[17px] leading-relaxed text-black">
                  {currentExcerpt.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="indent-4 text-black">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-3 border-t border-amber-300/70 flex items-center justify-between text-xs shrink-0">
                <button
                  type="button"
                  onClick={() => handleTurnPage('prev')}
                  className="inline-flex items-center gap-1 font-bold text-black bg-white hover:bg-slate-100 border border-slate-400 px-3 py-1.5 rounded-lg transition"
                >
                  <ChevronLeft className="w-4 h-4 text-black" />
                  Anterior
                </button>

                <div className="flex items-center gap-1.5">
                  {SAMPLE_EXCERPTS.map((item, idx) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setPageIndex(idx)}
                      aria-label={`Ir para trecho ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all ${
                        pageIndex === idx ? 'w-6 bg-classic-navy' : 'w-2.5 bg-slate-400 hover:bg-slate-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleTurnPage('next')}
                  className="inline-flex items-center gap-1 font-bold text-black bg-[#38D3C2] hover:bg-[#2BC4B3] border border-black/30 px-3 py-1.5 rounded-lg transition"
                >
                  Próxima
                  <ChevronRight className="w-4 h-4 text-black" />
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={onToggleOpen}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onToggleOpen();
                }
              }}
              aria-label="Clique na capa do livro para virar a página e ler trechos reais"
              className="relative w-full h-full overflow-hidden border-2 border-amber-400/80 bg-[#1F3A52] cursor-pointer group"
            >
              <img
                src="/capa.jpg"
                alt="Capa do livro Qual parte do Espiritismo você não entendeu? de Geraldo Corrêa de Lyra Junior"
                className="w-full h-full object-cover object-center opacity-100 block transition-transform duration-500 group-hover:scale-[1.02]"
              />

              <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />

              <div className="absolute bottom-3.5 inset-x-3 flex justify-center">
                <span className="inline-flex items-center gap-2 bg-white text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-black/20">
                  <BookOpen className="w-3.5 h-3.5 text-black" />
                  <span>Clique na capa para abrir o livro</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={onToggleOpen}
        className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-black bg-[#38D3C2] hover:bg-[#2BC4B3] border border-black/30 px-5 py-2.5 rounded-full shadow-md transition-all"
      >
        {isOpen ? (
          <>
            <RotateCcw className="w-4 h-4 text-black" />
            <span>Fechar livro e ver a capa</span>
          </>
        ) : (
          <>
            <BookOpen className="w-4 h-4 text-black" />
            <span>Virar a página e ler o livro agora</span>
          </>
        )}
      </button>
    </div>
  );
}
