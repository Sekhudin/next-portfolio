import { TypedDocumentNode, gql } from '@apollo/client';
import { QueryMeViewerResponse } from 'src/types/graphql/github-type';

export type _GithubQueryMeViewerDI = typeof GithubQueryMeViewer;
namespace GithubQueryMeViewer {
  export const Query: TypedDocumentNode<QueryMeViewerResponse> = gql`
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

  export function flatten(response: QueryMeViewerResponse) {
    const { followers, following, ...profile } = response.viewer;
    return { profile, followers, following };
  }
}
export default GithubQueryMeViewer;
