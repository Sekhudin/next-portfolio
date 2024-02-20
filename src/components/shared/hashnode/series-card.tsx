import { SkeletonText } from 'src/components/ui/skeleton';

const SeriesCard = () => {
  return (
    <div>
      <div>series card</div>
    </div>
  );
};

export const SeriesCardFallback = () => (
  <div>
    <SkeletonText />
    <SkeletonText />
  </div>
);

export default SeriesCard;
