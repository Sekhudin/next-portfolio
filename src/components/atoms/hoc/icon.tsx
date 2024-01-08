import type { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from 'src/utils';

export type HOCIcon = ReturnType<typeof HOC>;
export default function HOC(IconElement: LucideIcon) {
  const Icon = ({ className, ...props }: LucideProps) => (
    <IconElement
      className={cn(`h-5 w-5 stroke-zinc-800 dark:stroke-indigo-700`, className)}
      {...props}
    />
  );
  return Icon;
}
