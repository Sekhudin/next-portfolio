import Arr from 'packages/utils/array';
import { MapCallbackfn } from 'types/common';
import type {
  Content,
  DomainInfo,
  DraftConnection,
  EmailImport,
  Maybe,
  OpenGraphMetaData,
  Post,
  Preferences,
  Publication,
  PublicationFeatures,
  PublicationIntegrations,
  PublicationInvite,
  PublicationLinks,
  PublicationPostPageConnection,
  PublicationSponsorship,
  PublicationPostConnection,
  PublicationUserRecommendingPublicationConnection,
  PostEdge,
  RedirectionRule,
  Series,
  SeriesConnection,
  SeriesEdge,
  StaticPage,
  StaticPageConnection,
  Tag,
  UrlPattern,
  User,
  UserRecommendedPublicationEdge,
} from 'types/hashnode';

class PublicationEntity implements Publication {
  id!: string;
  __typename?: 'Publication' | undefined;
  about?: Maybe<Content> | undefined;
  allDrafts!: DraftConnection;
  allowContributorEdits!: boolean;
  author!: User;
  canonicalURL!: string;
  descriptionSEO?: Maybe<string> | undefined;
  displayTitle?: Maybe<string> | undefined;
  domainInfo!: DomainInfo;
  drafts!: DraftConnection;
  emailImport?: Maybe<EmailImport> | undefined;
  favicon?: Maybe<string> | undefined;
  features!: PublicationFeatures;
  followersCount?: Maybe<number> | undefined;
  hasBadges!: boolean;
  headerColor?: Maybe<string> | undefined;
  imprint?: Maybe<string> | undefined;
  imprintV2?: Maybe<Content> | undefined;
  integrations?: Maybe<PublicationIntegrations> | undefined;
  invites?: Maybe<PublicationInvite> | undefined;
  isGitHubBackupEnabled!: boolean;
  isHeadless!: boolean;
  isTeam!: boolean;
  links?: Maybe<PublicationLinks> | undefined;
  metaTags?: Maybe<string> | undefined;
  ogMetaData!: OpenGraphMetaData;
  pinnedPost?: Maybe<Post> | undefined;
  post?: Maybe<Post> | undefined;
  posts!: PublicationPostConnection;
  postsViaPage!: PublicationPostPageConnection;
  preferences!: Preferences;
  recommendedPublications!: UserRecommendedPublicationEdge[];
  recommendingPublications!: PublicationUserRecommendingPublicationConnection;
  redirectionRules!: RedirectionRule[];
  scheduledDrafts!: DraftConnection;
  series?: Maybe<Series>;
  seriesList!: SeriesConnection;
  sponsorship?: Maybe<PublicationSponsorship> | undefined;
  staticPage?: Maybe<StaticPage> | undefined;
  staticPages!: StaticPageConnection;
  submittedDrafts!: DraftConnection;
  title!: string;
  totalRecommendedPublications!: number;
  url!: string;
  urlPattern!: UrlPattern;

  constructor(values: Partial<Publication>) {
    Object.assign(this, values);
  }
}

class PublicationMethods extends PublicationEntity {
  constructor(values: Partial<Publication>) {
    super(values);
  }

  hasSeriesPosts() {
    if (!this.series?.posts.totalDocuments) {
      return false;
    }
    return true;
  }

  mapSeriesList(cb: MapCallbackfn<SeriesEdge>) {
    return Arr(this.seriesList.edges).map(cb);
  }

  mapSeriesPosts(cb: MapCallbackfn<PostEdge>) {
    return Arr(this.series?.posts.edges).map(cb);
  }

  getSeriesPosts() {
    return Arr(this.series?.posts.edges).valueOrNull();
  }

  getUniqueTags(limit: number = 10) {
    const tags = new Set<Tag>();
    for (let i = 0; i < this.seriesList.edges.length; i++) {
      const series = this.seriesList.edges[i];
      const postInSeries = series.node.posts.edges;
      for (let j = 0; j < postInSeries.length; j++) {
        const postTags = postInSeries[j].node.tags;
        if (postTags) {
          for (let i = 0; i < postTags.length; i++) {
            if (postTags[i]) {
              tags.add(postTags[i]);
            }
          }
        }
      }
    }
    return Array.from(tags).slice(0, limit);
  }
}

const publication = (values: Partial<Publication>) => new PublicationMethods(values);
export default publication;
