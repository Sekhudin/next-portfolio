'use client';
import SeriesPostsList, {
  SeriesPostListFallBack,
} from 'src/components/shared/hashnode/series-posts-list';
import type { _SuspenseComponentDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, Deps } from 'src/utils';

type Props = PropsWithClassName<{
  deps: Deps<'deps', typeof SeriesPostsList>['deps'] & {
    SuspenseComponent: _SuspenseComponentDI;
  };
  slug: string;
}>;

const SeriesPostsSection = ({ className, slug, deps }: Props) => {
  return (
    <>
      <deps.SuspenseComponent fallback={<SeriesPostListFallBack />}>
        <SeriesPostsList className={cn('', className)} slug={slug} pageSize={10} deps={deps} />
      </deps.SuspenseComponent>
    </>
  );
};

export default SeriesPostsSection;
