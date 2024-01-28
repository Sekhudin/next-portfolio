import { TypedDocumentNode, gql } from '@apollo/client';
import type { MyUser } from 'src/types/graphql/hashnode';

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

namespace Me {
  export const urlProfile = (username: string) => `https://hashnode.com/@${username}`;
  export const flatten = (dt: Response_ME) => dt.me;
}

type Response_ME = {
  me: Pick<MyUser, 'name' | 'username' | 'profilePicture' | 'tagline' | 'location'>;
};

export { Me };
export type { Response_ME };
export default GET_ME;
