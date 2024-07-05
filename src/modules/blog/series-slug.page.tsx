import { Separator } from 'packages/ui/separator';
import SeriesButton from 'modules/hashnode/components/buttons/series.button';
import SeriesSummary from 'modules/hashnode/components/summaries/series.summary';
import SeriesPostsTags from 'modules/hashnode/components/lists/posts-tags.list';
import SeriesPostsList from 'modules/hashnode/components/lists/series.posts.list';
import { HASHNODE_CLIENT } from 'configs/env.config';
import type { NextPageProps } from 'packages/utils/cn';

const SeriesSlug = ({ params }: NextPageProps<'slug'>) => {
  return (
    <main>
      <div>
        <SeriesSummary host={HASHNODE_CLIENT.HOST} slug={params.slug} />
        <SeriesPostsTags host={HASHNODE_CLIENT.HOST} slug={params.slug} />
        <SeriesButton>All Series</SeriesButton>
        <Separator className="my-6" orientation="horizontal" />
      </div>
      <SeriesPostsList host={HASHNODE_CLIENT.HOST} slug={params.slug} first={10} nSkeleton={10} />
    </main>
  );
};

export default SeriesSlug;
