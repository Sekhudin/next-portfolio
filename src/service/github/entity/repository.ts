import type { Repository as RepositoryInterface } from 'src/types/graphql/github-interface';
import Github, { type ReturnDescription } from 'src/service/helper/github';

export type Repository = RepositoryInterface;
export default class RepositoryEntity
  implements Omit<Repository, 'description' | 'url' | 'createdAt'>
{
  id!: string;
  name!: string;
  isHidden!: boolean;
  description!: Omit<ReturnDescription, 'icon'>;
  iconApp?: ReturnType<(typeof Github)['analyzeDescription']>['icon'];
  url?: string;
  homepageUrl?: string;
  primaryLanguage?: Repository['primaryLanguage'];
  createdAt?: string;

  constructor({ description, ...v }: Repository) {
    Object.assign(this, v);
    const { icon, ...newDescription } = Github.analyzeDescription(description);
    this.description = newDescription;
    this.isHidden = Github.isRepoToHide(v.name);
    this.iconApp = icon;
  }
}
