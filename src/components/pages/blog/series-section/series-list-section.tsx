'use client';
import SeriesList, { SeriesListFallback } from 'src/components/shared/hashnode/series-list';
import type { _SuspenseComponentDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, Deps } from 'src/utils';

type Props = PropsWithClassName<{
  deps: Deps<'deps', typeof SeriesList>['deps'] & {
    SuspenseComponent: _SuspenseComponentDI;
  };
}>;

const SeriesListSection = ({ className, deps }: Props) => {
  return (
    <>
      <deps.SuspenseComponent fallback={<SeriesListFallback />}>
        <SeriesList
          className={cn('', className)}
          deps={{
            _useQuery: deps._useQuery,
            _useState: deps._useState,
            _useRouter: deps._useRouter,
            _service: deps._service,
            _hrefTo: deps._hrefTo,
          }}
        />
      </deps.SuspenseComponent>
    </>
  );
};

export default SeriesListSection;
