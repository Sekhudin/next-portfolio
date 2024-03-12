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
import { MAIN } from 'src/config/link';
import NavigationItem from './navigation-item';

export default function NavigationMain({ children, className }: PropsWithChildren) {
  const [open, setOpen] = React.useState<boolean>();
  const pathName = usePathname();
  const isMatch = (v: string) => pathName.includes(v);

  const closeHndler = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const evenListener = () => {
      if (open) {
        closeHndler();
        return;
      }
    };
    window.addEventListener('resize', evenListener);
    return () => {
      window.removeEventListener('resize', evenListener);
    };
  }, [open]);

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer">
        {children}
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay
          className={cn(`bg-zinc-700/5 dark:bg-zinc-900/5 backdrop-blur-sm`, className)}
        />
        <DialogRootContent
          className="md:hidden h-fit fixed top-6 inset-4 z-50
        bg-white dark:bg-secondary border dark:border-zinc-700 rounded-3xl py-8 px-6">
          <h3 className="text-sm font-bold mb-2">Navigation</h3>
          <Separator orientation="horizontal" className="mb-2 dark:bg-zinc-700/50" />
          <div className={cn(`flex flex-col space-y-1`)}>
            {MAIN.map((v, key) => (
              <NavigationItem
                key={key}
                href={v.href}
                onClick={closeHndler}
                className={cn(
                  `hover:bg-indigo-700/10 hover:text-indigo-700 rounded-md px-2 py-1.5`,
                  `${
                    isMatch(v.href) ? `bg-indigo-700/10 text-indigo-700 dark:text-indigo-700` : null
                  }`
                )}>
                {v.display}
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
