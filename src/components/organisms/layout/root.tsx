import { Inter } from 'next/font/google';
import { ThemeProvider } from 'src/components/molecules/theme/provider';
import Header from 'src/components/organisms/header';
import { cn, PropsWithChildren } from 'src/utils';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children, className }: PropsWithChildren) {
  return (
    <body
      className={cn(`min-h-[100dvh] bg-background dark:bg-zinc-900`, inter.className, className)}>
      <ThemeProvider>
        <Header />
        {children}
      </ThemeProvider>
    </body>
  );
}
