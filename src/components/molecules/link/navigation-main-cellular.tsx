'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { XIcon } from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogRootContent,
  DialogClose,
} from 'src/components/ui/dialog';
import { Separator } from 'src/components/ui/separator';
import { cn, PropsWithChildren } from 'src/utils';
import { NavigationItem, navigation } from './navigation-main-item';

export default function NavigationMain({ children, className }: PropsWithChildren) {
  const [open, setOpen] = React.useState<boolean>();
  const pathName = usePathname();
  const match = (v: string) => pathName.includes(v);

  const closeHndler = () => {
    setOpen(false);
  };

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          className={cn(`bg-white/10 dark:bg-zinc-90/10 backdrop-blur-sm`, className)}
        />
        <DialogRootContent
          className="h-fit fixed top-6 inset-4 z-50
        bg-white dark:bg-secondary border dark:border-zinc-700 rounded-3xl py-8 px-6">
          <h3 className="text-sm font-bold mb-2">Navigation</h3>
          <Separator orientation="horizontal" className="mb-2 dark:bg-zinc-700/50" />
          <div className={cn(`flex flex-col space-y-1`)}>
            {navigation.map((nav, key) => (
              <NavigationItem
                key={key}
                href={nav}
                onClick={closeHndler}
                className={cn(
                  `font-medium dark:font-medium rounded-md shadow-none hover:bg-indigo-700/20 dark:hover:bg-zinc-700/30 px-2 py-1.5`,
                  `${match(nav) && 'text-indigo-600 bg-indigo-700/20 dark:bg-zinc-700/30'}`,
                  'duration-300'
                )}>
                {nav}
              </NavigationItem>
            ))}
          </div>
          <DialogClose className="opacity-70 hover:opacity-100 absolute top-4 right-4 outline-none">
            <XIcon className="h-5 w-5" />
          </DialogClose>
        </DialogRootContent>
      </DialogPortal>
    </Dialog>
  );
}
