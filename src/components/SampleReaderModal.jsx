import React, { useState } from 'react';
import { X, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { SAMPLE_EXCERPTS } from '../data/bookData';

export default function SampleReaderModal({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isOpen) return null;

  const current = SAMPLE_EXCERPTS[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
    >
      <div className="relative w-full max-w-2xl rounded-2xl parchment-texture text-dawn-ink shadow-2xl border border-amber-900/20 overflow-hidden">
        {/* Barra Superior do Leitor */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-900 text-stone-100 border-b border-amber-500/20">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-5 h-5 text-dawn-gold" />
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-300/80">Degustação Oficial</p>
              <h3 id="sample-modal-title" className="font-serif text-base sm:text-lg font-semibold leading-tight">
                Qual parte do Espiritismo você não entendeu?
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Fechar leitor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Seletor de Abas */}
        <div className="flex flex-wrap gap-2 px-6 pt-5 pb-2 border-b border-stone-300/60">
          {SAMPLE_EXCERPTS.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition ${
                activeIndex === idx
                  ? 'bg-stone-900 text-amber-200 shadow-sm'
                  : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300/80'
              }`}
            >
              {item.badge}
            </button>
          ))}
        </div>

        {/* Conteúdo da Página */}
        <div className="px-6 sm:px-10 py-8 max-h-[62vh] overflow-y-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            {current.badge}
          </span>
          <h4 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1 mb-5">
            {current.title}
          </h4>
          <div className="space-y-4 font-serif text-lg sm:text-xl leading-relaxed text-stone-800">
            {current.paragraphs.map((p, idx) => (
              <p key={idx} className="indent-6">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Rodapé de Navegação */}
        <div className="flex items-center justify-between px-6 py-4 bg-stone-200/70 border-t border-stone-300/80">
          <button
            type="button"
            disabled={activeIndex === 0}
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-700 disabled:opacity-40 hover:text-stone-950"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </button>

          <span className="text-xs text-stone-600 font-medium">
            Trecho {activeIndex + 1} de {SAMPLE_EXCERPTS.length}
          </span>

          {activeIndex < SAMPLE_EXCERPTS.length - 1 ? (
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => Math.min(SAMPLE_EXCERPTS.length - 1, prev + 1))}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-900 hover:text-amber-700"
            >
              Próximo trecho
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <a
              href="#adquirir"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-sm font-semibold bg-stone-900 text-amber-200 px-4 py-2 rounded-lg hover:bg-stone-800 transition"
            >
              Garantir meu exemplar
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
