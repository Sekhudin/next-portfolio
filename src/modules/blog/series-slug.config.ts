import Metadata from 'packages/utils/metadata';

type Parameters = 'slug';
export const generateMetadata = Metadata.generate<Parameters>(async ({ params }, parent) => {
  return {
    title: 'Blog | '.concat(params.slug),
  };
});
