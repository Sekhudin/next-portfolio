import type {
  UserPostConnection,
  UserPostsArgs,
  UserPostsSort,
  UserPostConnectionFilter,
  Tag,
  InputMaybe,
  QueryPublicationArgs,
  PublicationSeriesArgs,
  SeriesPostsArgs,
  PublicationSeriesListArgs,
  Publication,
  SeriesConnection,
  SeriesEdge,
} from './hashnode';
import type { SingleMe, SinglePost, SingleSeries } from './hashnode-interface';

export type QueryMeResponse = {
  me: SingleMe;
};

export type QueryPostsArgs = Omit<UserPostsArgs, 'sortBy'> & {
  sortBy?: InputMaybe<UserPostsSort>;
};
export type QueryPostsResponse = {
  me: {
    posts: Pick<UserPostConnection, 'pageInfo' | 'totalDocuments'> & {
      nodes: Array<SinglePost>;
    };
  };
};

export type PostTag = Pick<Tag, 'id' | 'name'>;
export type PostFilter = UserPostConnectionFilter;
export type PostSortBy = UserPostsSort;

export type QueryPostsSeriesArgs = PublicationSeriesArgs &
  Pick<QueryPublicationArgs, 'host'> &
  SeriesPostsArgs;
export type QueryPostsSeriesResponse = {
  publication: Pick<Publication, 'id' | 'title' | 'url' | 'about'> & {
    series: SingleSeries;
  };
};

export type QueryPostsSeriesListArgs = PublicationSeriesListArgs &
  Pick<QueryPublicationArgs, 'host'>;
export type QueryPostsSeriesListResponse = {
  publication: Pick<Publication, 'id' | 'title' | 'url' | 'about'> & {
    seriesList: Pick<SeriesConnection, 'pageInfo' | 'totalDocuments'> & {
      edges: Array<Pick<SeriesEdge, 'cursor'> & { node: SingleSeries }>;
    };
  };
};
