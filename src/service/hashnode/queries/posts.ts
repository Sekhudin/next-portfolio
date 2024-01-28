import { gql, type TypedDocumentNode } from '@apollo/client';
import {
  MyUser,
  UserPostsArgs,
  Tag as TagBase,
  Post as PostBase,
  UserPostsSort as PostSort,
  UserPostConnectionFilter as PostFilter,
} from 'src/types/graphql/hashnode';

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
  const uniquePostTags = (nodes: Array<SinglePost>): Array<PostTag> => {
    const uniqueSet = new Set<PostTag>();
    for (const post of nodes) {
      if (post.tags) {
        post.tags.forEach((tag) => {
          if (tag.id) {
            uniqueSet.add(tag);
          }
        });
      }
    }
    return Array.from(uniqueSet);
  };

  export const flatten = (response: Response_POST) => {
    const { nodes, ...responseMePost } = response.me.posts;
    const uniqueTags = uniquePostTags(nodes);
    return { nodes, uniqueTags, ...responseMePost };
  };
}

type PostTag = Pick<TagBase, 'id' | 'name'>;
type SinglePost = Pick<
  PostBase,
  'id' | 'title' | 'brief' | 'url' | 'slug' | 'tags' | 'publishedAt'
>;
type Args_POST = Omit<UserPostsArgs, 'sortBy' | 'filter'> & {
  sortBy: PostSort;
};
type Response_POST = {
  me: {
    posts: Pick<MyUser['posts'], 'pageInfo' | 'totalDocuments'> & {
      nodes: Array<SinglePost>;
    };
  };
};

export { Post, PostSort };
export type { SinglePost, PostFilter, PostTag, Args_POST, Response_POST };
export default GET_POSTS;
