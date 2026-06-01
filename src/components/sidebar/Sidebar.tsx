import Link from 'next/link';
import {
  Home,
  BookOpen,
  Gamepad,
  ShoppingBag,
  Globe2,
} from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Início', icon: Home },
  { href: '/dashboard/historias', label: 'Histórias', icon: BookOpen },
  { href: '/dashboard/jogos', label: 'Jogos', icon: Gamepad },
  { href: '/dashboard/loja', label: 'Loja', icon: ShoppingBag },
  { href: '/dashboard/pais', label: 'País', icon: Globe2 },
];

export default function Sidebar() {
  return (
    <aside className="w-72 flex-none border-r border-slate-800 bg-slate-950 p-6 text-slate-200">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Dashboard</p>
        <h2 className="mt-3 text-2xl font-semibold">ABBA Play</h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-100 transition hover:bg-slate-800"
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
