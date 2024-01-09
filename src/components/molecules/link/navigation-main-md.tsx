'use client';
import { usePathname } from 'next/navigation';
import { cn, PropsWithChildren } from 'src/utils';
import { MAIN } from 'src/config/link';
import NavigationItem from './navigation-item';

export default function MainNaigation({ className }: PropsWithChildren) {
  const pathName = usePathname();
  const isMatch = (v: string) => pathName.includes(v);
  return (
    <div
      className={cn(
        `flex justify-center rounded-full shadow-xl border gap-x-4 py-2 px-8`,
        className
      )}>
      {MAIN.map((v, key) => (
        <NavigationItem
          key={key}
          href={v.href}
          className={cn(
            `hover:text-indigo-700`,
            `${isMatch(v.href) ? 'text-indigo-700 dark:text-indigo-700' : ''}`
          )}>
          {v.name}
        </NavigationItem>
      ))}
    </div>
  );
}
