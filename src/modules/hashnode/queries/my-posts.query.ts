import { gql, Query } from 'packages/graphql';
import postConnection from 'modules/hashnode/entities/user-post-conn.entity';
import type { UserPostsArgs, UserPostConnection } from 'types/hashnode';

class PostsQuery {
  readonly query: Query<unknown, UserPostsArgs> = gql`
    query MyPosts(
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

  args(args: UserPostsArgs): UserPostsArgs {
    return args;
  }

  init(data: Record<'me', Record<'posts', UserPostConnection>>) {
    return postConnection(data.me.posts);
  }
}

const postsQuery = new PostsQuery();
export default postsQuery;
