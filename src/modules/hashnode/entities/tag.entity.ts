import type { Content, FeedPostConnection, Maybe, Tag } from 'types/hashnode';

class TagEntity implements Tag {
  followersCount!: number;
  id!: string;
  info?: Maybe<Content> | undefined;
  logo?: Maybe<string> | undefined;
  name!: string;
  postsCount!: number;
  slug!: string;
  tagline?: Maybe<string> | undefined;
  __typename?: 'Tag' | undefined;
  posts!: FeedPostConnection;

  constructor(values: Partial<Tag>) {
    Object.assign(this, values);
  }
}

class TagMethods extends TagEntity {
  constructor(values: Partial<Tag>) {
    super(values);
  }

  getName() {
    return '#'.concat(this.name);
  }
}

const tag = (values: Partial<Tag>) => new TagMethods(values);
export default tag;
