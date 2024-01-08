'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn, PropsWithChildren } from 'src/utils';
import { NavigationItem, navigation } from './navigation-main-item';

export default function MainNaigation({ className }: PropsWithChildren) {
  const pathName = usePathname();
  const isMatch = (v: string) => pathName.includes(v);
  return (
    <div
      className={cn(
        `flex justify-center rounded-full shadow-xl border gap-x-4 py-2 px-8`,
        className
      )}>
      {navigation.map((nav, key) => (
        <NavigationItem
          key={key}
          href={nav}
          className={cn(
            `hover:text-indigo-700`,
            `${isMatch(nav) ? 'text-indigo-700 dark:text-indigo-700' : ''}`
          )}>
          {nav}
        </NavigationItem>
      ))}
    </div>
  );
}
