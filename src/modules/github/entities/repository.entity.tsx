import path from 'path';
import type {
  BranchProtectionRuleConnection,
  CodeOfConduct,
  CommitCommentConnection,
  ContributingGuidelines,
  DependencyGraphManifestConnection,
  DeployKeyConnection,
  DeploymentConnection,
  Discussion,
  DiscussionCategory,
  DiscussionCategoryConnection,
  DiscussionConnection,
  Environment,
  EnvironmentConnection,
  FundingLink,
  GitObject,
  Issue,
  IssueConnection,
  IssueOrPullRequest,
  IssueTemplate,
  Label,
  LabelConnection,
  Language,
  LanguageConnection,
  License,
  Maybe,
  MergeCommitMessage,
  MergeCommitTitle,
  MergeQueue,
  Milestone,
  MilestoneConnection,
  PackageConnection,
  PinnedDiscussionConnection,
  PinnedEnvironmentConnection,
  PinnedIssueConnection,
  Project,
  ProjectConnection,
  ProjectV2,
  ProjectV2Connection,
  PullRequest,
  PullRequestConnection,
  PullRequestMergeMethod,
  PullRequestTemplate,
  Ref,
  RefConnection,
  Release,
  ReleaseConnection,
  Repository,
  RepositoryCodeowners,
  RepositoryCollaboratorConnection,
  RepositoryConnection,
  RepositoryContactLink,
  RepositoryInteractionAbility,
  RepositoryLockReason,
  RepositoryOwner,
  RepositoryPermission,
  RepositoryPlanFeatures,
  RepositoryRuleset,
  RepositoryRulesetConnection,
  RepositoryTopicConnection,
  RepositoryVisibility,
  RepositoryVulnerabilityAlert,
  RepositoryVulnerabilityAlertConnection,
  SquashMergeCommitMessage,
  SquashMergeCommitTitle,
  StargazerConnection,
  SubmoduleConnection,
  SubscriptionState,
  UserConnection,
} from 'types/github';

