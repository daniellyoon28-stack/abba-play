import { Coin, Play, Sparkles, Star, Trophy } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">Bem-vindo de volta</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Olá, Davi! <span className="text-3xl">👑</span></h1>
            <p className="mt-3 max-w-xl text-slate-400">Hoje é dia de aprender brincando: complete sua missão e ganhe muitas moedas e estrelas!</p>
          </div>

          <div className="rounded-3xl bg-slate-950 p-5 text-slate-200 ring-1 ring-slate-700">
            <div className="flex items-center gap-3 text-slate-100">
              <Sparkles className="h-6 w-6 text-amber-300" />
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Nível atual</p>
                <p className="text-xl font-semibold">Nível 7</p>
              </div>
            </div>
            <div className="mt-5 rounded-full bg-slate-800 p-1">
              <div className="h-3 rounded-full bg-emerald-400" style={{ width: '68%' }} />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
              <span>XP: 680 / 1000</span>
              <span>68%</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.7fr_0.95fr]">
        <section className="rounded-3xl bg-gradient-to-br from-sky-700 via-indigo-700 to-slate-900 p-8 text-white shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-200/80">Missão do Dia</p>
              <h2 className="mt-4 text-3xl font-semibold">A História de Noé - Parte 1</h2>
              <p className="mt-4 max-w-xl text-slate-200/80">Ajude o Noé a montar sua arca e descubra os animais mágicos que chegam para a aventura.</p>
            </div>
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-slate-100 ring-1 ring-white/10">
              <Sparkles className="h-8 w-8" />
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="rounded-3xl bg-white/10 p-4 text-slate-100">
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Recompensa</p>
              <p className="mt-2 text-lg font-semibold">+80 XP + 50 🪙</p>
            </div>
            <button className="inline-flex items-center justify-center gap-2 rounded-3xl bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
              <Play className="h-5 w-5" />
              Começar Missão
            </button>
          </div>
        </section>

        <aside className="space-y-6 rounded-3xl bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Moedas de Ouro</p>
                <p className="mt-2 text-2xl font-semibold text-amber-300">120 🪙</p>
              </div>
              <Coin className="h-8 w-8 text-amber-300" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Estrelas de Conquista</p>
                <p className="mt-2 text-2xl font-semibold text-sky-300">24 ✨</p>
              </div>
              <Star className="h-8 w-8 text-sky-300" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Conquistas recentes</p>
                <p className="mt-2 text-lg font-semibold text-slate-100">Missão do arco concluída</p>
              </div>
              <Trophy className="h-8 w-8 text-emerald-400" />
            </div>
          </div>
        </aside>
      </div>

      <section>
        <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl bg-slate-900/90 p-6 ring-1 ring-slate-700">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400/80">Atividades Recomendadas</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Escolhas divertidas para hoje</h2>
          </div>
          <button className="inline-flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900">
            Ver todas
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="group overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-fuchsia-700 to-slate-950 p-6 text-white shadow-2xl shadow-slate-950/40 transition hover:-translate-y-1 hover:shadow-slate-950/60">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-200/80">História</p>
                <h3 className="mt-4 text-2xl font-semibold">A Fada do Jardim</h3>
              </div>
              <Sparkles className="h-10 w-10 text-amber-300" />
            </div>
            <p className="mt-5 text-slate-200/90">Descubra os segredos do jardim mágico e ajude os amigos a encontrar a luz escondida.</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-200/80">
              <span className="rounded-full bg-white/10 px-3 py-2">+40 XP</span>
              <span className="rounded-full bg-white/10 px-3 py-2">3 capítulos</span>
            </div>
          </article>

          <article className="group overflow-hidden rounded-3xl bg-slate-950 p-6 text-slate-100 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700 transition hover:-translate-y-1 hover:bg-slate-900">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Mini-jogo</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Caça às Formas</h3>
              </div>
              <Play className="h-10 w-10 text-emerald-400" />
            </div>
            <p className="mt-5 text-slate-300">Complete as fases, vença os desafios e ganhe moedas adicionais para desbloquear itens especiais.</p>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
              <span className="rounded-full bg-slate-800 px-3 py-2">+30 XP</span>
              <span className="rounded-full bg-slate-800 px-3 py-2">5 fases</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
