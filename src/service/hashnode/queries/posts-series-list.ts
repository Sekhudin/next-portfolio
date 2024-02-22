import { gql, type TypedDocumentNode } from '@apollo/client';
import type {
  QueryPostsSeriesListArgs,
  QueryPostsSeriesListResponse,
} from 'src/types/graphql/hashnode-type';
import Hashnode from 'src/service/helper/hashnode';

export type _HashnodeQueryPostSeriesListDI = typeof HashnodeQueryPostSeriesList;
namespace HashnodeQueryPostSeriesList {
  export const Query: TypedDocumentNode<
    QueryPostsSeriesListResponse,
    QueryPostsSeriesListArgs
  > = gql`
    query PUBLICATION_SERIES_LIST($first: Int!, $after: String, $host: String) {
      publication(host: $host) {
        id
        title
        url
        about {
          markdown
          html
          text
        }
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

  export function flatten(response: QueryPostsSeriesListResponse) {
    const { seriesList: seriesListBase, ...flatten } = response.publication;
    const { pageInfo, totalDocuments, edges: seriesList } = seriesListBase;
    const uniqueTagsList: Array<ReturnType<(typeof Hashnode)['postEdgeUniqueTags']>> = [];
    for (let i = 0; i < seriesList.length; i++) {
      const series = seriesList[i];
      const uniqueTags = Hashnode.postEdgeUniqueTags(series.node.posts.edges).slice(0, 5);
      uniqueTagsList.push(uniqueTags);
    }
    return { seriesList, uniqueTagsList, pageInfo, totalDocuments, ...flatten };
  }
}

export default HashnodeQueryPostSeriesList;
