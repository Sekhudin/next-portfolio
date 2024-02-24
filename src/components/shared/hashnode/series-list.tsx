'use client';
import { Separator } from 'src/components/ui/separator';
import { SkeletonText, SkeletonParagraph } from 'src/components/ui/skeleton';
import { H1 } from 'src/components/atoms/typography/h';
import { P } from 'src/components/atoms/typography/p';
import type {
  _UseApolloSuspenseQueryDI,
  _UseStateDI,
  _UseRouterDI,
} from 'src/types/dependencies/hooks';
import type { _HashnodeQueryPublicationSeriesListDI } from 'src/types/dependencies/service';
import type { _HrefToDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName } from 'src/utils';
import SeriesCard, { SeriesCardFallback } from './series-card';

type Deps = {
  deps: {
    _useQuery: _UseApolloSuspenseQueryDI;
    _useState: _UseStateDI;
    _useRouter: _UseRouterDI;
    _hrefTo: _HrefToDI;
    _service: _HashnodeQueryPublicationSeriesListDI;
  };
};

type Props = PropsWithClassName<
  Deps & {
    pageSize?: number;
  }
>;

const SeriesList = ({ className, pageSize, deps }: Props) => {
  const [first, setFirst] = deps._useState<number>(pageSize || 10);
  const [after, setAfter] = deps._useState<string | null>(null);
  const router = deps._useRouter();
  const { data } = deps._useQuery(deps._service.Query, {
    variables: { first, after, host: `${process.env.NEXT_PUBLIC_HASHNODE_MY_HOST}` },
  });
  const { seriesList, uniqueTagsList, pageInfo, totalDocuments, ...v } =
    deps._service.flatten(data);

  return (
    <div className={cn('', className)}>
      <H1 className="md:w-10/12 lg:w-9/12 flex space-x-1">{v.title}</H1>
      {v.about?.text && <P className="md:w-10/12">{v.about.text}</P>}

      <Separator className="my-6" orientation="horizontal" />

      <div className="flex flex-col gap-y-6">
        {seriesList.map(({ node }, key) => (
          <SeriesCard
            key={key}
            uniqueTags={uniqueTagsList[key]}
            deps={{ _router: router }}
            {...node}
          />
        ))}
      </div>
    </div>
  );
};

export const SeriesListFallback = ({ className }: PropsWithClassName) => (
  <div className={cn('', className)}>
    <SkeletonText className="w-7/12 lg:w-4/12" size="h1" />
    <SkeletonParagraph className="mt-4" n={2} diffLast />
    <Separator className="my-6" orientation="horizontal" />
    <SeriesCardFallback className="flex flex-col gap-y-6" n={10} />
  </div>
);

export default SeriesList;
