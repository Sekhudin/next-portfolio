import type {
  UserPostConnection,
  UserPostsArgs,
  UserPostsSort,
  UserPostConnectionFilter,
  InputMaybe,
  QueryPublicationArgs,
  PublicationSeriesArgs,
  SeriesPostsArgs,
  PublicationSeriesListArgs,
  SeriesConnection,
  SeriesEdge,
  PostEdge as PostEdgeBase,
  Edge as EdgeBase,
} from './hashnode';
import type { Post, Series, Publication, User, Tag } from './hashnode-interface';

export type Edge = EdgeBase;
export type PostEdge = Pick<PostEdgeBase, 'cursor'> & {
  node: Post;
};

export type QueryMeResponse = {
  me: User;
};

export type QueryMePostsArgs = Omit<UserPostsArgs, 'sortBy'> & {
  sortBy?: InputMaybe<UserPostsSort>;
};
export type QueryMePostsResponse = {
  me: {
    posts: Pick<UserPostConnection, 'pageInfo' | 'totalDocuments'> & {
      nodes: Array<Post>;
    };
  };
};

export type PostTag = Pick<Tag, 'id' | 'name'>;
export type PostFilter = UserPostConnectionFilter;
export type PostSortBy = UserPostsSort;

export type QueryPublicationSeriesPostsArgs = PublicationSeriesArgs &
  QueryPublicationArgs &
  SeriesPostsArgs;
export type QueryPublicationSeriesPostsResponse = {
  publication: Omit<Publication, 'posts'> & {
    series: Series;
  };
};

export type QueryPublicationSeriesListArgs = PublicationSeriesListArgs & QueryPublicationArgs;
export type QueryPublicationSeriesListResponse = {
  publication: Omit<Publication, 'posts'> & {
    seriesList: Pick<SeriesConnection, 'pageInfo' | 'totalDocuments'> & {
      edges: Array<Pick<SeriesEdge, 'cursor'> & { node: Series }>;
    };
  };
};
