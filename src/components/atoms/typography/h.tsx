import { cn, PropsWithChildren } from 'src/utils';

export const H1 = ({ children, className }: PropsWithChildren) => (
  <h1
    className={cn(
      `scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h1>
);

export const H2 = ({ children, className }: PropsWithChildren) => (
  <h2
    className={cn(
      `scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h2>
);

export const H3 = ({ children, className }: PropsWithChildren) => (
  <h3
    className={cn(
      `scroll-m-20 text-2xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h3>
);

export const H4 = ({ children, className }: PropsWithChildren) => (
  <h4
    className={cn(
      `scroll-m-20 text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </h4>
);
