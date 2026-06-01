import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard',
};

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 240, padding: '2rem', borderRight: '1px solid #e5e7eb' }}>
        <h1>Dashboard</h1>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link href="/dashboard">Início</Link></li>
            <li><Link href="/dashboard/historias">Histórias</Link></li>
            <li><Link href="/dashboard/jogos">Jogos</Link></li>
            <li><Link href="/dashboard/loja">Loja</Link></li>
            <li><Link href="/dashboard/pais">País</Link></li>
          </ul>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
