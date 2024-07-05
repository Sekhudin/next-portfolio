import { gql, Query } from 'packages/graphql';
import publication from 'modules/hashnode/entities/publicaton.entity';
import type { Publication, QueryPublicationArgs } from 'types/hashnode';

type PublicationQueryArgs = QueryPublicationArgs;
class PublicationQuery {
  query: Query<unknown, PublicationQueryArgs> = gql`
    query Publication($host: String) {
      publication(host: $host) {
        id
        title
        url
        about {
          markdown
          html
          text
        }
      }
    }
  `;

  args(args: PublicationQueryArgs): PublicationQueryArgs {
    return args;
  }

  init(data: Record<'publication', Publication>) {
    return publication(data.publication);
  }
}

const publicationQuery = new PublicationQuery();
export default publicationQuery;
