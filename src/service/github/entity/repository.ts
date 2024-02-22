import type { Repository } from 'src/types/graphql/github-interface';
import Github, { type ReturnSplitDescription } from 'src/service/helper/github';

export type { Repository };
export default class RepositoryEntity
  implements Omit<Repository, 'description' | 'url' | 'createdAt'>
{
  id!: string;
  name!: string;
  isHidden!: boolean;
  description!: Omit<ReturnSplitDescription, 'appIcon'>;
  iconApp?: ReturnType<(typeof Github)['analyzeDescription']>['appIcon'];
  url?: string;
  homepageUrl?: string;
  primaryLanguage?: Repository['primaryLanguage'];
  createdAt?: string;

  constructor({ description, ...v }: Repository) {
    Object.assign(this, v);
    const { appIcon, ...newDescription } = Github.analyzeDescription(description);
    this.description = newDescription;
    this.isHidden = Github.isRepoToHide(v.name);
    this.iconApp = appIcon;
  }
}