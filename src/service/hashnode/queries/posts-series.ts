import { gql, type TypedDocumentNode } from '@apollo/client';
import type { QueryPostSeriesArgs, QueryPostSeriesResponse } from 'src/types/graphql/hashnode-type';
import Hashnode from 'src/service/helper/hashnode';
import Util from 'src/service/helper/util';

export type _HashnodeQueryPostsSeriesDI = typeof HashnodeQueryPostsSeries;
namespace HashnodeQueryPostsSeries {
  export const Query: TypedDocumentNode<QueryPostSeriesResponse, QueryPostSeriesArgs> = gql`
    query PUBLICATION_SERIES($slug: String!, $first: Int!, $host: String, $after: String) {
      publication(host: $host) {
        id
        title
        url
        about {
          markdown
          html
          text
        }
        series(slug: $slug) {
          id
          name
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

  export function flatten(response: QueryPostSeriesResponse) {
    const { series, ...flat } = response.publication;
    const uniqueTags = Hashnode.postEdgeUniqueTags(series.posts.edges).slice(0, 15);
    return { uniqueTags, series, ...flat };
  }

  export function pageStatus(...param: Parameters<(typeof Util)['page']>): string {
    const page = Util.page(...param);
    return page.status;
  }
}
export default HashnodeQueryPostsSeries;
