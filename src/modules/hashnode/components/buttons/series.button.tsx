'use client';
import React from 'react';
import { NextLinkButton, NextLinkButtonProps } from 'packages/ui/next-link';
import { SkeletonText } from 'packages/ui/skeleton';
import { cn, Props } from 'packages/utils/cn';

const SeriesButton = ({ className, children, ...props }: Omit<NextLinkButtonProps, 'href'>) => (
  <NextLinkButton
    className={cn(`bg-indigo-700 hover:bg-indigo-700/90`, className)}
    href={'/blog/series'}
    prefetch={false}
    {...props}>
    {children}
  </NextLinkButton>
);

export const SeriesButtonSkeleton = ({ className }: Props) => (
  <SkeletonText className={cn('w-32 px-2 py-1 rounded-lg', className)} size="base" rounded="full" />
);

export default SeriesButton;
