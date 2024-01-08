'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { cn, PropsWithChildren } from 'src/utils';
import { NavigationItem, navigation } from './navigation-main-item';

export default function MainNaigation({ className }: PropsWithChildren) {
  const pathName = usePathname();
  const match = (v: string) => pathName.includes(v);
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
          className={`${match(nav) && 'text-indigo-600 after:visible'}`}>
          {nav}
        </NavigationItem>
      ))}
    </div>
  );
}
