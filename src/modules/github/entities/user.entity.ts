import type {
  CommitCommentConnection,
  ContributionsCollection,
  CopilotEndpoints,
  DiscussionCommentConnection,
  DiscussionConnection,
  EnterpriseConnection,
  FollowerConnection,
  FollowingConnection,
  Gist,
  GistCommentConnection,
  GistConnection,
  Hovercard,
  IssueCommentConnection,
  IssueConnection,
  Maybe,
  Organization,
  OrganizationConnection,
  PackageConnection,
  PinnableItemConnection,
  ProfileItemShowcase,
  Project,
  ProjectConnection,
  ProjectV2,
  ProjectV2Connection,
  PublicKeyConnection,
  PullRequestConnection,
  Repository,
  RepositoryConnection,
  RepositoryInteractionAbility,
  SavedReplyConnection,
  SocialAccountConnection,
  SponsorAndLifetimeValueConnection,
  SponsorConnection,
  SponsorsActivityConnection,
  Sponsorship,
  SponsorshipConnection,
  SponsorshipNewsletterConnection,
  SponsorsListing,
  StarredRepositoryConnection,
  User,
  UserListConnection,
  UserListSuggestion,
  UserStatus,
} from 'types/github';

class UserEntity implements User {
  constructor(values: Partial<User>) {
    Object.assign(this, values);
  }
  avatarUrl: any;
  login!: string;
  resourcePath: any;
  url: any;
  id!: string;
  packages!: PackageConnection;
  anyPinnableItems!: boolean;
  email!: string;
  itemShowcase!: ProfileItemShowcase;
  location?: Maybe<string> | undefined;
  name?: Maybe<string> | undefined;
  pinnableItems!: PinnableItemConnection;
  pinnedItems!: PinnableItemConnection;
  pinnedItemsRemaining!: number;
  viewerCanChangePinnedItems!: boolean;
  websiteUrl?: any;
  project?: Maybe<Project> | undefined;
  projects!: ProjectConnection;
  projectsResourcePath: any;
  projectsUrl: any;
  viewerCanCreateProjects!: boolean;
  projectV2?: Maybe<ProjectV2> | undefined;
  projectsV2!: ProjectV2Connection;
  recentProjects!: ProjectV2Connection;
  repositoryDiscussions!: DiscussionConnection;
  repositoryDiscussionComments!: DiscussionCommentConnection;
  repositories!: RepositoryConnection;
  repository?: Maybe<Repository> | undefined;
  estimatedNextSponsorsPayoutInCents!: number;
  hasSponsorsListing!: boolean;
  isSponsoredBy!: boolean;
  isSponsoringViewer!: boolean;
  lifetimeReceivedSponsorshipValues!: SponsorAndLifetimeValueConnection;
  monthlyEstimatedSponsorsIncomeInCents!: number;
  sponsoring!: SponsorConnection;
  sponsors!: SponsorConnection;
  sponsorsActivities!: SponsorsActivityConnection;
  sponsorsListing?: Maybe<SponsorsListing> | undefined;
  sponsorshipForViewerAsSponsor?: Maybe<Sponsorship> | undefined;
  sponsorshipForViewerAsSponsorable?: Maybe<Sponsorship> | undefined;
  sponsorshipNewsletters!: SponsorshipNewsletterConnection;
  sponsorshipsAsMaintainer!: SponsorshipConnection;
  sponsorshipsAsSponsor!: SponsorshipConnection;
  totalSponsorshipAmountAsSponsorInCents?: Maybe<number> | undefined;
  viewerCanSponsor!: boolean;
  viewerIsSponsoring!: boolean;
  __typename?: 'User' | undefined;
  bio?: Maybe<string> | undefined;
  bioHTML: any;
  canReceiveOrganizationEmailsWhenNotificationsRestricted!: boolean;
  commitComments!: CommitCommentConnection;
  company?: Maybe<string> | undefined;
  companyHTML: any;
  contributionsCollection!: ContributionsCollection;
  copilotEndpoints?: Maybe<CopilotEndpoints> | undefined;
  createdAt: any;
  databaseId?: Maybe<number> | undefined;
  enterprises?: Maybe<EnterpriseConnection> | undefined;
  followers!: FollowerConnection;
  following!: FollowingConnection;
  gist?: Maybe<Gist> | undefined;
  gistComments!: GistCommentConnection;
  gists!: GistConnection;
  hovercard!: Hovercard;
  interactionAbility?: Maybe<RepositoryInteractionAbility> | undefined;
  isBountyHunter!: boolean;
  isCampusExpert!: boolean;
  isDeveloperProgramMember!: boolean;
  isEmployee!: boolean;
  isFollowingViewer!: boolean;
  isGitHubStar!: boolean;
  isHireable!: boolean;
  isSiteAdmin!: boolean;
  isViewer!: boolean;
  issueComments!: IssueCommentConnection;
  issues!: IssueConnection;
  lists!: UserListConnection;
  organization?: Maybe<Organization> | undefined;
  organizationVerifiedDomainEmails!: string[];
  organizations!: OrganizationConnection;
  pronouns?: Maybe<string> | undefined;
  publicKeys!: PublicKeyConnection;
  pullRequests!: PullRequestConnection;
  repositoriesContributedTo!: RepositoryConnection;
  savedReplies?: Maybe<SavedReplyConnection> | undefined;
  socialAccounts!: SocialAccountConnection;
  starredRepositories!: StarredRepositoryConnection;
  status?: Maybe<UserStatus> | undefined;
  suggestedListNames!: UserListSuggestion[];
  topRepositories!: RepositoryConnection;
  twitterUsername?: Maybe<string> | undefined;
  updatedAt: any;
  verifiedDomainsList!: string[];
  viewerCanFollow!: boolean;
  viewerIsFollowing!: boolean;
  watching!: RepositoryConnection;
}

class UserMethods extends UserEntity {
  constructor(values: Partial<User>) {
    super(values);
  }

  getTotalFollowers() {
    return this.followers.totalCount.toString().concat(' Followers');
  }

  getTotalFollowing() {
    return this.following.totalCount.toString().concat(' Following');
  }
}

const user = (values: Partial<User>) => new UserMethods(values);
export default user;