export class RepositoryEntity implements Repository {
  id!: string;
  packages!: PackageConnection;
  project?: Maybe<Project> | undefined;
  projects!: ProjectConnection;
  projectsResourcePath: any;
  projectsUrl: any;
  viewerCanCreateProjects!: boolean;
  recentProjects!: ProjectV2Connection;
  archivedAt?: any;
  createdAt: any;
  description?: Maybe<string> | undefined;
  descriptionHTML: any;
  forkCount!: number;
  hasDiscussionsEnabled!: boolean;
  hasIssuesEnabled!: boolean;
  hasProjectsEnabled!: boolean;
  hasSponsorshipsEnabled!: boolean;
  hasWikiEnabled!: boolean;
  homepageUrl?: any;
  isArchived!: boolean;
  isFork!: boolean;
  isInOrganization!: boolean;
  isLocked!: boolean;
  isMirror!: boolean;
  isPrivate!: boolean;
  isTemplate!: boolean;
  licenseInfo?: Maybe<License> | undefined;
  lockReason?: Maybe<RepositoryLockReason> | undefined;
  mirrorUrl?: any;
  name!: string;
  nameWithOwner!: string;
  openGraphImageUrl: any;
  owner!: RepositoryOwner;
  pushedAt?: any;
  resourcePath: any;
  shortDescriptionHTML: any;
  updatedAt: any;
  url: any;
  usesCustomOpenGraphImage!: boolean;
  visibility!: RepositoryVisibility;
  stargazerCount!: number;
  stargazers!: StargazerConnection;
  viewerHasStarred!: boolean;
  viewerCanSubscribe!: boolean;
  viewerSubscription?: Maybe<SubscriptionState> | undefined;
  __typename?: 'Repository' | undefined;
  allowUpdateBranch!: boolean;
  assignableUsers!: UserConnection;
  autoMergeAllowed!: boolean;
  branchProtectionRules!: BranchProtectionRuleConnection;
  codeOfConduct?: Maybe<CodeOfConduct> | undefined;
  codeowners?: Maybe<RepositoryCodeowners> | undefined;
  collaborators?: Maybe<RepositoryCollaboratorConnection> | undefined;
  commitComments!: CommitCommentConnection;
  contactLinks?: Maybe<RepositoryContactLink[]> | undefined;
  contributingGuidelines?: Maybe<ContributingGuidelines> | undefined;
  databaseId?: Maybe<number> | undefined;
  defaultBranchRef?: Maybe<Ref> | undefined;
  deleteBranchOnMerge!: boolean;
  dependencyGraphManifests?: Maybe<DependencyGraphManifestConnection> | undefined;
  deployKeys!: DeployKeyConnection;
  deployments!: DeploymentConnection;
  discussion?: Maybe<Discussion> | undefined;
  discussionCategories!: DiscussionCategoryConnection;
  discussionCategory?: Maybe<DiscussionCategory> | undefined;
  discussions!: DiscussionConnection;
  diskUsage?: Maybe<number> | undefined;
  environment?: Maybe<Environment> | undefined;
  environments!: EnvironmentConnection;
  forkingAllowed!: boolean;
  forks!: RepositoryConnection;
  fundingLinks!: FundingLink[];
  hasVulnerabilityAlertsEnabled!: boolean;
  interactionAbility?: Maybe<RepositoryInteractionAbility> | undefined;
  isBlankIssuesEnabled!: boolean;
  isDisabled!: boolean;
  isEmpty!: boolean;
  isSecurityPolicyEnabled?: Maybe<boolean> | undefined;
  isUserConfigurationRepository!: boolean;
  issue?: Maybe<Issue> | undefined;
  issueOrPullRequest?: Maybe<IssueOrPullRequest> | undefined;
  issueTemplates?: Maybe<IssueTemplate[]> | undefined;
  issues!: IssueConnection;
  label?: Maybe<Label> | undefined;
  labels?: Maybe<LabelConnection> | undefined;
  languages?: Maybe<LanguageConnection> | undefined;
  latestRelease?: Maybe<Release> | undefined;
  mentionableUsers!: UserConnection;
  mergeCommitAllowed!: boolean;
  mergeCommitMessage!: MergeCommitMessage;
  mergeCommitTitle!: MergeCommitTitle;
  mergeQueue?: Maybe<MergeQueue> | undefined;
  milestone?: Maybe<Milestone> | undefined;
  milestones?: Maybe<MilestoneConnection> | undefined;
  object?: Maybe<GitObject> | undefined;
  parent?: Maybe<Repository> | undefined;
  pinnedDiscussions!: PinnedDiscussionConnection;
  pinnedEnvironments?: Maybe<PinnedEnvironmentConnection> | undefined;
  pinnedIssues?: Maybe<PinnedIssueConnection> | undefined;
  planFeatures!: RepositoryPlanFeatures;
  primaryLanguage?: Maybe<Language> | undefined;
  projectV2?: Maybe<ProjectV2> | undefined;
  projectsV2!: ProjectV2Connection;
  pullRequest?: Maybe<PullRequest> | undefined;
  pullRequestTemplates?: Maybe<PullRequestTemplate[]> | undefined;
  pullRequests!: PullRequestConnection;
  rebaseMergeAllowed!: boolean;
  ref?: Maybe<Ref> | undefined;
  refs?: Maybe<RefConnection> | undefined;
  release?: Maybe<Release> | undefined;
  releases!: ReleaseConnection;
  repositoryTopics!: RepositoryTopicConnection;
  ruleset?: Maybe<RepositoryRuleset> | undefined;
  rulesets?: Maybe<RepositoryRulesetConnection> | undefined;
  securityPolicyUrl?: any;
  squashMergeAllowed!: boolean;
  squashMergeCommitMessage!: SquashMergeCommitMessage;
  squashMergeCommitTitle!: SquashMergeCommitTitle;
  squashPrTitleUsedAsDefault!: boolean;
  sshUrl: any;
  submodules!: SubmoduleConnection;
  tempCloneToken?: Maybe<string> | undefined;
  templateRepository?: Maybe<Repository> | undefined;
  viewerCanAdminister!: boolean;
  viewerCanUpdateTopics!: boolean;
  viewerDefaultCommitEmail?: Maybe<string> | undefined;
  viewerDefaultMergeMethod!: PullRequestMergeMethod;
  viewerPermission?: Maybe<RepositoryPermission> | undefined;
  viewerPossibleCommitEmails?: Maybe<string[]> | undefined;
  vulnerabilityAlert?: Maybe<RepositoryVulnerabilityAlert> | undefined;
  vulnerabilityAlerts?: Maybe<RepositoryVulnerabilityAlertConnection> | undefined;
  watchers!: UserConnection;
  webCommitSignoffRequired!: boolean;

  constructor(values: Partial<Repository>) {
    Object.assign(this, values);
  }
}

class RepositoryMethods extends RepositoryEntity {
  constructor(values: Partial<Repository>) {
    super(values);
  }

  getName() {
    return this.name.replace(/-/g, ' ').trim();
  }

  getImageFromPublic(filename: string = 'cover.png') {
    if (this.defaultBranchRef && typeof this.url === 'string') {
      const basePath = this.url;
      const branch = this.defaultBranchRef.name;
      return path.join(basePath, 'raw', branch, 'public', filename);
    }
    return '';
  }
}

const repository = (values: Partial<Repository>) => new RepositoryMethods(values);
export default repository;
