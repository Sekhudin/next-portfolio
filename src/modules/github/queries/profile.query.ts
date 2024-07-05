import { gql } from 'packages/graphql';
import user from 'modules/github/entities/user.entity';
import type { User } from 'types/github';

class ProfileQuery {
  readonly query = gql`
    query Profile {
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

  init(data: Record<'viewer', User>) {
    return user(data.viewer);
  }
}

const profileQuery = new ProfileQuery();
export default profileQuery;
