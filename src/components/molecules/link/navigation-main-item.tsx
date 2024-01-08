'use client';
import React from 'react';
import Link, { type LinkProps } from 'next/link';
import { cn, PropsWithChildren } from 'src/utils';

export const navigation: string[] = ['about', 'blog', 'projects', 'tools', 'inquiry'];
export const NavigationItem = ({ className, children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props}>
      <div
        className={cn(
          `text-sm font-semibold text-zinc-800 dark:text-zinc-300 first-letter:uppercase duration-500 hover:text-indigo-600
          hover:md:drop-shadow-xl md:shadow-indigo-800`,
          className
        )}>
        {children}
      </div>
    </Link>
  );
};
