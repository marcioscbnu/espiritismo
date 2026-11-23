import React, { useState } from 'react';
import {
  BookOpen,
  Compass,
  Feather,
  Heart,
  Sparkles,
  Check,
  Copy,
  ChevronDown,
  ShieldCheck,
  Sun,
  Quote,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';
import InteractiveFlipBook from './components/InteractiveFlipBook';
import { SOUL_QUESTIONS, DOCTRINAL_TOPICS, PUBLISHER_BOOK_URL } from './data/bookData';
import logoDark from '../logomarca.jpg';
import authorPhoto from './assets/autor.jpg';
import javaTechLogo from './assets/javatech-logo.png';

export default function App() {
  const [openQuestionId, setOpenQuestionId] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(DOCTRINAL_TOPICS[0]);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [copiedIsbn, setCopiedIsbn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderFormat, setOrderFormat] = useState('impresso');
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const handleCopyIsbn = () => {
    navigator.clipboard?.writeText('978-85-366-7529-9');
    setCopiedIsbn(true);
    setTimeout(() => setCopiedIsbn(false), 2500);
  };

  const handleOrderReserve = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => setOrderSubmitted(false), 6000);
  };

  const handleOpenBookAndScroll = () => {
    setIsBookOpen(true);
    const el = document.getElementById('livro-interativo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-classic-ivory text-black overflow-x-hidden">
      {/* MENU SUPERIOR FIXO COM ALTURA EXATA DE 80px E OFFSET DE ÂNCORA GARANTIDO */}
      <header className="fixed top-0 inset-x-0 h-20 z-50 bg-white/95 backdrop-blur-md text-black border-b-2 border-amber-400 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center group shrink-0" aria-label="Início">
            <img
              src={logoDark}
              alt="Logomarca GL"
              className="w-12 h-12 rounded-xl object-cover border-2 border-amber-500 shadow-md transition-transform group-hover:scale-105"
            />
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-black">
            <a
              href="#perguntas"
              className="text-black hover:text-gray-500 focus:text-gray-500 transition-colors duration-200"
            >
              As 6 Perguntas
            </a>
            <a
              href="#proposta"
              className="text-black hover:text-gray-500 focus:text-gray-500 transition-colors duration-200"
            >
              A Proposta
            </a>
            <a
              href="#temas"
              className="text-black hover:text-gray-500 focus:text-gray-500 transition-colors duration-200"
            >
              Temas da Obra
            </a>
            <a
              href="#autor"
              className="text-black hover:text-gray-500 focus:text-gray-500 transition-colors duration-200"
            >
              O Autor
            </a>
            <a
              href="#prece"
              className="text-black hover:text-gray-500 focus:text-gray-500 transition-colors duration-200"
            >
              Prece Final
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3.5 shrink-0">
            <button
              type="button"
              onClick={handleOpenBookAndScroll}
              className="text-sm font-bold text-black bg-[#38D3C2] hover:bg-[#2AC2B2] border border-black/30 px-4 py-2.5 rounded-xl shadow-md transition"
            >
              Folhear Livro
            </button>

            <a
              href={PUBLISHER_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-black bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 px-4 py-2.5 rounded-xl animate-cta-blink"
            >
              Adquirir Livro
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>

        {/* Menu Mobile Fixo */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-5 pt-3 bg-white border-t border-amber-400 shadow-xl space-y-3 text-sm font-bold text-black">
            <a
              href="#perguntas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black hover:text-gray-500 transition-colors"
            >
              As 6 Perguntas da Alma
            </a>
            <a
              href="#proposta"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black hover:text-gray-500 transition-colors"
            >
              Proposta Sem Imposição
            </a>
            <a
              href="#temas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black hover:text-gray-500 transition-colors"
            >
              Temas Abordados
            </a>
            <a
              href="#autor"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black hover:text-gray-500 transition-colors"
            >
              Sobre o Autor
            </a>
            <a
              href="#prece"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-black hover:text-gray-500 transition-colors"
            >
              Prece de Encerramento
            </a>
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpenBookAndScroll();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#38D3C2] text-black font-bold border border-black/30"
              >
                Folhear Livro
              </button>
              <a
                href={PUBLISHER_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2.5 rounded-xl bg-amber-300 text-black font-bold text-center animate-cta-blink"
              >
                Adquirir Livro
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Espaçador exato do cabeçalho fixo */}
      <div className="h-20" />

      {/* PÁGINA 1: CAPA E APRESENTAÇÃO PRINCIPAL */}
      <section
        id="inicio"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-14 sm:py-20 overflow-hidden bg-gradient-to-br from-[#F7F3E8] via-[#FCFBF7] to-[#EDF5F9] border-b-2 border-amber-300/70"
      >
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-amber-300/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <a
              href={PUBLISHER_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-300 hover:bg-amber-400 text-black border border-amber-500 text-xs font-bold tracking-wide shadow-sm transition"
            >
              <Sun className="w-4 h-4 text-black" />
              <span className="text-black">Scortecci Editora • 1ª Edição • 140 Páginas</span>
              <ExternalLink className="w-3.5 h-3.5 text-black" />
            </a>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-[62px] font-bold leading-[1.06] tracking-tight text-black">
              Qual parte do{' '}
              <span className="text-classic-navy underline decoration-amber-400 decoration-4 underline-offset-8">
                Espiritismo
              </span>{' '}
              você não entendeu?
            </h1>

            <p className="font-serif italic text-2xl sm:text-3xl text-black font-semibold">
              Respostas simples para grandes perguntas da alma
            </p>

            <p className="text-base sm:text-lg text-black leading-relaxed max-w-xl mx-auto lg:mx-0">
              Uma porta de entrada clara, serena e livre de dogmatismos para qualquer pessoa — espírita ou não —
              compreender a vida, o sofrimento, a reencarnação e o propósito da própria caminhada espiritual.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={PUBLISHER_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 text-black font-bold px-7 py-3.5 rounded-xl animate-cta-blink"
              >
                <span className="text-black">Adquirir Livro</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>

              <button
                type="button"
                onClick={() => setIsBookOpen(!isBookOpen)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#38D3C2] hover:bg-[#2BC4B3] text-black border border-black/30 px-6 py-3.5 rounded-xl font-bold shadow-md transition"
              >
                <BookOpen className="w-4 h-4 text-black" />
                <span className="text-black">{isBookOpen ? 'Ver capa do livro' : 'Folhear Livro'}</span>
              </button>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs font-bold text-black">
              <span className="inline-flex items-center gap-1.5 text-black">
                <ShieldCheck className="w-4 h-4 text-black" />
                Sem proselitismo ou imposição
              </span>
              <span className="inline-flex items-center gap-1.5 text-black">
                <Feather className="w-4 h-4 text-black" />
                Linguagem leve e consoladora
              </span>
              <span className="inline-flex items-center gap-1.5 text-black">
                <Compass className="w-4 h-4 text-black" />
                Fiel à Codificação Espírita
              </span>
            </div>
          </div>

          <div id="livro-interativo" className="lg:col-span-6 flex justify-center">
            <InteractiveFlipBook isOpen={isBookOpen} onToggleOpen={() => setIsBookOpen(!isBookOpen)} />
          </div>
        </div>
      </section>

      {/* PÁGINA 2: AS 6 GRANDES PERGUNTAS */}
      <section
        id="perguntas"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-20 sm:py-24 overflow-hidden bg-white border-b-2 border-amber-300/70"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-xs uppercase tracking-[0.22em] text-black bg-amber-300 border border-amber-500 px-3.5 py-1 rounded-full font-bold">
              O Coração da Obra
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-black mt-3">
              As 6 grandes perguntas que despertam a alma
            </h2>
            <p className="text-black mt-3 text-sm sm:text-base font-medium">
              Toque em cada pergunta da contracapa para explorar a resposta clara e acolhedora apresentada no livro.
            </p>
          </div>

          <div className="space-y-4">
            {SOUL_QUESTIONS.map((item) => {
              const isOpen = openQuestionId === item.id;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border-2 transition-all ${
                    isOpen
                      ? 'bg-[#F7F3E8] border-classic-navy shadow-md'
                      : 'bg-classic-ivory border-slate-300 hover:border-classic-navy'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenQuestionId(isOpen ? null : item.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-full bg-amber-300 text-black border border-amber-500 font-serif font-bold flex items-center justify-center shrink-0">
                        {item.id}
                      </span>
                      <span className="font-serif text-xl sm:text-2xl font-bold text-black">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-black shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-3 border-t border-slate-300 space-y-3">
                      <p className="text-black leading-relaxed text-base">{item.summary}</p>
                      <p className="font-serif italic text-black text-lg bg-white border-l-4 border-amber-500 px-4 py-2.5 rounded-r-lg font-medium">
                        “{item.reflection}”
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PÁGINA 3: MANIFESTO DA PÁGINA 9 */}
      <section
        id="proposta"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-20 sm:py-24 overflow-hidden bg-[#F5F1E6] border-b-2 border-amber-300/70"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6 space-y-5">
            <span className="inline-block text-xs uppercase tracking-[0.22em] text-black bg-amber-300 border border-amber-500 px-3.5 py-1 rounded-full font-bold">
              Apresentação • Página 9
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black leading-tight">
              Um convite à reflexão — jamais uma imposição
            </h2>
            <p className="text-black leading-relaxed">
              Diferente de tratados densos ou discursos que tentam convencer o leitor a qualquer custo,{' '}
              <strong className="font-bold text-black">Geraldo Corrêa de Lyra Junior</strong> escreveu este livro como uma{' '}
              <span className="font-bold text-black underline decoration-amber-400">porta de entrada</span> para os fundamentos da Codificação Espírita.
            </p>
            <p className="text-black leading-relaxed">
              Cada capítulo funciona como um chamado ao estudo, ao consolo e à transformação interior, lembrando que a
              evolução espiritual acontece passo a passo, por meio das escolhas e do amor que construímos diariamente.
            </p>
            <button
              type="button"
              onClick={handleOpenBookAndScroll}
              className="inline-flex items-center gap-2 text-black hover:underline font-bold text-sm pt-1"
            >
              <span className="text-black">Virar a página do livro para ler a pág. 9</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

          <div className="md:col-span-6">
            <blockquote className="relative rounded-3xl bg-white p-8 sm:p-10 shadow-xl border-2 border-classic-navy/20">
              <Quote className="w-10 h-10 text-amber-500 mb-3" />
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-black italic">
                “Não tenho, portanto, a pretensão de converter ninguém. O Espiritismo deve ser apresentado,
                compreendido e refletido – jamais imposto. Caberá a cada leitor, no exercício de sua liberdade de
                consciência, decidir se seus ensinamentos fazem sentido e se deseja adotá-los como orientação para a
                própria vida.”
              </p>
              <footer className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-black font-semibold">
                <span className="font-bold uppercase tracking-wider text-black">
                  Geraldo Corrêa de Lyra Junior
                </span>
                <span className="text-black">Pág. 9 • Por que este livro foi escrito?</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* PÁGINA 4: MAPA DOS 11 TEMAS */}
      <section
        id="temas"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-20 sm:py-24 overflow-hidden bg-white border-b-2 border-amber-300/70"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs uppercase tracking-[0.22em] text-black bg-amber-300 border border-amber-500 px-3.5 py-1 rounded-full font-bold">
              Conteúdo Estruturado
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-black mt-3">
              11 pilares essenciais explicados com clareza
            </h2>
            <p className="text-black mt-3 text-sm sm:text-base font-medium">
              Selecione um tema abaixo para ver como ele é abordado ao longo das 140 páginas da obra.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {DOCTRINAL_TOPICS.map((topic) => {
              const active = selectedTopic.title === topic.title;
              return (
                <button
                  key={topic.title}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border ${
                    active
                      ? 'bg-amber-300 text-black border-amber-500 shadow-md'
                      : 'bg-[#F5F1E6] text-black border-slate-300 hover:border-classic-navy'
                  }`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl bg-[#F7F3E8] border-2 border-classic-navy/25 p-7 sm:p-10 text-center shadow-lg">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-black bg-amber-300 border border-amber-500 px-3.5 py-1 rounded-full font-bold mb-3">
              Eixo: {selectedTopic.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black mb-3">
              {selectedTopic.title}
            </h3>
            <p className="text-black text-base sm:text-lg leading-relaxed">
              {selectedTopic.description}
            </p>
          </div>
        </div>
      </section>

      {/* PÁGINA 5: SOBRE O AUTOR */}
      <section
        id="autor"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-20 sm:py-24 overflow-hidden bg-[#F5F1E6] border-b-2 border-amber-300/70"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
          <div className="rounded-3xl bg-white border-2 border-classic-navy/20 p-8 sm:p-12 shadow-xl flex flex-col items-center text-center space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.22em] text-black bg-amber-300 border border-amber-500 px-3.5 py-1 rounded-full font-bold">
              Sobre o Autor
            </span>

            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl bg-slate-100">
              <img
                src={authorPhoto}
                alt="Foto do autor Geraldo Corrêa de Lyra Junior"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black">
                Geraldo Corrêa de Lyra Junior
              </h2>
              <p className="text-sm text-black font-bold mt-1">
                Autor e Estudioso da Doutrina Espírita
              </p>
            </div>

            <div className="w-full pt-2 grid sm:grid-cols-3 gap-4 text-left">
              <div className="rounded-2xl bg-[#F7F3E8] border border-slate-300 p-4">
                <div className="flex items-center gap-1.5 text-black text-xs font-bold mb-1">
                  <Heart className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-black">Carmen (Mãe)</span>
                </div>
                <p className="text-xs text-black leading-relaxed">
                  Exemplo de coragem, resistência e fé diante dos reveses da vida.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F7F3E8] border border-slate-300 p-4">
                <div className="flex items-center gap-1.5 text-black text-xs font-bold mb-1">
                  <Heart className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-black">Christiane — Kitty</span>
                </div>
                <p className="text-xs text-black leading-relaxed">
                  Esposa, companheira de vida, de aprendizado e de caminhada espiritual.
                </p>
              </div>
              <div className="rounded-2xl bg-[#F7F3E8] border border-slate-300 p-4">
                <div className="flex items-center gap-1.5 text-black text-xs font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-black">Amigo Espiritual</span>
                </div>
                <p className="text-xs text-black leading-relaxed">
                  Companheiro de reflexão e discernimento na organização de cada página.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PÁGINA 6: PRECE DE ENCERRAMENTO */}
      <section
        id="prece"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex items-center py-20 sm:py-24 overflow-hidden bg-white border-b-2 border-amber-300/70"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
          <div className="rounded-3xl bg-[#FCFBF7] p-8 sm:p-14 shadow-xl border-2 border-amber-400/80 text-center space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-black bg-amber-300 border border-amber-500 px-4 py-1 rounded-full font-bold">
              Prece de Encerramento • Página 138
            </span>

            <div className="font-serif italic text-xl sm:text-2xl leading-relaxed text-black space-y-5 max-w-xl mx-auto">
              <p className="font-bold not-italic text-black">Mestre Jesus,</p>
              <p className="text-black">
                Obrigado por cada pergunta que nos aproxima da verdade e por cada resposta que nos convida à
                humildade.
              </p>
              <p className="text-black">
                Que o conhecimento não nos afaste da simplicidade. Que a fé nos dê coragem para recomeçar e sabedoria
                para escolher, a cada dia, o caminho do bem.
              </p>
              <p className="text-black">
                Que, ao fecharmos este livro, nossa busca não se encerre. Que permaneça em nós o desejo sincero de
                compreender, servir e caminhar contigo.
              </p>
              <p className="font-bold not-italic text-black">Assim seja!</p>
            </div>
          </div>
        </div>
      </section>

      {/* PÁGINA 7: AQUISIÇÃO, FICHA TÉCNICA E RODAPÉ */}
      <div
        id="adquirir"
        className="relative isolate scroll-mt-20 min-h-[calc(100vh-5rem)] flex flex-col justify-between bg-[#F5F1E6] overflow-hidden"
      >
        <section className="py-16 sm:py-24 flex-1 flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.22em] text-black bg-amber-300 border border-amber-500 px-3.5 py-1 rounded-full font-bold">
                Ficha Técnica Oficial
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black">
                Leve esta leitura para a sua cabeceira
              </h2>
              <p className="text-black leading-relaxed">
                Ideal para leitura individual, grupos de estudo iniciantes ou para presentear alguém que busca respostas
                serenas sobre a vida e a espiritualidade.
              </p>

              <dl className="grid grid-cols-2 gap-4 pt-2 text-sm">
                <div className="p-4 rounded-2xl bg-white border border-slate-300 shadow-sm">
                  <dt className="text-black text-xs font-bold uppercase tracking-wider">Autor</dt>
                  <dd className="font-semibold text-black mt-1">Geraldo Corrêa de Lyra Junior</dd>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-300 shadow-sm">
                  <dt className="text-black text-xs font-bold uppercase tracking-wider">Editora</dt>
                  <dd className="font-semibold text-black mt-1">
                    <a
                      href={PUBLISHER_BOOK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black underline decoration-amber-500 hover:text-gray-600 inline-flex items-center gap-1"
                    >
                      <span>Scortecci Editora</span>
                      <ExternalLink className="w-3.5 h-3.5 text-black" />
                    </a>
                  </dd>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-300 shadow-sm">
                  <dt className="text-black text-xs font-bold uppercase tracking-wider">Edição / Páginas</dt>
                  <dd className="font-semibold text-black mt-1">1ª Edição (2026) • 140 págs.</dd>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-300 shadow-sm">
                  <dt className="text-black text-xs font-bold uppercase tracking-wider">ISBN</dt>
                  <dd className="font-semibold text-black mt-1 flex items-center justify-between gap-2">
                    <span>978-85-366-7529-9</span>
                    <button
                      type="button"
                      onClick={handleCopyIsbn}
                      title="Copiar ISBN"
                      className="text-black hover:bg-amber-200 p-1 rounded-lg border border-slate-300"
                    >
                      {copiedIsbn ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4 text-black" />}
                    </button>
                  </dd>
                </div>
              </dl>

              <div className="pt-1">
                <a
                  href={PUBLISHER_BOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-black underline decoration-amber-500 hover:text-gray-600 transition-colors"
                >
                  <span>Ver página oficial da obra na Scortecci Livraria</span>
                  <ExternalLink className="w-4 h-4 text-black" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <form
                onSubmit={handleOrderReserve}
                className="rounded-3xl bg-white border-2 border-classic-navy/25 p-7 sm:p-9 shadow-xl space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-black">
                    Adquira Agora na Editora
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-black mt-1">
                    Escolha seu formato de leitura
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOrderFormat('impresso')}
                    className={`p-4 rounded-2xl border-2 text-left transition ${
                      orderFormat === 'impresso'
                        ? 'bg-[#F7F3E8] border-classic-navy text-black shadow-sm'
                        : 'bg-white border-slate-300 text-black hover:border-classic-navy'
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider text-black font-bold">
                      Livro Físico
                    </span>
                    <span className="font-serif text-xl font-bold block mt-1 text-black">Edição Impressa</span>
                    <span className="text-xs text-black block mt-0.5">140 págs. • Scortecci</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderFormat('dedicado')}
                    className={`p-4 rounded-2xl border-2 text-left transition ${
                      orderFormat === 'dedicado'
                        ? 'bg-[#F7F3E8] border-amber-500 text-black shadow-sm'
                        : 'bg-white border-slate-300 text-black hover:border-amber-500'
                    }`}
                  >
                    <span className="block text-xs uppercase tracking-wider text-black font-bold">
                      Loja Oficial
                    </span>
                    <span className="font-serif text-xl font-bold block mt-1 text-black">Comprar na Editora</span>
                    <span className="text-xs text-black block mt-0.5">Scortecci Livraria</span>
                  </button>
                </div>

                <div className="space-y-3">
                  <div>
                    <label htmlFor="reader-name" className="block text-xs font-bold text-black mb-1">
                      Seu nome completo
                    </label>
                    <input
                      id="reader-name"
                      type="text"
                      required
                      placeholder="Ex.: Maria Clara Silva"
                      className="w-full rounded-xl bg-[#FCFBF7] border border-slate-400 px-4 py-3 text-sm text-black placeholder:text-slate-600 focus:outline-none focus:border-classic-navy"
                    />
                  </div>
                  <div>
                    <label htmlFor="reader-contact" className="block text-xs font-bold text-black mb-1">
                      WhatsApp ou E-mail para envio do link de compra
                    </label>
                    <input
                      id="reader-contact"
                      type="text"
                      required
                      placeholder="(00) 90000-0000 ou seu@email.com"
                      className="w-full rounded-xl bg-[#FCFBF7] border border-slate-400 px-4 py-3 text-sm text-black placeholder:text-slate-600 focus:outline-none focus:border-classic-navy"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={PUBLISHER_BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-300 text-black font-bold text-base flex items-center justify-center gap-2 animate-cta-blink"
                  >
                    <span>Adquirir Livro na Scortecci Editora</span>
                    <ExternalLink className="w-4 h-4 text-black" />
                  </a>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#38D3C2] hover:bg-[#2BC4B3] text-black font-bold text-sm border border-black/30 transition"
                  >
                    Registrar Interesse e Receber Link
                  </button>
                </div>

                {orderSubmitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-500 text-black text-xs font-bold leading-relaxed space-y-1.5">
                    <p>Solicitação registrada com sucesso!</p>
                    <p>
                      Acesse diretamente a obra na editora:{' '}
                      <a
                        href={PUBLISHER_BOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-extrabold text-black"
                      >
                        {PUBLISHER_BOOK_URL}
                      </a>
                    </p>
                  </div>
                )}

                <p className="text-xs text-center text-black font-medium">
                  “Afinal, cada existência é uma oportunidade de aprendizado, e todo passo consciente nos aproxima da luz.”
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* RODAPÉ CLÁSSICO */}
        <footer className="py-10 border-t-2 border-amber-400 bg-white text-center text-xs text-black space-y-3">
          <div className="flex justify-center">
            <img
              src={logoDark}
              alt="Logomarca GL"
              className="w-12 h-12 rounded-xl object-cover border border-amber-500 shadow"
            />
          </div>
          <p className="font-serif text-base font-bold text-black">
            Qual parte do Espiritismo você não entendeu? — Respostas simples para grandes perguntas da alma
          </p>
          <p className="text-black font-medium">
            © 2026 Geraldo Corrêa de Lyra Junior •{' '}
            <a
              href={PUBLISHER_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline decoration-amber-500 hover:text-gray-600 transition-colors"
            >
              Publicado por Scortecci Editora
            </a>{' '}
            • ISBN 978-85-366-7529-9
          </p>
          <div className="pt-2 border-t border-slate-200 max-w-xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-black">
            <img
              src={javaTechLogo}
              alt="Logomarca JavaTech"
              className="w-5 h-5 rounded object-contain inline-block"
            />
            <span className="text-black">
              Desenvolvido por JavaTech{' '}
              <a
                href="http://www.javatech.dev.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline decoration-amber-500 hover:text-gray-600 transition-colors"
              >
                www.javatech.dev.br
              </a>{' '}
              - @Copyright 2026.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
