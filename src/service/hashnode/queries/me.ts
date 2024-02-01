import { TypedDocumentNode, gql } from '@apollo/client';
import type { MyUser } from 'src/types/graphql/hashnode';
import Util from 'src/service/helper/util';

namespace HashnodeQueryMe {
  export const Query: TypedDocumentNode<_HashnodeQueryMe['Response']> = gql`
    query ME {
      me {
        id
        name
        username
        profilePicture
        tagline
        location
      }
    }
  `;

  export class Result {
    static flatten(response: _HashnodeQueryMe['Response']) {
      return response.me;
    }

    static profileUrl(name: string): string {
      return Util.httpUrl('hashnode-profile', name);
    }
  }
}

type _HashnodeQueryMe = {
  Response: {
    me: Pick<MyUser, 'name' | 'username' | 'profilePicture' | 'tagline' | 'location'>;
  };
};

type _HashnodeQueryMeDI = {
  Query: typeof HashnodeQueryMe.Query;
  Result: typeof HashnodeQueryMe.Result;
};

export type { HashnodeQueryMe, _HashnodeQueryMeDI };
export default HashnodeQueryMe;
