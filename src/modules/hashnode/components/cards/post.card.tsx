'use client';
import React from 'react';
import { NextLink } from 'packages/ui/next-link';
import { ChevronRight } from 'lucide-react';
import { Anchor, Small } from 'components/typography/p';
import ImageBase from 'components/images/base.image';
import ConditionalContainer from 'components/containers/conditional.container';
import { Separator } from 'packages/ui/separator';
import { Skeleton, SkeletonText, SkeletonParagraph, SkeletonList } from 'packages/ui/skeleton';
import { cn, Props, WithSkeletonList } from 'packages/utils/cn';
import Post, { PostEntity } from 'modules/hashnode/entities/post.entity';

const MemoizeNextLink = React.memo(NextLink);
type PostCardProps = Props<{ post: PostEntity; showCover: boolean }>;
const PostCard = ({ className, showCover, ...props }: PostCardProps) => {
  const post = React.useMemo(() => Post(props.post), [props.post]);

  return (
    <div className={cn('grid grid-cols-12', className)}>
      <div
        className="col-span-12 md:col-span-4 xl:col-span-5 mb-1 md:mb-0
        flex space-x-2 md:space-x-0 md:py-6 xl:py-8">
        <Separator className="w-0.5 md:hidden" orientation="vertical" />
        <Small
          className="font-normal md:font-medium dark:md:font-medium
          text-xs md:text-sm first-letter:uppercase text-zinc-400 dark:text-zinc-500">
          {post.getFormattedPublishedAt()}
        </Small>
      </div>

      <div
        className="col-span-12 md:col-span-8 xl:col-span-7 cursor-pointer rounded-lg md:rounded-xl
        hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 p-4 md:p-6 xl:p-8">
        <div className="flex flex-col space-y-4">
          <MemoizeNextLink href={post.url} prefetch={false}>
            <ConditionalContainer isVisible={showCover}>
              <span className="relative md:hidden rounded overflow-hidden">
                <ImageBase
                  className="w-full h-dvh min-h-48 max-h-48"
                  src={post.coverImage?.url}
                  alt={post.title}
                />
              </span>
            </ConditionalContainer>
            <p
              className="scroll-m-20 text-lg font-semibold tracking-tight
              text-zinc-800 dark:text-zinc-300 mb-2">
              {post.getTitle()}
            </p>
            <Small className="font-light dark:font-extralight leading-6 text-wrap truncate">
              {post.brief}
            </Small>
          </MemoizeNextLink>

          <div className="flex justify-between items-center">
            <Anchor
              className="flex items-center text-sm"
              href={post.url}
              aria-label={'Read Article'}>
              <span>Read Article</span>
              <ChevronRight className="h-3.5 w-3.5 stroke-indigo-700" />
            </Anchor>

            <ConditionalContainer isVisible={post.series}>
              <MemoizeNextLink
                className="flex flex-wrap space-x-1 font-medium text-sm group/series"
                href={post.getSeriesUrl()}
                prefetch={false}>
                <span className="dark:text-zinc-300">Series:</span>
                <span
                  className="text-indigo-700 group-hover/series:text-zinc-50 group-hover/series:dark:text-zinc-300
                  group-hover/series:bg-indigo-700 rounded-md text-xs px-1 py-0.5 delay-100 duration-100">
                  {post.series?.name}
                </span>
              </MemoizeNextLink>
            </ConditionalContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MemoizePostCard = React.memo(PostCard);

export const PostCardSkeleton = ({ className, nSkeleton }: Props<WithSkeletonList>) => (
  <SkeletonList nSkeleton={nSkeleton}>
    <div className={cn('grid grid-cols-12 w-full', className)}>
      <span
        className="col-span-12 md:col-span-4 mb-1 md:mb-0
        flex space-x-2 md:space-x-0 md:py-6 xl:py-8">
        <Separator className="w-0.5 md:hidden" orientation="vertical" />
        <SkeletonText className="w-40 h-fit" size="lg" />
      </span>

      <span className="col-span-12 md:col-span-8 p-2 md:p-6 xl:p-8">
        <div className="grow flex flex-col gap-y-4 mb-4">
          <Skeleton className="w-full h-dvh min-h-48 max-h-48 md:hidden rounded" />
          <SkeletonText className="w-3/4" size="lg" />
          <SkeletonParagraph n={2} diffLast />
        </div>
        <SkeletonParagraph
          className="flex-row justify-between gap-y-0"
          childClassName="w-1/3"
          n={2}
        />
      </span>
    </div>
  </SkeletonList>
);

export const NoArticleYet = ({ className }: Props) => (
  <div className={cn('w-full h-96 flex items-center justify-center', className)}>
    No articles yet
  </div>
);
