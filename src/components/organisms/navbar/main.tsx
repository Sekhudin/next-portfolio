import { ChevronDownIcon } from 'lucide-react';
import { Button } from 'src/components/ui/button';
import { MainNaigationMD, MainNavigationSelular } from 'src/components/molecules/navigation/main';
import { cn, PropsWithChildren } from 'src/utils';

export default function MainNavbar({ className }: PropsWithChildren) {
  return (
    <div className={cn(``, className)}>
      <MainNaigationMD className="hidden md:flex" />
      <MainNavigationSelular className="md:hidden">
        <div
          className="md:hidden bg-background dark:bg-secondary text-sm font-semibold
          flex justify-center items-center space-x-0.5 shadow-xl dark:hover:border-zinc-600/50
          border rounded-full px-4 py-2.5">
          <span>Menu</span>
          <ChevronDownIcon className="h-4 w-4 stroke-2 stroke-primary/70" />
        </div>
      </MainNavigationSelular>
    </div>
  );
}
