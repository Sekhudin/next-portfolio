import { TypedDocumentNode, gql } from '@apollo/client';
import type { QueryMeResponse } from 'src/types/graphql/hashnode-type';
import Hashnode from 'src/service/helper/hashnode';

export type _HashnodeQueryMeDI = typeof HashnodeQueryMe;
namespace HashnodeQueryMe {
  export const Query: TypedDocumentNode<QueryMeResponse> = gql`
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

  export function flatten(response: QueryMeResponse) {
    return response.me;
  }

  export function profileUrl(name: string): string {
    return Hashnode.httpUrl('hashnode-profile', name);
  }
}
export default HashnodeQueryMe;
