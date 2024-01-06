import { cn, PropsWithChildren } from 'src/utils';

export const P = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`leading-7 [&:not(:first-child)]:mt-6`, className)}>{children}</p>
);

export const Lead = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-xl text-muted-foreground`, className)}>{children}</p>
);

export const Large = ({ children, className }: PropsWithChildren) => (
  <div className={cn(`text-lg font-semibold`, className)}>{children}</div>
);

export const Small = ({ children, className }: PropsWithChildren) => (
  <small className={cn(`text-sm font-medium leading-none`, className)}>{children}</small>
);

export const Muted = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-sm text-muted-foreground`, className)}>{children}</p>
);
