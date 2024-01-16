import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { cn, PropsWithChildren } from 'src/utils';

export const P = ({ children, className }: PropsWithChildren) => (
  <p
    className={cn(
      `leading-7 [&:not(:first-child)]:mt-6 font-normal dark:font-extralight text-zinc-800 dark:text-zinc-300`,
      className
    )}>
    {children}
  </p>
);

export const Div = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={cn(`font-light text-zinc-800 dark:text-zinc-300`, className)} {...props}>
    {children}
  </div>
);

export const Span = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <span className={cn(`text-sm font-light text-zinc-800 dark:text-zinc-300`, className)} {...props}>
    {children}
  </span>
);

export const SpanPoint = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <span className={cn(`text-sm font-semibold text-zinc-800 dark:text-zinc-300`, className)} {...props}>
    {children}
  </span>
);

export const Lead = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-xl text-muted-foreground text-zinc-800 dark:text-zinc-300`, className)}>
    {children}
  </p>
);

export const Large = ({ children, className }: PropsWithChildren) => (
  <div className={cn(`text-lg font-semibold text-zinc-800 dark:text-zinc-300`, className)}>
    {children}
  </div>
);

export const Small = ({ children, className }: PropsWithChildren) => (
  <small
    className={cn(`text-sm font-medium leading-none text-zinc-800 dark:text-zinc-300`, className)}>
    {children}
  </small>
);

export const Muted = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-sm text-muted-foreground`, className)}>{children}</p>
);

export type AnchorProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;
export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        className={cn(
          `w-fit text-sm font-semibold text-indigo-700 hover:lg:underline lg:underline-offset-2 cursor-pointer`,
          className
        )}
        {...props}>
        {children}
      </a>
    );
  }
);
Anchor.displayName = 'Anchor';

export const PlainAnchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        className={cn(
          `w-fit text-sm font-semibold text-zinc-800 dark:text-zinc-300 cursor-pointer`,
          className
        )}
        {...props}>
        {children}
      </a>
    );
  }
);
PlainAnchor.displayName = 'PlainAnchor';
