import type {
  User,
  UserRepositoriesArgs,
  RepositoryConnection,
  RepositoryAffiliation,
  RepositoryPrivacy,
  RepositoryVisibility,
  OrderDirection,
  RepositoryOrderField,
} from './github';
import type { Repository } from './github-interface';

export type QueryMeViewerResponse = {
  viewer: Pick<
    User,
    | 'id'
    | 'name'
    | 'pronouns'
    | 'avatarUrl'
    | 'email'
    | 'bio'
    | 'location'
    | 'url'
    | 'followers'
    | 'following'
  >;
};

export type QueryViewerRepositoriesArgs = UserRepositoriesArgs;
export type QueryViewerRepositoriesResponse = {
  viewer: Pick<User, 'id'> & {
    repositories: Pick<RepositoryConnection, 'pageInfo' | 'totalCount'> & {
      nodes: Array<Repository>;
    };
  };
};

export type {
  RepositoryAffiliation,
  RepositoryPrivacy,
  RepositoryVisibility,
  OrderDirection,
  RepositoryOrderField,
};
