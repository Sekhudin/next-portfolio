import { Inter } from 'next/font/google';
import { Toaster, SonerToaster } from 'src/components/ui/toaster';
import { ThemeProvider } from 'src/components/organisms/provider/theme';
import Header from 'src/components/organisms/header';
import { cn } from 'src/utils';

const inter = Inter({ subsets: ['latin'] });
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <body
    className={cn(`min-h-[100dvh] bg-background dark:bg-zinc-900`, inter.className)}
    suppressHydrationWarning>
    <ThemeProvider>
      <Header />
      {children}
      <Toaster />
      <SonerToaster />
    </ThemeProvider>
  </body>
);

export default RootLayout;
