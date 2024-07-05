import { gql, Query } from 'packages/graphql';
import series from 'modules/hashnode/entities/series.entity';
import type {
  Publication,
  PublicationSeriesArgs,
  QueryPublicationArgs,
  Maybe,
} from 'types/hashnode';

type SeriesPostsTagsQueryArgs = PublicationSeriesArgs & QueryPublicationArgs;
class SeriesPostsTagsQuery {
  query: Query<unknown, SeriesPostsTagsQueryArgs> = gql`
    query SeriesPostsTags($slug: String!, $host: String) {
      publication(host: $host) {
        id
        series(slug: $slug) {
          id
          posts(first: 5) {
            totalDocuments
            edges {
              node {
                id
                tags {
                  id
                  logo
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  args(args: SeriesPostsTagsQueryArgs): SeriesPostsTagsQueryArgs {
    return args;
  }

  init(data: Maybe<Record<'publication', Publication>> | undefined) {
    if (data && data.publication.series) {
      return series(data.publication.series);
    }
    return null;
  }
}

const seriesPostsTagsQuery = new SeriesPostsTagsQuery();
export default seriesPostsTagsQuery;
