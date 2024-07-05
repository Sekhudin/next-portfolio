import { ChevronDownIcon } from 'lucide-react';
import { Div, Span } from 'components/typography/p';
import { cn, Props, WithChildren } from 'packages/utils/cn';
import MainCellularNav from './main-cellular.nav';
import MainTabNav from './main-tab.nav';

export default function MainNav({
  className,
  cellularClassName,
}: Props<{ cellularClassName?: string }>) {
  return (
    <div className={cn(``, className)}>
      <MainTabNav className="hidden md:flex bg-background dark:bg-secondary dark:border-zinc-600/50" />
      <MainCellularNav className={cn('md:hidden')}>
        <Div
          aria-label="Menu"
          role="button"
          className={cn(
            `md:hidden bg-background dark:bg-secondary text-sm font-semibold
            flex justify-center items-center space-x-0.5 shadow-xl dark:hover:border-zinc-600/50
            border rounded-full px-4 py-2.5`,
            cellularClassName
          )}>
          <Span className="font-normal first-letter:uppercase">menu</Span>
          <ChevronDownIcon className="h-4 w-4 stroke-2 stroke-primary/70" />
        </Div>
      </MainCellularNav>
    </div>
  );
}
