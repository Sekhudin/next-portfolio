'use client';
import Link, { type LinkProps } from 'next/link';
import { cn, PropsWithChildren } from 'src/utils';

export default function NavigationItem({
  className,
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  return (
    <Link {...props} scroll>
      <div
        className={cn(
          `text-sm font-semibold first-letter:uppercase text-zinc-800 dark:text-zinc-300 duration-300`,
          className
        )}>
        {children}
      </div>
    </Link>
  );
}
