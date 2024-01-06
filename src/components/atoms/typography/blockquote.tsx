import { cn, PropsWithChildren } from 'src/utils';

export const Blockquote = ({ children, className }: PropsWithChildren) => (
  <blockquote className={cn(`mt-6 border-l-2 pl-6 italic`, className)}>{children}</blockquote>
);
