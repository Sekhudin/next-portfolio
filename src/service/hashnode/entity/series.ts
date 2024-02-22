import type { SingleSeries as Series } from 'src/types/graphql/hashnode-interface';
import type { PostTag as UniqueSeriesTags } from 'src/types/graphql/hashnode-type';
import Str from 'src/utils/string';

export type { Series, UniqueSeriesTags };
export default class SeriesEntity implements Series {
  id!: string;
  name!: string;
  posts!: Series['posts'];
  author!: Series['author'];
  slug!: string;
  createdAt!: Series['createdAt'];
  coverImage?: Series['coverImage'];
  description?: Series['description'];

  constructor(v: Series) {
    Object.assign(this, v);
    if (typeof v.createdAt === 'string') {
      this.createdAt = Str.toCustomDate(v.createdAt, 'M D, Y');
    }
  }
}
