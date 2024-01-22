import React, { AnchorHTMLAttributes, HTMLAttributes } from 'react';
import { cn, PropsWithChildren } from 'src/utils';

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

export const Blockquote = ({ children, className }: PropsWithChildren) => (
  <blockquote className={cn(`mt-6 border-l-2 pl-6 italic`, className)}>{children}</blockquote>
);

export const Code = ({ children, className }: PropsWithChildren) => (
  <code
    className={cn(
      `relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`,
      className
    )}>
    {children}
  </code>
);

export const Small = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-sm leading-none text-zinc-800 dark:text-zinc-300`, className)}>
    {children}
  </p>
);

export const XSmall = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-xs leading-none text-zinc-800 dark:text-zinc-300`, className)}>
    {children}
  </p>
);

export const Muted = ({ children, className }: PropsWithChildren) => (
  <p className={cn(`text-sm text-muted-foreground`, className)}>{children}</p>
);

export const P = ({ children, className }: PropsWithChildren) => (
  <p
    className={cn(
      `leading-6 [&:not(:first-child)]:mt-6 text-zinc-800 dark:text-zinc-300
      dark:font-extralight`,
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
  <div
    className={cn(
      `text-zinc-800 dark:text-zinc-300
      dark:font-light`,
      className
    )}
    {...props}>
    {children}
  </div>
);

export const Span = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <span
    className={cn(
      `text-zinc-800 dark:text-zinc-300
      dark:font-light`,
      className
    )}
    {...props}>
    {children}
  </span>
);

export const SpanPoint = ({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLSpanElement>>) => (
  <span
    className={cn(
      `text-zinc-800 dark:text-zinc-300
      font-semibold dark:font-medium`,
      className
    )}
    {...props}>
    {children}
  </span>
);

export type AnchorProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;
export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <a
        className={cn(
          `w-fit text-indigo-700 hover:lg:underline group-hover:lg:underline
          lg:underline-offset-2 cursor-pointer font-semibold dark:font-medium`,
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
        className={cn(`w-fit text-zinc-800 dark:text-zinc-300 cursor-pointer`, className)}
        {...props}>
        {children}
      </a>
    );
  }
);
PlainAnchor.displayName = 'PlainAnchor';
