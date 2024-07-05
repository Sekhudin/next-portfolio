import type { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from 'packages/utils/cn';

export type HOCIcon = ReturnType<typeof HOC>;
export default function HOC(IconElement: LucideIcon) {
  const Icon = ({ className, ...props }: LucideProps) => (
    <IconElement
      className={cn(
        `h-6 w-6 stroke-zinc-500 group-hover:stroke-zinc-600/90
      dark:stroke-zinc-600 dark:lg:group-hover:stroke-indigo-800`,
        className
      )}
      {...props}
    />
  );
  return Icon;
}
