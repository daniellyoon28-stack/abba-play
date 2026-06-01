"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Gamepad2, Shield, Sparkles } from 'lucide-react';

const slides = [
  {
    title: 'Histórias Bíblicas Interativas',
    description: 'Conteúdo narrativo que estimula empatia, fé e curiosidade por meio de personagens bíblicos animados.',
    accent: 'Aurora Noah',
    icon: Sparkles,
  },
  {
    title: 'Mini-jogos com Recompensas',
    description: 'Jogos breves e seguros que incentivam o progresso com moedas, estrelas e conquistas visuais.',
    accent: 'Desafios Gamificados',
    icon: Gamepad2,
  },
  {
    title: 'Painel de Monitoramento dos Pais',
    description: 'Controle completo do tempo de uso, progresso e recomendações para cada fase do aprendizado.',
    accent: 'Segurança em Primeiro Lugar',
    icon: Shield,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SlideIcon = slides[currentSlide].icon;

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_35%),radial-gradient(circle_at_80%_30%,_rgba(16,185,129,0.1),_transparent_30%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16 sm:px-10">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-400/70">Abba Play para famílias cristãs</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Ensine valores eternos para seus filhos através da diversão.
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            O Abba Play une histórias bíblicas interativas e mini-jogos gamificados em um ambiente seguro e controlado pelos pais.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/register"
            className="inline-flex min-w-[170px] items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 shadow-[0_20px_40px_-20px_rgba(16,185,129,0.8)] transition hover:bg-emerald-400"
          >
            Começar grátis
          </a>
          <a
            href="/login"
            className="inline-flex min-w-[170px] items-center justify-center rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-500 hover:bg-slate-800"
          >
            Entrar
          </a>
        </div>

        <section className="mt-16 w-full rounded-[2rem] border border-emerald-500/20 bg-slate-950/95 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.7)] ring-1 ring-emerald-500/10 sm:p-10">
          <div className="flex flex-col gap-8 rounded-[1.75rem] bg-gradient-to-br from-slate-950/90 via-slate-900/90 to-slate-950/70 p-8 text-center shadow-[inset_0_0_0_1px_rgba(16,185,129,0.08)] sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-300 shadow-[0_20px_60px_-40px_rgba(16,185,129,0.8)]">
              <SlideIcon className="h-10 w-10" />
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Destaque</p>
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">{slides[currentSlide].title}</h2>
              <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400">
                {slides[currentSlide].description}
              </p>
              <div className="inline-flex rounded-full bg-slate-900/80 px-4 py-2 text-sm text-emerald-200 ring-1 ring-emerald-500/20">
                {slides[currentSlide].accent}
              </div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-emerald-400 hover:text-emerald-400"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      currentSlide === index ? 'bg-emerald-400' : 'bg-slate-700'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-100 transition hover:border-emerald-400 hover:text-emerald-400"
                aria-label="Próximo"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
