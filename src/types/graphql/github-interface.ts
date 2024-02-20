import type { Repository as RepositoryBase } from './github';

export interface Repository
  extends Pick<
    RepositoryBase,
    'id' | 'name' | 'description' | 'url' | 'homepageUrl' | 'primaryLanguage' | 'createdAt'
  > {}
