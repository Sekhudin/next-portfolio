import { cn, PropsWithChildren } from 'src/utils';

export const Blockquote = ({ children, className }: PropsWithChildren) => (
  <code
    className={cn(
      `relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold`,
      className
    )}>
    {children}
  </code>
);
