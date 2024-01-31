import { gql, type TypedDocumentNode } from '@apollo/client';
import {
  UserPostsSort as SortBy,
  type MyUser,
  type Maybe,
  type UserPostsArgs,
  type Tag as TagBase,
  type Post as PostBase,
  type UserPostConnectionFilter as PostFilter,
} from 'src/types/graphql/hashnode';
import Str from 'src/utils/string';
import Util from 'src/service/helper/util';

namespace Posts {
  export const QUERY: TypedDocumentNode<Response_POST, UserPostsArgs> = gql`
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

  export class Result implements Omit<SinglePost, 'publishedAt'> {
    id!: string;
    slug!: string;
    title!: string;
    brief!: string;
    url!: string;
    tags?: Maybe<TagBase[]>;
    publishedAt?: string;

    constructor(v: SinglePost) {
      Object.assign(this, v);
      if (typeof v.publishedAt === 'string') {
        this.publishedAt = Str.toCustomDate(v.publishedAt, 'M D, Y');
      }
    }

    static flatten(response: Response_POST) {
      const { nodes, ...responseMePost } = response.me.posts;
      const tags = Util.hasnodeUniqueTags(nodes);
      return { tags, nodes, ...responseMePost };
    }

    static pageStatus(...param: Parameters<(typeof Util)['page']>): string {
      const page = Util.page(...param);
      return page.status;
    }
  }
}

type PostTag = Pick<TagBase, 'id' | 'name'>;
type SinglePost = Pick<
  PostBase,
  'id' | 'title' | 'brief' | 'url' | 'slug' | 'tags' | 'publishedAt'
>;
type Args_POST = Omit<UserPostsArgs, 'sortBy' | 'filter'> & {
  sortBy: SortBy;
};
type Response_POST = {
  me: {
    posts: Pick<MyUser['posts'], 'pageInfo' | 'totalDocuments'> & {
      nodes: Array<SinglePost>;
    };
  };
};

export { SortBy };
export type { SinglePost, PostFilter, PostTag, Args_POST, Response_POST };
export default Posts;
