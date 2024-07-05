import type { PageInfo, PublicationPostConnection, PostEdge } from 'types/hashnode';

class PublicationPostConnectionEntity implements PublicationPostConnection {
  edges!: PostEdge[];
  pageInfo!: PageInfo;
  __typename?: 'PublicationPostConnection' | undefined;
  totalDocuments!: number;

  constructor(values: Partial<PublicationPostConnection>) {
    Object.assign(this, values);
  }
}

class PublicationPostConnectionMethods extends PublicationPostConnectionEntity {
  constructor(values: Partial<PublicationPostConnection>) {
    super(values);
  }

  isEmpty() {
    return this.totalDocuments < 1;
  }
}

const publicationPostConnection = (values: Partial<PublicationPostConnection>) => {
  return new PublicationPostConnectionMethods(values);
};

export default publicationPostConnection;
