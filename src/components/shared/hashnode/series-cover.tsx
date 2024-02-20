import { Skeleton, SkeletonText, SkeletonParagraph } from 'src/components/ui/skeleton';
import { Separator } from 'src/components/ui/separator';
import Image from 'src/components/atoms/image/base-image';
import { H1 } from 'src/components/atoms/typography/h';
import { P } from 'src/components/atoms/typography/p';
import { _LinkComponentDI } from 'src/types/dependencies/util';
import Entity, { Series, UniqueSeriesTags } from 'src/service/hashnode/entity/series';
import { cn, PropsWithClassName } from 'src/utils';
import SeriesButton, { SeriesButtonFallback } from './series-button';

type Props = PropsWithClassName<{ series: Series; uniqueTags: UniqueSeriesTags[] }>;
const SeriesCover = ({ className, series, uniqueTags }: Props) => {
  const v = new Entity(series);

  return (
    <div className={cn(``, className)}>
      <H1 className="md:w-10/12 lg:w-9/12 flex space-x-1">
        <span className="text-indigo-700">Series:</span>
        <span>{v.name}</span>
      </H1>

      <div className="relative mt-6 rounded-lg overflow-hidden">
        {v.coverImage && (
          <Image
            className="w-full h-dvh min-h-60 max-h-60 sm:max-h-72 lg:max-h-96"
            src={v.coverImage}
            alt={v.name}
          />
        )}
        <div className="absolute bottom-2 right-2 bg-indigo-700 px-2 py-1 rounded-lg text-zinc-50">
          <p className="text-xs text-zinc-50">{`${v.posts.totalDocuments} Articles`}</p>
        </div>
      </div>

      {v.description?.text && <P className="md:w-10/12">{v.description.text}</P>}

      {uniqueTags.length ? (
        <div className="flex space-x-2 my-6">
          <div>
            <P className="font-semibold dark:font-semibold">Tags:</P>
          </div>

          <div className="w-11/12 flex flex-wrap gap-x-1 gap-y-2 px-2 py-1">
            {uniqueTags.map((tag, key) => (
              <p
                className="h-fit w-fit text-xs text-indigo-700 dark:text-zinc-300 dark:font-thin
                bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full"
                key={key}>
                {`#${tag.name}`}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      <SeriesButton>Other Series</SeriesButton>
      <Separator className="my-6" orientation="horizontal" />
    </div>
  );
};

export const SeriesCoverFallback = () => (
  <div>
    <SkeletonText className="md:w-10/12 lg:w-9/12" size="h1" />
    <Skeleton className="mt-6 w-full h-dvh min-h-60 max-h-60 sm:max-h-72 lg:max-h-96 rounded-lg" />
    <SkeletonParagraph className="mt-6" n={2} diffLast />

    <div className="flex space-x-2 my-6">
      <div className="font-semibold dark:font-semibold">Tags:</div>
      <SkeletonParagraph
        className="flex-row items-center gap-y-0 gap-x-1"
        childClassName="w-20"
        rounded="full"
        n={3}
      />
    </div>
    <SeriesButtonFallback />
    <Separator className="my-6" orientation="horizontal" />
  </div>
);

export default SeriesCover;
