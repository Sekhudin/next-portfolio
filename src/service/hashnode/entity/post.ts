import type { Post as PostInterface } from 'src/types/graphql/hashnode-interface';
import Str from 'src/utils/string';

export type Post = PostInterface;
export default class PostEntity implements PostInterface {
  id!: string;
  title!: string;
  brief!: string;
  url!: string;
  slug!: string;
  publishedAt: any;
  coverImage?: Post['coverImage'];
  series?: Post['series'];
  tags?: Post['tags'];

  constructor(v: Post) {
    Object.assign(this, v);
    if (typeof v.publishedAt === 'string') {
      this.publishedAt = Str.toCustomDate(v.publishedAt, 'M D, Y');
    }
  }
}
