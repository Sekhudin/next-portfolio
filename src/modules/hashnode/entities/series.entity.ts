import path from 'path';
import Str from 'packages/utils/string';
import Arr from 'packages/utils/array';
import { MapCallbackfn } from 'types/common';
import type {
  Content,
  Maybe,
  PostEdge,
  Series,
  SeriesPostConnection,
  SortOrder,
  Tag,
  User,
} from 'types/hashnode';

export class SeriesEntity implements Series {
  id!: string;
  __typename?: 'Series' | undefined;
  author!: User;
  coverImage?: Maybe<string> | undefined;
  createdAt: any;
  cuid?: Maybe<string> | undefined;
  description?: Maybe<Content> | undefined;
  name!: string;
  posts!: SeriesPostConnection;
  slug!: string;
  sortOrder!: SortOrder;

  constructor(values: Partial<Series>) {
    Object.assign(this, values);
  }
}

class SeriesMethods extends SeriesEntity {
  constructor(values: Partial<Series>) {
    super(values);
  }

  getPosts() {
    return this.posts.edges;
  }

  getTotalArticles() {
    return this.posts.totalDocuments.toString().concat(' Articles');
  }

  getDescriptionText() {
    if (!this.description) return 'no description';
    return this.description.text;
  }

  getSeriesUrl() {
    return path.join('/blog/series', this.slug);
  }

  getFormattedCreatedAt() {
    return Str(this.createdAt).parseCustomDate('M D, Y');
  }

  getUniqueTags(limit?: number) {
    const tags = new Set<Tag>();
    const posts = this.posts.edges;
    for (let j = 0; j < posts.length; j++) {
      const postTags = posts[j].node.tags;
      if (postTags) {
        for (let i = 0; i < postTags.length; i++) {
          if (postTags[i]) {
            tags.add(postTags[i]);
          }
        }
      }
    }
    if (!limit) return Array.from(tags);
    return Array.from(tags).slice(0, limit);
  }

  mapUniqueTags(cb: MapCallbackfn<Tag>, limit: number = 5) {
    return Arr(this.getUniqueTags(limit)).map(cb);
  }

  mapPosts(cb: MapCallbackfn<PostEdge>) {
    return Arr(this.posts.edges).map(cb);
  }
}

const series = (values: Partial<Series>) => new SeriesMethods(values);
export default series;
