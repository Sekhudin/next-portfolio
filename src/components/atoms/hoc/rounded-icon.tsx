import type { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from 'src/utils';

export type HOCIcon = ReturnType<typeof HOC>;
export default function HOC(IconElement: LucideIcon) {
  const Icon = ({ className, ...props }: LucideProps) => (
    <div
      className="p-2 rounded-full bg-zinc-700/5 hover:bg-zinc-700/15
    dark:hover:bg-indigo-700/15 duration-500 group">
      <IconElement
        className={cn(
          `h-6 w-6 stroke-zinc-500 group-hover:stroke-zinc-600
          dark:stroke-zinc-600 dark:group-hover:stroke-indigo-800`,
          className
        )}
        {...props}
      />
    </div>
  );
  return Icon;
}
