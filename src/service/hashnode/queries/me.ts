import { TypedDocumentNode, gql } from '@apollo/client';
import type { MyUser } from 'src/types/graphql/hashnode';
import Util from 'src/service/helper/util';

const GET_ME: TypedDocumentNode<Response_ME> = gql`
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

type Response_ME = {
  me: Pick<MyUser, 'name' | 'username' | 'profilePicture' | 'tagline' | 'location'>;
};

class Me {
  static flatten(response: Response_ME) {
    return response.me;
  }

  static profileUrl(name: string): string {
    return Util.httpUrl('hashnode-profile', name);
  }
}

export { Me };
export type { Response_ME };
export default GET_ME;
