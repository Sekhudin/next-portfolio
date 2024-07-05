import type {
  PostEdge,
  AudioUrls,
  Content,
  Maybe,
  Node,
  OpenGraphMetaData,
  PostCommentConnection,
  PostCommenterConnection,
  PostCoverImage,
  PostFeatures,
  PostLikerConnection,
  PostPreferences,
  Publication,
  Scalars,
  Seo,
  Series,
  Tag,
  User,
} from 'types/hashnode';

class PostEdgeEntity implements PostEdge {
  cursor!: string;
  node!: Node & {
    __typename?: 'Post';
    audioUrls?: Maybe<AudioUrls>;
    author: User;
    bookmarked: Scalars['Boolean']['output'];
    brief: Scalars['String']['output'];
    canonicalUrl?: Maybe<Scalars['String']['output']>;
    coAuthors?: Maybe<Array<User>>;
    commenters: PostCommenterConnection;
    comments: PostCommentConnection;
    content: Content;
    contributors: Array<User>;
    coverImage?: Maybe<PostCoverImage>;
    cuid?: Maybe<Scalars['String']['output']>;
    featured: Scalars['Boolean']['output'];
    featuredAt?: Maybe<Scalars['DateTime']['output']>;
    features: PostFeatures;
    hasLatexInPost: Scalars['Boolean']['output'];
    id: Scalars['ID']['output'];
    isAutoPublishedFromRSS: Scalars['Boolean']['output'];
    isFollowed?: Maybe<Scalars['Boolean']['output']>;
    likedBy: PostLikerConnection;
    ogMetaData?: Maybe<OpenGraphMetaData>;
    preferences: PostPreferences;
    publication?: Maybe<Publication>;
    publishedAt: Scalars['DateTime']['output'];
    reactionCount: Scalars['Int']['output'];
    readTimeInMinutes: Scalars['Int']['output'];
    replyCount: Scalars['Int']['output'];
    responseCount: Scalars['Int']['output'];
    seo?: Maybe<Seo>;
    series?: Maybe<Series>;
    slug: Scalars['String']['output'];
    sourcedFromGithub: Scalars['Boolean']['output'];
    subtitle?: Maybe<Scalars['String']['output']>;
    tags?: Maybe<Array<Tag>>;
    title: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url: Scalars['String']['output'];
    views: Scalars['Int']['output'];
  };
  __typename?: 'PostEdge' | undefined;

  constructor(values: Partial<PostEdge>) {
    Object.assign(this, values);
  }
}

class PostEdgeMethods extends PostEdgeEntity {
  constructor(values: Partial<PostEdge>) {
    super(values);
  }
}

const postEdge = (values: Partial<PostEdge>) => new PostEdgeMethods(values);
export default postEdge;
