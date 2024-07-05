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
          description: `group-[.toast]:text_color_base`,
          actionButton: `group-[.toast]:bg-primary group-[.toast]:text-primary-foreground`,
          cancelButton: `group-[.toast]:bg-muted group-[.toast]:text-muted-foreground`,
          success: `!border-green-500 !bg-green-500/20 !text-green-600 !backdrop-blur`,
          info: `!border-indigo-500 !bg-indigo-500/20 !text-indigo-700 !backdrop-blur`,
          warning: `!border-yellow-500 !bg-yellow-500/20 !text-yellow-600 !backdrop-blur`,
          error: `!border-pink-500 !bg-pink-500/20 !text-pink-600 !backdrop-blur`,
          title: `!capitalize`,
        },
      }}
      expand
      visibleToasts={5}
      {...props}
    />
  );
};

export { Toaster };
