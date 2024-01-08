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
          `text-sm font-semibold first-letter:uppercase text-zinc-800 dark:text-zinc-300 duration-300`,
          className
        )}>
        {children}
      </div>
    </Link>
  );
};
