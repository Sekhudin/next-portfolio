import { gql, Query } from 'packages/graphql';
import repositoriesConnection from 'modules/github/entities/repository-conn.entity';
import type { RepositoryConnection, UserRepositoriesArgs } from 'types/github';

class RepositoriesQuery {
  readonly query: Query<unknown, UserRepositoriesArgs> = gql`
    query Repositories(
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

  args(args: UserRepositoriesArgs): UserRepositoriesArgs {
    return args;
  }

  init(data: Record<'viewer', Record<'repositories', RepositoryConnection>>) {
    return repositoriesConnection(data.viewer.repositories);
  }
}

const repositoriesQuery = new RepositoriesQuery();
export default repositoriesQuery;
