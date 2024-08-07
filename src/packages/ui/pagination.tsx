import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';

import { ButtonProps, buttonVariants } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';
import { SkeletonText } from './skeleton';

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn('mx-auto flex w-full justify-center', className)}
    {...props}
  />
);
Pagination.displayName = 'Pagination';

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn('flex flex-row items-center gap-1', className)} {...props} />
  )
);
PaginationContent.displayName = 'PaginationContent';

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn('', className)} {...props} />
);
PaginationItem.displayName = 'PaginationItem';

type PaginationLinkProps = {
  isActive?: boolean | null;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({
  className,
  isActive,
  size = 'icon',
  onClick,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: 'ghost',
        size,
      }),
      `${
        isActive
          ? 'cursor-pointer'
          : 'cursor-not-allowed hover:bg-transparent opacity-50 dark:opacity-20'
      }`,
      className
    )}
    onClick={(e) => {
      if (isActive && onClick) {
        onClick(e);
      }
    }}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';

const PaginationPrev = ({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn(`gap-1 pl-2.5 group`, className)}
    isActive={isActive}
    {...props}>
    <ChevronLeftIcon className={`h-4 w-4`} />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrev.displayName = 'PaginationPrev';

const PaginationNext = ({
  className,
  isActive,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn(`gap-1 pr-2.5 group`, className)}
    isActive={isActive}
    {...props}>
    <span>Next</span>
    <ChevronRightIcon className={`h-4 w-4`} />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}>
    <DotsHorizontalIcon className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';

const PaginationSkeleton = ({ className }: Props) => (
  <div className={cn('flex justify-center space-x-4', className)}>
    <SkeletonText className="w-16" size="sm" />
    <SkeletonText className="w-12" size="sm" />
    <SkeletonText className="w-16" size="sm" />
  </div>
);

const NextPrevSkeleton = ({ className }: Props) => (
  <div className={cn('flex justify-center space-x-4', className)}>
    <SkeletonText className="w-16" size="sm" />
    <SkeletonText className="w-16" size="sm" />
  </div>
);

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis,
  PaginationSkeleton,
  NextPrevSkeleton,
};
