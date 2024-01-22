import { TypedDocumentNode, gql } from '@apollo/client';
import { MyUser, UserPostsSort, UserPostsArgs, Post as PostBase } from 'src/types/graphql/hashnode';

const GET_POSTS: TypedDocumentNode<Response_POST, UserPostsArgs> = gql`
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

namespace Post {
  export const flatten = (dt: Response_POST) => dt.me.posts;
}

type SinglePost = Pick<PostBase, 'id' | 'title' | 'brief' | 'url' | 'tags' | 'publishedAt'>;
type Args_POST = Omit<UserPostsArgs, 'sortBy' | 'filter'> & {
  sortBy: UserPostsSort;
};
type Response_POST = {
  me: {
    posts: Pick<MyUser['posts'], 'pageInfo' | 'totalDocuments'> & {
      nodes: Array<SinglePost>;
    };
  };
};

export { Post, UserPostsSort };
export type { SinglePost, Args_POST, Response_POST };
export default GET_POSTS;
