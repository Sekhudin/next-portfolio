import { ChevronDownIcon } from 'lucide-react';
import { cn, PropsWithChildren } from 'src/utils';
import NavigationMainForCellular from './navigation-main-cellular';
import NavigationMainForTab from './navigation-main-md';

export default function NavigationMain({
  className,
  cellularClassName,
}: PropsWithChildren<{ cellularClassName?: string }>) {
  return (
    <div className={cn(``, className)}>
      <NavigationMainForTab className="hidden md:flex bg-background dark:bg-secondary dark:border-zinc-600/50" />
      <NavigationMainForCellular className={cn('md:hidden')}>
        <div
          aria-label="Menu"
          role='button'
          className={cn(
            `md:hidden bg-background dark:bg-secondary text-sm font-semibold
            flex justify-center items-center space-x-0.5 shadow-xl dark:hover:border-zinc-600/50
            border rounded-full px-4 py-2.5`,
            cellularClassName
          )}>
          <span className="first-letter:uppercase">menu</span>
          <ChevronDownIcon className="h-4 w-4 stroke-2 stroke-primary/70" />
        </div>
      </NavigationMainForCellular>
    </div>
  );
}
