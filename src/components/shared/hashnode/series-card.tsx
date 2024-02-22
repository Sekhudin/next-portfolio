import { Skeleton, SkeletonText, SkeletonParagraph } from 'src/components/ui/skeleton';
import { Separator } from 'src/components/ui/separator';
import Image, { NoImage } from 'src/components/atoms/image/base-image';
import { Small } from 'src/components/atoms/typography/p';
import Entity, { Series, UniqueSeriesTags } from 'src/service/hashnode/entity/series';
import type { _RouteDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName } from 'src/utils';

type Deps = {
  deps: {
    _router: _RouteDI;
  };
};

type Props = PropsWithClassName<{ uniqueTags: UniqueSeriesTags[] } & Deps & Series>;
const SeriesCard = ({ className, uniqueTags, deps, ...series }: Props) => {
  const v = new Entity(series);

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
            <p className="font-light">{v.author.name}</p>
          </span>
          <span>{v.createdAt}</span>
        </div>
      </div>

      <div
        className="col-span-12 sm:col-span-8 lg:col-span-6 cursor-pointer rounded-lg md:rounded-xl
      hover:bg-zinc-50 hover:dark:bg-secondary/50 delay-100 duration-300 overflow-hidden border"
        onClick={() => deps._router.push(`/blog/series/${v.slug}`)}>
        <div className="relative overflow-hidden">
          {v.coverImage ? (
            <Image className="w-full h-dvh min-h-48 max-h-48" src={v.coverImage} alt={v.name} />
          ) : (
            <NoImage className="w-full h-dvh min-h-48 max-h-48" />
          )}
          <div className="absolute bottom-2 right-2 bg-indigo-700 px-2 py-1 rounded-lg text-zinc-50">
            <p className="text-xs text-zinc-50">{`${v.posts.totalDocuments} Articles`}</p>
          </div>
        </div>

        <div className="p-4">
          <p
            className="scroll-m-20 text-lg font-semibold tracking-tight
            text-zinc-800 dark:text-zinc-300 mb-2">
            {v.name}
          </p>

          <Small className="font-light dark:font-extralight leading-6 text-wrap truncate">
            {v.description?.text ? v.description.text : 'No description'}
          </Small>

          {uniqueTags.length ? (
            <div className="flex flex-wrap gap-x-1 gap-y-2 mt-2">
              {uniqueTags.map((tag, key) => (
                <p
                  className="h-fit w-fit text-xs text-indigo-700 dark:text-zinc-300 dark:font-thin
                  bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full text-nowrap"
                  key={key}>
                  {`#${tag.name}`}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Fallback = ({ className }: PropsWithClassName) => (
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
          rounded="full"
          n={3}
        />
      </div>
    </div>
  </div>
);

export const SeriesCardFallback = ({
  className,
  childClassName,
  n,
}: PropsWithClassName<{ childClassName?: string; n?: number }>) => (
  <>
    {n ? (
      <div className={cn('', className)}>
        {Array.from({ length: n }).map((_, key) => (
          <Fallback className={cn('', childClassName)} key={key} />
        ))}
      </div>
    ) : (
      <Fallback className={cn('', className)} />
    )}
  </>
);

export default SeriesCard;
