'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link, { type LinkProps } from 'next/link';
import { XIcon } from 'lucide-react';
import { Dialog, DialogTrigger, DialogOverlay, DialogClose } from 'src/components/ui/dialog';
import { Separator } from 'src/components/ui/separator';
import { cn, PropsWithChildren } from 'src/utils';

const navigation: string[] = ['about', 'blog', 'projects', 'tools', 'inquiry'];

const ItemNavigation = ({ className, children, ...props }: PropsWithChildren<LinkProps>) => {
  return (
    <Link {...props}>
      <div
        className={cn(
          `text-sm font-semibold first-letter:uppercase duration-500 hover:text-indigo-600
          hover:md:drop-shadow-xl md:shadow-indigo-800`,
          className
        )}>
        {children}
      </div>
    </Link>
  );
};

export function MainNaigationMD({ className }: PropsWithChildren) {
  const pathName = usePathname();
  const match = (v: string) => pathName.includes(v);
  return (
    <div
      className={cn(
        `flex justify-center rounded-full shadow-xl border gap-x-4 py-2 px-8`,
        className
      )}>
      {navigation.map((nav, key) => (
        <ItemNavigation
          key={key}
          href={nav}
          className={`${match(nav) && 'text-indigo-600 after:visible'}`}>
          {nav}
        </ItemNavigation>
      ))}
    </div>
  );
}

export function MainNavigationSelular({ children, className }: PropsWithChildren) {
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
      <DialogOverlay
        className={cn(`bg-white/10 dark:bg-zinc-90/10 backdrop-blur-sm px-6`, className)}>
        <div className="relative top-6 bg-white dark:bg-secondary border dark:border-zinc-700 rounded-3xl py-8 px-6">
          <h3 className="text-sm font-bold mb-2">Navigation</h3>
          <Separator orientation="horizontal" className="mb-2 dark:bg-zinc-700/50" />
          <div className={cn(`flex flex-col space-y-1`)}>
            {navigation.map((nav, key) => (
              <ItemNavigation
                key={key}
                href={nav}
                onClick={closeHndler}
                className={cn(
                  `font-medium dark:font-medium rounded-md shadow-none hover:bg-indigo-700/20 dark:hover:bg-zinc-700/30 px-2 py-1.5`,
                  `${match(nav) && 'text-indigo-600 bg-indigo-700/20 dark:bg-zinc-700/30'}`,
                  'duration-300'
                )}>
                {nav}
              </ItemNavigation>
            ))}
          </div>
          <DialogClose className="opacity-70 hover:opacity-100 absolute top-4 right-4">
            <XIcon className="h-5 w-5" />
          </DialogClose>
        </div>
      </DialogOverlay>
    </Dialog>
  );
}
