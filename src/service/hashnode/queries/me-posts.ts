import { gql, type TypedDocumentNode } from '@apollo/client';
import { UserPostsSort } from 'src/types/graphql/hashnode';
import type { QueryMePostsArgs, QueryMePostsResponse } from 'src/types/graphql/hashnode-type';
import Hashnode from 'src/service/helper/hashnode';
import Util from 'src/service/helper/util';

export type _HashnodeQueryMePostsDI = typeof HashnodeQueryMePosts;
namespace HashnodeQueryMePosts {
  export const Query: TypedDocumentNode<QueryMePostsResponse, QueryMePostsArgs> = gql`
    query ME_POSTS(
      $page: Int!
      $pageSize: Int!
      $sortBy: UserPostsSort
      $filter: UserPostConnectionFilter
    ) {
      me {
        id
        posts(page: $page, pageSize: $pageSize, sortBy: $sortBy, filter: $filter) {
          nodes {
            id
            title
            brief
            url
            publishedAt
            coverImage {
              url
              isPortrait
            }
            series {
              id
              name
              slug
            }
            tags {
              id
              name
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            previousPage
            nextPage
          }
          totalDocuments
        }
      }
    }
  `;

  export const SortBy = UserPostsSort;
  export function flatten(response: QueryMePostsResponse) {
    const { nodes, ...responseMePost } = response.me.posts;
    return { nodes, ...responseMePost };
  }

  export function pageStatus(...param: Parameters<(typeof Util)['page']>): string {
    const page = Util.page(...param);
    return page.status;
  }
}
export default HashnodeQueryMePosts;
