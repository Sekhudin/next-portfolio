import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Separator } from 'src/components/ui/separator';
import { SkeletonTextSM, SkeletonTextXL } from 'src/components/ui/skeleton';
import { Anchor, Small } from 'src/components/atoms/typography/p';
import { H4 } from 'src/components/atoms/typography/h';
import type { SinglePost } from 'src/service/hashnode/queries/post';
import { cn, PropsWithClassName } from 'src/utils';
import Dt from 'src/utils/date';

const PostCard = ({ className, ...v }: PropsWithClassName<SinglePost>) => {
  const clickHandler = () => {
    window.location.href = v.url;
  };

  return (
    <div className={cn('grid grid-cols-12', className)}>
      <div
        className="col-span-12 md:col-span-4 mb-1 md:mb-0
        flex space-x-2 md:space-x-0 md:py-6 xl:py-8">
        <Separator className="w-0.5 md:hidden" orientation="vertical" />
        <Small
          className="font-normal md:font-medium dark:md:font-medium
          text-xs md:text-sm first-letter:uppercase text-zinc-400 dark:text-zinc-500">
          {Dt.ISOtoCustom(v.publishedAt)}
        </Small>
      </div>

      <div
        className="col-span-12 md:col-span-8 cursor-pointer rounded-lg md:rounded-xl group
        hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 p-4 md:p-6 xl:p-8"
        onClick={clickHandler}>
        <div className="flex flex-col space-y-4">
          <H4 className="md:w-10/12">{v.title}</H4>
          <Small className="font-light dark:font-extralight leading-6 text-wrap truncate">
            {v.brief}
          </Small>

          <Anchor
            className="flex items-center text-sm"
            href={v.url}
            aria-label={'Read Article'}>
            <span>Read Article</span>
            <ChevronRight className="h-3.5 w-3.5 stroke-indigo-700" />
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export const PostCardFallback = ({ className }: PropsWithClassName) => (
  <div className={cn('grid grid-cols-12 w-full', className)}>
    <span
      className="col-span-12 md:col-span-4 mb-1 md:mb-0
      flex space-x-2 md:space-x-0 md:py-6 xl:py-8">
      <Separator className="w-0.5 md:hidden" orientation="vertical" />
      <SkeletonTextSM className="w-40 h-fit" />
    </span>

    <span className="col-span-12 md:col-span-8 p-2 md:p-6 xl:p-8">
      <div className="grow flex flex-col gap-y-4 mb-4">
        <SkeletonTextXL className="w-3/4" />
        <div className="flex flex-col gap-y-2">
          <SkeletonTextSM className="w-full" />
          <SkeletonTextSM className="w-full" />
          <SkeletonTextSM className="w-full" />
        </div>
      </div>
      <SkeletonTextSM />
    </span>
  </div>
);

export default PostCard;
