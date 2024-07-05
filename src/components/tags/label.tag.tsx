import { cn, Props, WithChildren } from 'packages/utils/cn';

export const LabelTag = ({ className, children }: Props<WithChildren>) => (
  <div
    className={cn(
      `bg-zinc-700/10 dark:bg-indigo-700/50 dark:border dark:border-indigo-700
      rounded text-xs text-zinc-700 dark:text-zinc-300 px-1 py-0.5`,
      className
    )}>
    {children}
  </div>
);

export default LabelTag;
