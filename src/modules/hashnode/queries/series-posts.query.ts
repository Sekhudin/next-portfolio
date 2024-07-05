import { gql, Query } from 'packages/graphql';
import series from 'modules/hashnode/entities/series.entity';
import type {
  Publication,
  PublicationSeriesArgs,
  QueryPublicationArgs,
  SeriesPostsArgs,
  Maybe,
} from 'types/hashnode';

type SeriesPostsQueryArgs = PublicationSeriesArgs & QueryPublicationArgs & SeriesPostsArgs;
class SeriesPostsQuery {
  query: Query<unknown, SeriesPostsQueryArgs> = gql`
    query SeriesPosts($slug: String!, $first: Int!, $after: String, $host: String) {
      publication(host: $host) {
        id
        series(slug: $slug) {
          id
          posts(first: $first, after: $after) {
            totalDocuments
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                id
                title
                brief
                url
                publishedAt
                coverImage {
                  url
                  isPortrait
                }
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

  args(args: SeriesPostsQueryArgs): SeriesPostsQueryArgs {
    return args;
  }

  init(data: Maybe<Record<'publication', Publication>> | undefined) {
    if (data && data.publication.series) {
      return series(data.publication.series);
    }
    return null;
  }

  combine(
    prev: Record<'publication', Publication>,
    more: Record<'publication', Publication>
  ): Partial<Publication> {
    const prevData = this.init(prev);
    const moreData = this.init(more);
    if (prevData && moreData) {
      const combined = series({
        ...moreData,
        posts: { ...moreData.posts, edges: [...prevData.posts.edges, ...moreData.posts.edges] },
      });

      return { ...more.publication, series: combined };
    }
    return { ...more.publication };
  }
}

const seriesPostsQuery = new SeriesPostsQuery();
export default seriesPostsQuery;
