'use client';
import { usePathname } from 'next/navigation';
import { cn, Props } from 'packages/utils/cn';
import { MAIN } from 'configs/link.config';
import NavigationItem from './item';

export default function MainTabNav({ className }: Props) {
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
          {v.display}
        </NavigationItem>
      ))}
    </div>
  );
}
