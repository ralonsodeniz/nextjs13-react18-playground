import './globals.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import Header from '@/components/shared/Header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextJS + React Playground',
  description: 'New features playground for NextJS + React',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className="dark">
    <body className={inter.className}>
      <header>
        <Header />
      </header>
      <main className="flex min-h-screen flex-col items-center p-24">
        {children}
      </main>
    </body>
  </html>
);

export default RootLayout;
