'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;
const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      toastOptions={{
        unstyled: false,
        classNames: {
          toast: `group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground
          group-[.toaster]:border-border group-[.toaster]:shadow-lg overflow-hidden`,
          success: `!border-green-500 !bg-green-500/20 dark:!bg-green-500/10 !text-green-600 !backdrop-blur`,
          info: `!border-indigo-500 !bg-indigo-500/20 dark:!bg-indigo-500/10 !text-indigo-700 !backdrop-blur`,
          warning: `!border-yellow-500 !bg-yellow-500/20 dark:!bg-yellow-500/10 !text-yellow-600 !backdrop-blur`,
          error: `!border-pink-500 !bg-pink-500/20 dark:!bg-pink-500/10 !text-pink-600 !backdrop-blur`,
          title: `!capitalize !font-semibold dark:!font-bold`,
          description: `!text-zinc-800 dark:!text-zinc-300 !font-light`,
          actionButton: `!bg-indigo-700 hover:!bg-indigo-700/90 !text-zinc-200`,
          cancelButton: `!bg-zinc-100 hover:!bg-zinc-200 !text-zinc-800`,
        },
      }}
      expand
      visibleToasts={5}
      {...props}
    />
  );
};

export { Toaster };
