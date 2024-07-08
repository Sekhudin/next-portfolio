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
} from 'packages/ui/dialog';
import { Separator } from 'packages/ui/separator';
import { cn, Props, WithChildren } from 'packages/utils/cn';
import { MAIN } from 'configs/link.config';
import NavigationItem from './item';

export default function MainCellularNav({ children, className }: Props<WithChildren>) {
  const [open, setOpen] = React.useState<boolean>();
  const pathName = usePathname();

  const isMatch = React.useCallback((value: string) => pathName.includes(value), [pathName]);
  const closeHandler = React.useCallback(() => {
    setOpen(false);
  }, []);

  React.useEffect(() => {
    const evenListener = () => {
      if (open) {
        setOpen(false);
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
            {MAIN.map((link, key) => (
              <NavigationItem
                className={cn(
                  `hover:bg-indigo-700/10 hover:text-indigo-700 rounded-md px-2 py-1.5`,
                  isMatch(link.href) ? `bg-indigo-700/10 text-indigo-700 dark:text-indigo-700` : ''
                )}
                key={key}
                href={link.href}
                onClick={closeHandler}
                {...link.options}>
                {link.display}
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
