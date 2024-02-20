import type {
  MyUser,
  UserPostConnection,
  UserPostsArgs,
  UserPostsSort,
  UserPostConnectionFilter,
  Tag,
  InputMaybe,
  QueryPublicationArgs,
  PublicationSeriesArgs,
  SeriesPostsArgs,
  Publication,
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

export type QueryPostSeriesArgs = PublicationSeriesArgs &
  Pick<QueryPublicationArgs, 'host'> &
  SeriesPostsArgs;
export type QueryPostSeriesResponse = {
  publication: Pick<Publication, 'id' | 'title' | 'url' | 'about'> & {
    series: SingleSeries;
  };
};
