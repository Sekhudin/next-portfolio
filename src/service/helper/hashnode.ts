import type { Tag, Post, Edge, PostEdge } from 'src/types/graphql/hashnode';

type HttpUrlType = 'hashnode-profile';

namespace UtilHashnode {
  export function httpUrl(type: HttpUrlType, extra: string): string {
    if (type === 'hashnode-profile') return `https://hashnode.com/@${extra}`;
    return '/';
  }

  export function postUniqueTags(posts: Array<Pick<Post, 'tags'>>) {
    const uniqueSet = new Set<Tag>();

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      if (post.tags) {
        for (let j = 0; j < post.tags.length; j++) {
          const tag = post.tags[j];
          if (tag.id) {
            uniqueSet.add(tag);
          }
        }
      }
    }
    return Array.from(uniqueSet);
  }

  export function postEdgeUniqueTags(edges: Edge[] & PostEdge[]) {
    const uniqueTags = new Set<Tag>();
    for (let index = 0; index < edges.length; index++) {
      const tags = edges[index].node.tags;
      if (tags) {
        for (let i = 0; i < tags.length; i++) {
          if (tags[i]) {
            uniqueTags.add(tags[i]);
          }
        }
      }
    }

    return Array.from(uniqueTags);
  }
}

export default UtilHashnode;
