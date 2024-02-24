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
  Publication,
  SeriesConnection,
  SeriesEdge,
  PostEdge as PostEdgeBase,
  Edge as EdgeBase,
} from './hashnode';
import type { Post, Series, User, Tag } from './hashnode-interface';

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
  Pick<QueryPublicationArgs, 'host'> &
  SeriesPostsArgs;
export type QueryPublicationSeriesPostsResponse = {
  publication: Pick<Publication, 'id' | 'title' | 'url' | 'about'> & {
    series: Series;
  };
};

export type QueryPublicationSeriesListArgs = PublicationSeriesListArgs &
  Pick<QueryPublicationArgs, 'host'>;
export type QueryPublicationSeriesListResponse = {
  publication: Pick<Publication, 'id' | 'title' | 'url' | 'about'> & {
    seriesList: Pick<SeriesConnection, 'pageInfo' | 'totalDocuments'> & {
      edges: Array<Pick<SeriesEdge, 'cursor'> & { node: Series }>;
    };
  };
};
