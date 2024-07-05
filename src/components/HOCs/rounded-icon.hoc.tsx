import type { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from 'packages/utils/cn';

export type HOCIcon = ReturnType<typeof HOC>;
export default function HOC(IconElement: LucideIcon) {
  const Icon = ({ className, ...props }: LucideProps) => (
    <div
      className="bg-zinc-700/5 group-hover:bg-zinc-700/15
      dark:group-hover:bg-indigo-700/15
      p-2 rounded-full duration-500">
      <IconElement
        className={cn(
          `h-6 w-6 stroke-zinc-500 group-hover:stroke-zinc-600/90
          dark:stroke-zinc-600 dark:group-hover:stroke-indigo-800`,
          className
        )}
        {...props}
      />
    </div>
  );
  return Icon;
}
