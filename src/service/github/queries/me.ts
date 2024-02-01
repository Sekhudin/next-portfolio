import { TypedDocumentNode, gql } from '@apollo/client';
import { User as UserBase } from 'src/types/graphql/github';

namespace GithubQueryMe {
  export const Query: TypedDocumentNode<_GithubQueryMe['Response']> = gql`
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
    static flatten(response: _GithubQueryMe['Response']) {
      const { followers, following, ...profile } = response.viewer;
      return { profile, followers, following };
    }
  }
}

type _GithubQueryMe = {
  Response: {
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
};

type _GithubQueryMeDI = {
  Query: typeof GithubQueryMe.Query;
  Result: typeof GithubQueryMe.Result;
};

export type { _GithubQueryMe, _GithubQueryMeDI };
export default GithubQueryMe;
