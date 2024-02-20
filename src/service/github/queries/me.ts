import { TypedDocumentNode, gql } from '@apollo/client';
import { QueryMeResponse } from 'src/types/graphql/github-type';

export type _GithubQueryMeDI = typeof GithubQueryMe;
namespace GithubQueryMe {
  export const Query: TypedDocumentNode<QueryMeResponse> = gql`
    query ME {
      viewer {
        id
        name
        pronouns
        avatarUrl
        email
        bio
        location
        url
        followers {
          totalCount
        }
        following {
          totalCount
        }
      }
    }
  `;

  export function flatten(response: QueryMeResponse) {
    const { followers, following, ...profile } = response.viewer;
    return { profile, followers, following };
  }
}
export default GithubQueryMe;
