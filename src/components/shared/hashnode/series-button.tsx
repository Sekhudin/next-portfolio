'use client';
import LinkComponent from 'next/link';
import { SkeletonText } from 'src/components/ui/skeleton';
import { cn, PropsWithChildren, PropsWithClassName } from 'src/utils';

const SeriesButton = ({ className, children }: PropsWithChildren) => (
  <LinkComponent className="block w-fit" href={'/blog/series'}>
    <div
      className={cn(
        `w-fit px-3 py-1.5 text-sm text-zinc-50 dark:text-zinc-300 rounded-full
      bg-indigo-700 hover:bg-indigo-700/90 hover:shadow-md duration-300`,
        className
      )}>
      {children}
    </div>
  </LinkComponent>
);

export const SeriesButtonFallback = ({ className }: PropsWithClassName) => (
  <SkeletonText className={cn('w-32 px-2 py-1', className)} size="base" rounded="full" />
);

export default SeriesButton;
