'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonStarIcon } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { cn, PropsWithClassName } from 'src/utils';

export default function ThemeToggle({ className, ...props }: PropsWithClassName) {
  const { setTheme, theme } = useTheme();

  const onClickHandler = () => {
    if (!theme) return;
    if (theme === 'dark') {
      setTheme('light');
      return;
    }
    setTheme('dark');
    return;
  };

  return (
    <Button
      className={cn(`px-4 py-2 rounded-full group`, className)}
      variant="outline"
      outlineFor="dark"
      size="fit"
      aria-label="toggle dark-theme"
      onClick={onClickHandler}>
      <SunIcon className="dark:hidden h-5 w-5 sm:h-6 sm:w-6" />
      <MoonStarIcon
        className="hidden dark:block h-5 w-5 sm:h-6 sm:w-6
      stroke-indigo-700 group-hover:fill-indigo-700/25"
      />
    </Button>
  );
}
