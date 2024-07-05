'use client';
import { NextLink, NextLinkProps } from 'packages/ui/next-link';
import { cn } from 'packages/utils/cn';

export default function Item({ className, children, ...props }: NextLinkProps) {
  return (
    <NextLink {...props}>
      <div
        className={cn(
          `text-sm font-semibold first-letter:uppercase text-zinc-800 dark:text-zinc-300 duration-300`,
          className
        )}>
        {children}
      </div>
    </NextLink>
  );
}
