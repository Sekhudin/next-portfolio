import { TypedDocumentNode, gql } from '@apollo/client';
import {
  RepositoryAffiliation,
  RepositoryPrivacy,
  RepositoryVisibility,
  OrderDirection as OrderDir,
  RepositoryOrderField,
} from 'src/types/graphql/github';
import type {
  QueryRepositoriesArgs,
  QueryRepositoriesResponse,
} from 'src/types/graphql/github-type';
import Util from 'src/service/helper/util';

export type _GithubQueryRepositoriesDI = typeof GithubQueryRepositories;
namespace GithubQueryRepositories {
  export const Query: TypedDocumentNode<QueryRepositoriesResponse, QueryRepositoriesArgs> = gql`
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

  export function flatten(response: QueryRepositoriesResponse) {
    const { nodes, ...result } = response.viewer.repositories;
    return { nodes, ...result };
  }

  export function pageStatus(...param: Parameters<(typeof Util)['page']>): string {
    const page = Util.page(...param);
    return page.status;
  }

  export const Affiliation = RepositoryAffiliation;
  export const Privacy = RepositoryPrivacy;
  export const Visibility = RepositoryVisibility;
  export const OrderDirection = OrderDir;
  export const OrderField = RepositoryOrderField;
}
export default GithubQueryRepositories;
