import { ChevronRight } from 'lucide-react';
import { Separator } from 'src/components/ui/separator';
import { Skeleton, SkeletonText, SkeletonParagraph } from 'src/components/ui/skeleton';
import Image, { NoImage } from 'src/components/atoms/image/base-image';
import { Anchor, Small } from 'src/components/atoms/typography/p';
import Entity, { Post as PostInterface } from 'src/service/hashnode/entity/post';
import type { _HrefToDI, _RouteDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, ParameterAs } from 'src/utils';

type DI = {
  deps: {
    _router: _RouteDI;
    _hrefTo: _HrefToDI;
  };
};

type Props = PropsWithClassName<
  DI & {
    postValue: PostInterface;
    showCover?: boolean;
  }
>;
export type PostValueAs<T extends string | number = number> = ParameterAs<Props['postValue'], T>;
const PostCard = ({ className, deps, postValue, showCover }: Props) => {
  const post = new Entity(postValue);

  return (
    <div className={cn('grid grid-cols-12', className)}>
      <div
        className="col-span-12 md:col-span-4 mb-1 md:mb-0
        flex space-x-2 md:space-x-0 md:py-6 xl:py-8">
        <Separator className="w-0.5 md:hidden" orientation="vertical" />
        <Small
          className="font-normal md:font-medium dark:md:font-medium
          text-xs md:text-sm first-letter:uppercase text-zinc-400 dark:text-zinc-500">
          {post.publishedAt}
        </Small>
      </div>

      <div
        className="col-span-12 md:col-span-8 cursor-pointer rounded-lg md:rounded-xl
        hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 p-4 md:p-6 xl:p-8">
        <div className="flex flex-col space-y-4">
          <div onClick={() => deps._hrefTo(post.url)}>
            {showCover ? (
              <div className="relative md:hidden rounded overflow-hidden">
                {post.coverImage?.url ? (
                  <Image
                    className="w-full h-dvh min-h-48 max-h-48"
                    src={post.coverImage.url}
                    alt={post.title}
                  />
                ) : (
                  <NoImage className="w-full h-dvh min-h-48 max-h-48 rounded" />
                )}
              </div>
            ) : null}
            <p
              className="scroll-m-20 text-lg font-semibold tracking-tight
              text-zinc-800 dark:text-zinc-300 mb-2">
              {post.series?.name ? `${post.series.name} ${post.title}` : post.title}
            </p>
            <Small className="font-light dark:font-extralight leading-6 text-wrap truncate">
              {post.brief}
            </Small>
          </div>

          <div className="flex justify-between items-center">
            <Anchor
              className="flex items-center text-sm"
              href={post.url}
              aria-label={'Read Article'}>
              <span>Read Article</span>
              <ChevronRight className="h-3.5 w-3.5 stroke-indigo-700" />
            </Anchor>

            {post.series && (
              <div
                className="flex flex-wrap space-x-1 font-medium text-sm group/series"
                onClick={() => deps._router.push(`/blog/series/${post.series?.slug}`)}>
                <span className="dark:text-zinc-300">Series:</span>
                <span
                  className="text-indigo-700 group-hover/series:text-zinc-50 group-hover/series:dark:text-zinc-300
                  group-hover/series:bg-indigo-700 rounded-md text-xs px-1 py-0.5 delay-100 duration-100">
                  {post.series.name}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Fallback = ({ className }: PropsWithClassName) => (
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
);

export const PostCardFallback = ({ className, n }: PropsWithClassName<{ n?: number }>) => (
  <>
    {n ? (
      Array.from({ length: n }).map((_, key) => <Fallback className={className} key={key} />)
    ) : (
      <Fallback className={className} />
    )}
  </>
);

export const NoPostArticleYet = ({ className }: PropsWithClassName) => (
  <div className={cn('w-full h-96 flex items-center justify-center', className)}>
    No articles yet
  </div>
);

export default PostCard;
