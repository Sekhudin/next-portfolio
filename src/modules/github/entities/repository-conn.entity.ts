import Arr from 'packages/utils/array';
import Common from 'packages/utils/common';
import { MapCallbackfn } from 'types/common';
import type {
  Maybe,
  PageInfo,
  Repository,
  RepositoryConnection,
  RepositoryEdge,
} from 'types/github';

export class RepositoryConnectionEntity implements RepositoryConnection {
  __typename?: 'RepositoryConnection' | undefined;
  edges?: Maybe<Maybe<RepositoryEdge>[]> | undefined;
  nodes?: Repository[] | null | undefined;
  pageInfo!: PageInfo;
  totalCount!: number;
  totalDiskUsage!: number;

  constructor(values: Partial<RepositoryConnection>) {
    Object.assign(this, values);
  }
}

class RepositoryConnectionMethods extends RepositoryConnectionEntity {
  constructor(values: Partial<RepositoryConnection>) {
    super(values);
  }

  getPageLabel(page: number, pageSize: number) {
    const paginate = Common.paginate(this.totalCount, page, pageSize);
    return paginate.status;
  }

  mapRepos(cb: MapCallbackfn<Repository>) {
    return Arr(this.nodes).map(cb);
  }
}

const repositoryConnection = (values: Partial<RepositoryConnection>) =>
  new RepositoryConnectionMethods(values);
export default repositoryConnection;
