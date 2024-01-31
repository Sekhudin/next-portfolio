import { TypedDocumentNode, gql } from '@apollo/client';
import {
  RepositoryAffiliation as Affiliation,
  RepositoryPrivacy as Privacy,
  RepositoryVisibility as Visibility,
  RepositoryOrder as Order,
  OrderDirection,
  RepositoryOrderField as OrderField,
  type User as UserBase,
  type RepositoryConnection,
  type Repository as RepositoryBase,
  type UserRepositoriesArgs,
  Language,
  Maybe,
} from 'src/types/graphql/github';
import Util, { type ReturnSplitDescription } from 'src/service/helper/util';

namespace Repositories {
  export const QUERY: TypedDocumentNode<Response_REPOS, Args_REPOS> = gql`
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

  export class Result implements Omit<SingleRepository, 'description' | 'url' | 'createdAt'> {
    id!: string;
    name!: string;
    isHidden!: boolean;
    description!: ReturnSplitDescription;
    url?: string;
    homepageUrl?: string;
    primaryLanguage?: Maybe<Language>;
    createdAt?: string;

    constructor({ description, ...v }: SingleRepository) {
      Object.assign(this, v);
      this.description = Util.splitDescription(description);
      this.isHidden = Util.isRepoToHide(v.name);
    }

    static flatten(response: Response_REPOS) {
      const { nodes, ...result } = response.viewer.repositories;
      return { nodes, ...result };
    }

    static pageStatus(...param: Parameters<(typeof Util)['page']>): string {
      const page = Util.page(...param);
      return page.status;
    }
  }
}

type SingleRepository = Pick<
  RepositoryBase,
  'id' | 'name' | 'description' | 'url' | 'homepageUrl' | 'primaryLanguage' | 'createdAt'
>;
type Args_REPOS = Omit<UserRepositoriesArgs, ''>;
type Response_REPOS = {
  viewer: Pick<UserBase, 'id'> & {
    repositories: Pick<RepositoryConnection, 'pageInfo' | 'totalCount'> & {
      nodes: Array<SingleRepository>;
    };
  };
};

export { Affiliation, Privacy, Visibility, OrderDirection, OrderField };
export type { Args_REPOS, Response_REPOS, SingleRepository, Order };
export default Repositories;
