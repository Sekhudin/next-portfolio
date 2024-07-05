import { cn, Props, WithChildren } from 'packages/utils/cn'

export const H1 = ({ children, className }: Props<WithChildren>) => (
  <h1
    className={cn(
      `scroll-m-20 text-3xl lg:text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: Props<WithChildren>) => (
  <h2
    className={cn(
      `scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: Props<WithChildren>) => (
  <h3
    className={cn(
      `scroll-m-20 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h3>
);

export const H4 = ({ children, className }: Props<WithChildren>) => (
  <h4
    className={cn(
      `scroll-m-20 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h4>
);
