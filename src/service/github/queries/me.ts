import { TypedDocumentNode, gql } from '@apollo/client';
import { User as UserBase } from 'src/types/graphql/github';

namespace Me {
  export const QUERY: TypedDocumentNode<Response_ME> = gql`
    query Me {
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

  export class Result {
    static flatten(response: Response_ME) {
      const { followers, following, ...profile } = response.viewer;
      return { profile, followers, following };
    }
  }
}

type Response_ME = {
  viewer: Pick<
    UserBase,
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

export type { Response_ME };
export default Me;
