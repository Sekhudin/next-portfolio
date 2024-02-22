import { gql, type TypedDocumentNode } from '@apollo/client';
import type { QueryPostsSeriesArgs, QueryPostsSeriesResponse } from 'src/types/graphql/hashnode-type';
import Hashnode from 'src/service/helper/hashnode';

export type _HashnodeQueryPostsSeriesDI = typeof HashnodeQueryPostsSeries;
namespace HashnodeQueryPostsSeries {
  export const Query: TypedDocumentNode<QueryPostsSeriesResponse, QueryPostsSeriesArgs> = gql`
    query PUBLICATION_SERIES($slug: String!, $first: Int!, $after: String, $host: String) {
      publication(host: $host) {
        id
        title
        url
        about {
          markdown
          html
          text
        }
        series(slug: $slug) {
          id
          name
          slug
          coverImage
          createdAt
          description {
            markdown
            html
            text
          }
          author {
            id
            name
            username
            profilePicture
            tagline
            location
          }
          posts(first: $first, after: $after) {
            totalDocuments
            pageInfo {
              endCursor
              hasNextPage
            }
            edges {
              node {
                id
                title
                brief
                url
                publishedAt
                coverImage {
                  url
                  isPortrait
                }
                tags {
                  id
                  logo
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

  export function flatten(response: QueryPostsSeriesResponse) {
    const { series, ...flat } = response.publication;
    const uniqueTags = Hashnode.postEdgeUniqueTags(series.posts.edges).slice(0, 15);
    return { uniqueTags, series, ...flat };
  }
}
export default HashnodeQueryPostsSeries;
