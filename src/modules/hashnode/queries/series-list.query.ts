import { gql, Query } from 'packages/graphql';
import seriesConnection from 'modules/hashnode/entities/series-conn.entity';
import type { Publication, PublicationSeriesListArgs, QueryPublicationArgs } from 'types/hashnode';

type SeriesListQueryArgs = PublicationSeriesListArgs & QueryPublicationArgs;
class SeriesListQuery {
  query: Query<unknown, SeriesListQueryArgs> = gql`
    query SeriesList($first: Int!, $after: String, $host: String) {
      publication(host: $host) {
        id
        seriesList(first: $first, after: $after) {
          totalDocuments
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            cursor
            node {
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
              posts(first: 10) {
                totalDocuments
                edges {
                  node {
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
      }
    }
  `;

  args(args: SeriesListQueryArgs): SeriesListQueryArgs {
    return args;
  }

  init(data: Record<'publication', Publication> | undefined) {
    if (data) {
      return seriesConnection(data.publication.seriesList);
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
      const combined = seriesConnection({
        ...moreData,
        edges: [...prevData.edges, ...moreData.edges],
      });
      return { ...more.publication, seriesList: combined };
    }
    return { ...more.publication };
  }
}

const seriesListQuery = new SeriesListQuery();
export default seriesListQuery;
