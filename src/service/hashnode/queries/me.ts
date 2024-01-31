import { TypedDocumentNode, gql } from '@apollo/client';
import type { MyUser } from 'src/types/graphql/hashnode';
import Util from 'src/service/helper/util';

namespace Me {
  export const QUERY: TypedDocumentNode<Response_ME> = gql`
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
    static flatten(response: Response_ME) {
      return response.me;
    }

    static profileUrl(name: string): string {
      return Util.httpUrl('hashnode-profile', name);
    }
  }
}

type Response_ME = {
  me: Pick<MyUser, 'name' | 'username' | 'profilePicture' | 'tagline' | 'location'>;
};

export type { Response_ME };
export default Me;
