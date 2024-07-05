import { gql, Query } from 'packages/graphql';
import series from 'modules/hashnode/entities/series.entity';
import type {
  Publication,
  PublicationSeriesArgs,
  QueryPublicationArgs,
  Maybe,
} from 'types/hashnode';

type SeriesQueryArgs = PublicationSeriesArgs & QueryPublicationArgs;
class SeriesQuery {
  query: Query<unknown, SeriesQueryArgs> = gql`
    query Series($slug: String!, $host: String) {
      publication(host: $host) {
        id
        series(slug: $slug) {
          id
          name
          slug
          coverImage
          createdAt
          description {
            markdown
            html
            text
          }
          author {
            id
            name
            username
            profilePicture
            tagline
            location
          }
          posts(first: 5) {
            totalDocuments
          }
        }
      }
    }
  `;

  args(args: SeriesQueryArgs): SeriesQueryArgs {
    return args;
  }

  init(data: Maybe<Record<'publication', Publication>> | undefined) {
    if (data && data.publication.series) {
      return series(data.publication.series);
    }
    return null;
  }
}

const seriesQuery = new SeriesQuery();
export default seriesQuery;
