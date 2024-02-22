import type { User, Post, Series, Maybe } from './hashnode';
export interface SingleMe
  extends Pick<User, 'name' | 'username' | 'profilePicture' | 'tagline' | 'location'> {}

export interface SinglePost
  extends Pick<Post, 'id' | 'title' | 'brief' | 'url' | 'slug' | 'tags' | 'publishedAt'> {
  series?: Maybe<Pick<NonNullable<Post['series']>, 'id' | 'name' | 'slug'>>;
  coverImage?: Maybe<Pick<NonNullable<Post['coverImage']>, 'url' | 'isPortrait'>>;
}

export interface SingleSeries
  extends Pick<Series, 'id' | 'name' | 'coverImage' | 'description' | 'slug' | 'createdAt' | 'posts'> {
  author: SingleMe;
}
