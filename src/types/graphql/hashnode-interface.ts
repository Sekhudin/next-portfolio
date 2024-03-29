import type {
  User as UserBase,
  Post as PostBase,
  Series as SeriesBase,
  Tag as TagBase,
  Publication as PublicationBase,
  Maybe,
} from './hashnode';

export interface User
  extends Pick<UserBase, 'id' | 'name' | 'username' | 'profilePicture' | 'tagline' | 'location'> {}

export interface Tag extends Pick<TagBase, 'id' | 'name'> {}

export interface Post
  extends Pick<PostBase, 'id' | 'title' | 'brief' | 'url' | 'slug' | 'publishedAt'> {
  coverImage?: Maybe<Pick<NonNullable<PostBase['coverImage']>, 'url' | 'isPortrait'>>;
  series?: Maybe<Pick<NonNullable<PostBase['series']>, 'id' | 'name' | 'slug'>>;
  tags?: Maybe<Array<Tag>>;
}

export interface Series
  extends Pick<
    SeriesBase,
    'id' | 'name' | 'coverImage' | 'description' | 'slug' | 'createdAt' | 'posts'
  > {
  author: User;
}

export interface Publication
  extends Pick<PublicationBase, 'id' | 'title' | 'url' | 'about' | 'posts'> {}
