import { gql } from 'packages/graphql';
import user from 'modules/hashnode/entities/user.entity';
import type { User } from 'types/hashnode';

class ProfileQuery {
  readonly query = gql`
    query MyProfile {
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

  init(data: Record<'me', User>) {
    return user(data.me);
  }
}

const profileQuery = new ProfileQuery();
export default profileQuery;
