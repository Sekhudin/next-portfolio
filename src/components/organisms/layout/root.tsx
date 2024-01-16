import { Inter } from 'next/font/google';
import { ThemeProvider } from 'src/components/molecules/theme/provider';
import Header from 'src/components/organisms/header';
import { cn } from 'src/utils';

const inter = Inter({ subsets: ['latin'] });
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <body className={cn(`min-h-[100dvh] bg-background dark:bg-zinc-900`, inter.className)}>
    <ThemeProvider>
      <Header />
      {children}
    </ThemeProvider>
  </body>
);

export default RootLayout;
