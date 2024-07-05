'use client';
import React from 'react';
import { NextLink } from 'packages/ui/next-link';
import ImageBase from 'components/images/base.image';
import { Small } from 'components/typography/p';
import LabelTag from 'components/tags/label.tag';
import { Skeleton, SkeletonText, SkeletonParagraph, SkeletonList } from 'packages/ui/skeleton';
import { Separator } from 'packages/ui/separator';
import { cn, Props, WithSkeletonList } from 'packages/utils/cn';
import Series, { SeriesEntity } from 'modules/hashnode/entities/series.entity';
import Tag from 'modules/hashnode/entities/tag.entity';

const MemoizeNextLink = React.memo(NextLink);
type SeriesCardProps = Props<{ series: SeriesEntity }>;
export const SeriesCard = ({ className, ...props }: SeriesCardProps) => {
  const series = React.useMemo(() => Series(props.series), [props.series]);

  return (
    <div className={cn('grid grid-cols-12', className)}>
      <div
        className="col-span-12 sm:col-span-4 lg:col-span-6 mb-1 md:mb-0
        flex space-x-2 md:space-x-0">
        <Separator className="w-0.5 sm:hidden" orientation="vertical" />
        <div
          className="flex sm:flex-col gap-y-1 font-normal md:font-medium dark:md:font-medium
          text-xs md:text-sm first-letter:uppercase text-zinc-400 dark:text-zinc-500">
          <span className="hidden sm:flex items-center space-x-1">
            <p className="font-bold text-indigo-700">Author:</p>
            <p className="font-light">{series.author.name}</p>
          </span>
          <span>{series.getFormattedCreatedAt()}</span>
        </div>
      </div>

      <div
        className="relative col-span-12 sm:col-span-8 lg:col-span-6 cursor-pointer rounded-lg md:rounded-xl
      hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 overflow-hidden border">
        <MemoizeNextLink className="absolute inset-0 z-10" href={series.getSeriesUrl()} prefetch={false}/>
        <div className="relative overflow-hidden">
          <ImageBase
            className="w-full h-dvh min-h-48 max-h-48"
            src={series.coverImage}
            alt={series.name}
          />

          <div className="absolute bottom-2 right-2 bg-indigo-700 px-2 py-1 rounded-lg text-zinc-50">
            <p className="text-xs text-zinc-50">{series.getTotalArticles()}</p>
          </div>
        </div>

        <div className="p-4">
          <p
            className="scroll-m-20 text-lg font-semibold tracking-tight
            text-zinc-800 dark:text-zinc-300 mb-2">
            {series.name}
          </p>

          <Small className="font-light dark:font-extralight leading-6 text-wrap truncate">
            {series.getDescriptionText()}
          </Small>

          <div className="flex flex-wrap gap-x-1 gap-y-2 mt-2">
            {series.mapUniqueTags((tag, key) => (
              <LabelTag key={key}>{Tag(tag).getName()}</LabelTag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizeSeriesCard = React.memo(SeriesCard);
export const SeriesCardSkeleton = ({ className, nSkeleton }: Props<WithSkeletonList>) => (
  <SkeletonList nSkeleton={nSkeleton}>
    <div className={cn('grid grid-cols-12', className)}>
      <div
        className="col-span-12 sm:col-span-4 lg:col-span-6 mb-1 md:mb-0
        flex space-x-2 md:space-x-0">
        <Separator className="w-0.5 sm:hidden" orientation="vertical" />
        <div className="flex sm:flex-col gap-y-1">
          <SkeletonText className="hidden sm:flex" size="xs" rounded="rounded" />
          <SkeletonText size="xs" rounded="rounded" />
        </div>
      </div>

      <div className="col-span-12 sm:col-span-8 lg:col-span-6 rounded-lg border">
        <Skeleton className="w-full h-dvh min-h-48 max-h-48 rounded-t-lg rounded-b-none" />
        <div className="flex flex-col p-4">
          <SkeletonText className="mb-2" size="lg" />
          <SkeletonParagraph className="my-4" size="sm" n={1} diffLast />
          <SkeletonParagraph
            className="flex-row gap-y-0 gap-x-1"
            childClassName="w-16"
            rounded="md"
            n={3}
          />
        </div>
      </div>
    </div>
  </SkeletonList>
);

export const NoSeriesYet = ({ className }: Props) => (
  <div className={cn('w-full h-96 flex items-center justify-center', className)}>No series yet</div>
);
