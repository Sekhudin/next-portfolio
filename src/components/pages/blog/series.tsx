import SeriesListSection from './series-section/series-list-section';
import HashnodeProvider from 'src/components/organisms/provider/hashnode';
import { seriesListSectionDeps } from './@series';

const Series = () => {
  return (
    <HashnodeProvider>
      <main>
        <SeriesListSection deps={seriesListSectionDeps} />
      </main>
    </HashnodeProvider>
  );
};

export default Series;
