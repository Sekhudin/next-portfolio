import { TypedDocumentNode, gql } from '@apollo/client';
import {
  RepositoryAffiliation,
  RepositoryPrivacy,
  RepositoryVisibility,
  RepositoryOrder,
  OrderDirection as OrderDir,
  RepositoryOrderField,
  type User as UserBase,
  type RepositoryConnection,
  type Repository as RepositoryBase,
  type UserRepositoriesArgs,
  Language,
  Maybe,
} from 'src/types/graphql/github';
import Util, { type ReturnSplitDescription } from 'src/service/helper/util';

namespace GithubQueryRepos {
  export const Query: TypedDocumentNode<
    _GithubQueryRepos['Response'],
    _GithubQueryRepos['Args']
  > = gql`
    query REPOSITORIES(
      $after: String
      $before: String
      $first: Int
      $last: Int
      $orderBy: RepositoryOrder
      $ownerAffiliations: [RepositoryAffiliation]
      $privacy: RepositoryPrivacy
      $visibility: RepositoryVisibility
      $hasIssuesEnabled: Boolean
      $isArchived: Boolean
      $isFork: Boolean
      $isLocked: Boolean
    ) {
      viewer {
        id
        repositories(
          after: $after
          before: $before
          first: $first
          last: $last
          orderBy: $orderBy
          ownerAffiliations: $ownerAffiliations
          privacy: $privacy
          visibility: $visibility
          hasIssuesEnabled: $hasIssuesEnabled
          isArchived: $isArchived
          isFork: $isFork
          isLocked: $isLocked
        ) {
          nodes {
            id
            name
            description
            url
            homepageUrl
            primaryLanguage {
              id
              name
              color
            }
            createdAt
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          totalCount
        }
      }
    }
  `;

  export class Result
    implements Omit<_GithubQueryRepos['Single'], 'description' | 'url' | 'createdAt'>
  {
    id!: string;
    name!: string;
    isHidden!: boolean;
    description!: ReturnSplitDescription;
    url?: string;
    homepageUrl?: string;
    primaryLanguage?: Maybe<Language>;
    createdAt?: string;

    constructor({ description, ...v }: _GithubQueryRepos['Single']) {
      Object.assign(this, v);
      this.description = Util.splitDescription(description);
      this.isHidden = Util.isRepoToHide(v.name);
    }

    static flatten(response: _GithubQueryRepos['Response']) {
      const { nodes, ...result } = response.viewer.repositories;
      return { nodes, ...result };
    }

    static pageStatus(...param: Parameters<(typeof Util)['page']>): string {
      const page = Util.page(...param);
      return page.status;
    }
  }

  export const Affiliation = { ...RepositoryAffiliation };
  export const Privacy = { ...RepositoryPrivacy };
  export const Visibility = { ...RepositoryVisibility };
  export const OrderDirection = { ...OrderDir };
  export const OrderField = { ...RepositoryOrderField };
}

type _GithubQueryRepos = {
  Single: Pick<
    RepositoryBase,
    'id' | 'name' | 'description' | 'url' | 'homepageUrl' | 'primaryLanguage' | 'createdAt'
  >;
  Args: Omit<UserRepositoriesArgs, ''>;
  Response: {
    viewer: Pick<UserBase, 'id'> & {
      repositories: Pick<RepositoryConnection, 'pageInfo' | 'totalCount'> & {
        nodes: Array<_GithubQueryRepos['Single']>;
      };
    };
  };
  Order: RepositoryOrder;
  Afifiliation: (typeof GithubQueryRepos)['Affiliation'][keyof (typeof GithubQueryRepos)['Affiliation']];
  Privacy: (typeof GithubQueryRepos)['Privacy'][keyof (typeof GithubQueryRepos)['Privacy']];
  Visibility: (typeof GithubQueryRepos)['Visibility'][keyof (typeof GithubQueryRepos)['Visibility']];
  OrderDirection: (typeof GithubQueryRepos)['OrderDirection'][keyof (typeof GithubQueryRepos)['OrderDirection']];
  OrderField: (typeof GithubQueryRepos)['OrderField'][keyof (typeof GithubQueryRepos)['OrderField']];
};

type _GithubQueryReposDI = {
  Query: typeof GithubQueryRepos.Query;
  Result: typeof GithubQueryRepos.Result;
  Affiliation: (typeof GithubQueryRepos)['Affiliation'];
  Privacy: (typeof GithubQueryRepos)['Privacy'];
  Visibility: (typeof GithubQueryRepos)['Visibility'];
  OrderDirection: (typeof GithubQueryRepos)['OrderDirection'];
  OrderField: (typeof GithubQueryRepos)['OrderField'];
};

export type { _GithubQueryRepos, _GithubQueryReposDI };
export default GithubQueryRepos;
