import 'src/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'src/components/molecules/theme/provider';
import Header from 'src/components/organisms/header';
import { cn } from 'src/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sekhudin | Software Engineer',
  description: 'No errors, just pure functionalities',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(`min-h-[100dvh] bg-background dark:bg-zinc-900`, inter.className)}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
