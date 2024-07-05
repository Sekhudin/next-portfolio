import 'src/styles/globals.css';
import { Toaster } from 'packages/ui/sonner';
import ThemeProvider from 'components/providers/theme.provider';
import { cn, Props, WithChildren } from 'packages/utils/cn';
import { inter } from 'packages/fonts';
import Debugger from 'packages/utils/debugger';
import CommonHeader from './common.header';

Debugger.apolloError();
const RootLayout = ({ children }: Props<WithChildren>) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(`min-h-[100dvh] bg-background dark:bg-zinc-900`, inter.className)}
      suppressHydrationWarning>
      <ThemeProvider>
        <CommonHeader />
        {children}
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
