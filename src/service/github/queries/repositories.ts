import { TypedDocumentNode, gql } from '@apollo/client';
import { TECH_SELECTOR } from 'src/config/projects';
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
} from 'src/types/graphql/github';

const GET_REPOSITORIES: TypedDocumentNode<Response_REPOS, Args_REPOS> = gql`
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

namespace Repos {
  type TechProject = {
    tech: string | null;
    language: SingleRepository['primaryLanguage'];
  };
  export const techProject = ({ description, primaryLanguage }: SingleRepository): TechProject => {
    const techSplit = description?.split(TECH_SELECTOR)[1];
    const tech: string | null = description && techSplit ? techSplit.trim() : null;
    const language = primaryLanguage || null;
    return { tech, language };
  };
  export const flatten = (response: Response_REPOS) => {
    const { nodes, ...result } = response.viewer.repositories;
    return { nodes, ...result };
  };
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

export { Repos, Affiliation, Privacy, Visibility, OrderDirection, OrderField };
export type { SingleRepository, Args_REPOS, Response_REPOS, Order };
export default GET_REPOSITORIES;
