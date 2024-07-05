import Common from 'packages/utils/common';
import type { OffsetPageInfo, Post, UserPostConnection, UserPostEdge } from 'types/hashnode';

class UserPostConnectionEntity implements UserPostConnection {
  nodes!: Post[];
  pageInfo!: OffsetPageInfo;
  __typename?: 'UserPostConnection' | undefined;
  edges!: UserPostEdge[];
  totalDocuments!: number;

  constructor(values: Partial<UserPostConnection>) {
    Object.assign(this, values);
  }
}

class UserPostConnectionMethods extends UserPostConnectionEntity {
  constructor(values: Partial<UserPostConnection>) {
    super(values);
  }

  mapPosts<T extends unknown>(callbackFunc: (value: Post, index: number, array: Post[]) => T) {
    if (!this.nodes) return null;
    return this.nodes.map(callbackFunc);
  }

  isEmpty() {
    return this.totalDocuments < 1;
  }

  getPage() {
    const page: number = this.pageInfo.previousPage || 0;
    return page + 1;
  }

  getPageLabel(size: number) {
    const paginate = Common.paginate(this.totalDocuments, this.getPage(), size);
    return paginate.status;
  }

  hashPreviousPage() {
    return this.pageInfo.hasPreviousPage;
  }

  hashNextPage() {
    return this.pageInfo.hasNextPage;
  }
}

const userPostConnection = (values: Partial<UserPostConnection>) => {
  return new UserPostConnectionMethods(values);
};

export default userPostConnection;
