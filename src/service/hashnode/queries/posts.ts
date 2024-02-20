import { gql, type TypedDocumentNode } from '@apollo/client';
import { UserPostsSort } from 'src/types/graphql/hashnode';
import type { QueryPostsArgs, QueryPostsResponse } from 'src/types/graphql/hashnode-type';
import Hashnode from 'src/service/helper/hashnode';
import Util from 'src/service/helper/util';

export type _HashnodeQueryPostsDI = typeof HashnodeQueryPost;
namespace HashnodeQueryPost {
  export const Query: TypedDocumentNode<QueryPostsResponse, QueryPostsArgs> = gql`
    query POSTS(
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
              logo
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
  export function flatten(response: QueryPostsResponse) {
    const { nodes, ...responseMePost } = response.me.posts;
    const tags = Hashnode.postUniqueTags(nodes).slice(0, 20);
    return { tags, nodes, ...responseMePost };
  }

  export function pageStatus(...param: Parameters<(typeof Util)['page']>): string {
    const page = Util.page(...param);
    return page.status;
  }
}
export default HashnodeQueryPost;
