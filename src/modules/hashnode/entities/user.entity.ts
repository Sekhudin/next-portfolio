import path from 'path';
import { HASHNODE_CLIENT } from 'configs/env.config';
import type {
  Badge,
  Connection,
  Content,
  Maybe,
  OffsetPageInfo,
  PageConnection,
  PageInfo,
  Post,
  Scalars,
  SocialMediaLinks,
  Tag,
  User,
  UserPostEdge,
  UserPublicationsEdge,
} from 'types/hashnode';

class UserEntity implements User {
  ambassador!: boolean;
  availableFor?: Maybe<string> | undefined;
  badges!: Badge[];
  bio?: Maybe<Content> | undefined;
  dateJoined?: any;
  deactivated!: boolean;
  followers!: PageConnection & {
    __typename?: 'UserConnection';
    nodes: Array<User>;
    pageInfo: OffsetPageInfo;
    totalDocuments: Scalars['Int']['output'];
  };
  followersCount!: number;
  followingsCount!: number;
  follows!: PageConnection & {
    __typename?: 'UserConnection';
    nodes: Array<User>;
    pageInfo: OffsetPageInfo;
    totalDocuments: Scalars['Int']['output'];
  };
  id!: string;
  location?: Maybe<string> | undefined;
  name!: string;
  posts!: PageConnection & {
    __typename?: 'UserPostConnection';
    edges: Array<UserPostEdge>;
    nodes: Array<Post>;
    pageInfo: OffsetPageInfo;
    totalDocuments: Scalars['Int']['output'];
  };
  profilePicture?: Maybe<string> | undefined;
  publications!: Connection & {
    __typename?: 'UserPublicationsConnection';
    edges: Array<UserPublicationsEdge>;
    pageInfo: PageInfo;
    totalDocuments: Scalars['Int']['output'];
  };
  socialMediaLinks?: Maybe<SocialMediaLinks> | undefined;
  tagline?: Maybe<string> | undefined;
  tagsFollowing!: Tag[];
  username!: string;
  __typename?: 'User' | undefined;
  bioV2?: Maybe<Content> | undefined;
  following!: boolean;
  followsBack!: boolean;
  isPro!: boolean;

  constructor(values: Partial<User>) {
    Object.assign(this, values);
  }
}

class UserMethods extends UserEntity {
  constructor(values: Partial<User>) {
    super(values);
  }

  getProfileUrl() {
    return path.join(HASHNODE_CLIENT.HOMEPAGE, `@`.concat(this.username));
  }
}

const user = (values: Partial<User>) => new UserMethods(values);
export default user;
