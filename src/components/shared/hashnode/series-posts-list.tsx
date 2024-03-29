'use client';
import { SkeletonText } from 'src/components/ui/skeleton';
import { Button } from 'src/components/ui/button';
import type { _UseApolloSuspenseQueryDI, _UseStateDI } from 'src/types/dependencies/hooks';
import type { _HashnodeQueryPublicationSeriesPostsDI } from 'src/types/dependencies/service';
import type { _HrefToDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, Deps } from 'src/utils';
import SeriesCover, { SeriesCoverFallback } from './series-cover';
import PostCard, { NoPostArticleYet, PostCardFallback, PostValueAs } from './post-card';

type DI = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _useState: _UseStateDI;
    _service: _HashnodeQueryPublicationSeriesPostsDI;
    _hrefTo: _HrefToDI;
  } & Deps<'deps', typeof PostCard>['deps'];
};

type Props = PropsWithClassName<DI> & {
  slug: string;
  pageSize?: number;
};

const SeriesPostsList = ({ className, slug, pageSize, deps }: Props) => {
  const [first, setFirst] = deps._useState<number>(pageSize || 10);
  const [after, setAfter] = deps._useState<string | null>(null);
  const { data } = deps._useQuery(deps._service.Query, {
    variables: { first, after, slug, host: `${process.env.NEXT_PUBLIC_HASHNODE_MY_HOST}` },
  });
  const { series, uniqueTags, ...v } = deps._service.flatten(data);

  const showAllArticlesHandler = () => {
    if (first < series.posts.totalDocuments) {
      setFirst(series.posts.totalDocuments);
    }
  };

  return (
    <div className={cn(``, className)}>
      <SeriesCover uniqueTags={uniqueTags} {...series} />

      <div className="grow flex flex-col gap-y-16">
        <div className="flex flex-col gap-y-10">
          {series.posts.edges.length ? (
            series.posts.edges.map(({ node }: PostValueAs<'node'>, key) => (
              <PostCard
                key={key}
                deps={{ LinkComponent: deps.LinkComponent, _hrefTo: deps._hrefTo }}
                postValue={node}
              />
            ))
          ) : (
            <NoPostArticleYet />
          )}
        </div>

        {first < series.posts.totalDocuments ? (
          <div className="flex justify-center">
            <Button
              className="flex flex-col justify-center rounded-full"
              variant="ghost"
              onClick={showAllArticlesHandler}>
              Tampilkan Semua
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export const SeriesPostListFallBack = () => (
  <div>
    <SeriesCoverFallback />
    <div className="flex flex-col gap-y-16">
      <PostCardFallback n={5} />
      <div className="flex justify-center">
        <SkeletonText className="w-36 py-1" size="lg" rounded="full" />
      </div>
    </div>
  </div>
);

export default SeriesPostsList;
