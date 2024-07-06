import path from 'path';
import Str from 'packages/utils/string';
import type {
  AudioUrls,
  Content,
  Maybe,
  OpenGraphMetaData,
  Post,
  PostCommentConnection,
  PostCommenterConnection,
  PostCoverImage,
  PostFeatures,
  PostLikerConnection,
  PostPreferences,
  Publication,
  Seo,
  Series,
  Tag,
  User,
} from 'types/hashnode';

export class PostEntity implements Post {
  id!: string;
  __typename?: 'Post' | undefined;
  audioUrls?: Maybe<AudioUrls> | undefined;
  author!: User;
  bookmarked!: boolean;
  brief!: string;
  canonicalUrl?: Maybe<string> | undefined;
  coAuthors?: Maybe<User[]> | undefined;
  commenters!: PostCommenterConnection;
  comments!: PostCommentConnection;
  content!: Content;
  contributors!: User[];
  coverImage?: Maybe<PostCoverImage> | undefined;
  cuid?: Maybe<string> | undefined;
  featured!: boolean;
  featuredAt?: any;
  features!: PostFeatures;
  hasLatexInPost!: boolean;
  isAutoPublishedFromRSS!: boolean;
  isFollowed?: Maybe<boolean> | undefined;
  likedBy!: PostLikerConnection;
  ogMetaData?: Maybe<OpenGraphMetaData> | undefined;
  preferences!: PostPreferences;
  previousSlugs!: string[];
  publication?: Maybe<Publication> | undefined;
  publishedAt: any;
  reactionCount!: number;
  readTimeInMinutes!: number;
  replyCount!: number;
  responseCount!: number;
  seo?: Maybe<Seo> | undefined;
  series?: Maybe<Series> | undefined;
  slug!: string;
  sourcedFromGithub!: boolean;
  subtitle?: Maybe<string> | undefined;
  tags?: Maybe<Tag[]> | undefined;
  title!: string;
  updatedAt?: any;
  url!: string;
  views!: number;

  constructor(values: Partial<Post>) {
    Object.assign(this, values);
  }
}

class PostMethods extends PostEntity {
  constructor(values: Partial<Post>) {
    super(values);
  }

  getTitle() {
    if (this.series?.name) {
      return this.series.name.concat(' ', this.title);
    }
    return this.title;
  }

  getSeriesUrl() {
    const slug = this.series?.slug || '';
    return path.join('/blog/series', slug);
  }

  getFormattedPublishedAt() {
    return Str(this.publishedAt).parseCustomDate('M D, Y');
  }
}

const post = (values: Partial<Post>) => new PostMethods(values);
export default post;
