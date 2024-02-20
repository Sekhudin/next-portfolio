import HashnodeProvider from 'src/components/organisms/provider/hashnode';
import type { PagePropsParams } from 'src/utils';
import SeriesPostsSection from './series[slug]-section/series-posts-section';
import { seriesPostsSectionDeps } from './@series[slug]';

type Props = PagePropsParams<'slug'>;
const SeriesSlug = ({ params }: Props) => {
  return (
    <HashnodeProvider>
      <div>
        <SeriesPostsSection className="" slug={params.slug} deps={seriesPostsSectionDeps} />
      </div>
    </HashnodeProvider>
  );
};

export default SeriesSlug;
