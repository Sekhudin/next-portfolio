import PublicationSummary from 'modules/hashnode/components/summaries/publication.summary';
import SeriesList from 'modules/hashnode/components/lists/series.list';
import { HASHNODE_CLIENT } from 'configs/env.config';

const Series = () => {
  return (
    <main>
      <PublicationSummary host={HASHNODE_CLIENT.HOST} />
      <SeriesList host={HASHNODE_CLIENT.HOST} first={10} nSkeleton={10} />
    </main>
  );
};

export default Series;
