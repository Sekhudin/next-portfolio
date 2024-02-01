import { gql, type TypedDocumentNode } from '@apollo/client';
import {
  UserPostsSort,
  type MyUser,
  type Maybe,
  type InputMaybe,
  type UserPostsArgs,
  type Tag,
  type Post,
  type UserPostConnectionFilter,
} from 'src/types/graphql/hashnode';
import Str from 'src/utils/string';
import Util from 'src/service/helper/util';

namespace HashnodeQueryPost {
  export const Query: TypedDocumentNode<
    _HashnodeQueryPosts['Response'],
    _HashnodeQueryPosts['Args']
  > = gql`
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

  export const SortBy = {
    ...UserPostsSort,
  };

  export class Result implements Omit<_HashnodeQueryPosts['Single'], 'publishedAt'> {
    id!: string;
    slug!: string;
    title!: string;
    brief!: string;
    url!: string;
    tags?: Maybe<Tag[]>;
    publishedAt?: string;

    constructor(v: _HashnodeQueryPosts['Single']) {
      Object.assign(this, v);
      if (typeof v.publishedAt === 'string') {
        this.publishedAt = Str.toCustomDate(v.publishedAt, 'M D, Y');
      }
    }

    static flatten(response: _HashnodeQueryPosts['Response']) {
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

type _HashnodeQueryPosts = {
  Args: Omit<UserPostsArgs, 'sortBy'> & {
    sortBy?: InputMaybe<UserPostsSort>;
  };
  Response: {
    me: {
      posts: Pick<MyUser['posts'], 'pageInfo' | 'totalDocuments'> & {
        nodes: Array<_HashnodeQueryPosts['Single']>;
      };
    };
  };
  Tag: Pick<Tag, 'id' | 'name'>;
  Filter: UserPostConnectionFilter;
  SortBy: (typeof HashnodeQueryPost)['SortBy'][keyof (typeof HashnodeQueryPost)['SortBy']];
  Single: Pick<Post, 'id' | 'title' | 'brief' | 'url' | 'slug' | 'tags' | 'publishedAt'>;
};

type _HashnodeQueryPostsDI = {
  Query: typeof HashnodeQueryPost.Query;
  Result: typeof HashnodeQueryPost.Result;
  SortBy: (typeof HashnodeQueryPost)['SortBy'];
};

export type { _HashnodeQueryPosts, _HashnodeQueryPostsDI };
export default HashnodeQueryPost;
