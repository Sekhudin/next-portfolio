import type { PageInfo, PostEdge, SeriesPostConnection } from 'types/hashnode';

class SeriesPostConnectionEntity implements SeriesPostConnection {
  edges!: PostEdge[];
  pageInfo!: PageInfo;
  __typename?: 'SeriesPostConnection' | undefined;
  totalDocuments!: number;

  constructor(values: Partial<SeriesPostConnection>) {
    Object.assign(this, values);
  }
}

class SeriesPostConnectionMethods extends SeriesPostConnectionEntity {
  constructor(values: Partial<SeriesPostConnection>) {
    super(values);
  }

  getTotalArticles() {
    return this.totalDocuments.toString().concat(' Articles');
  }
}

const seriesPostConnection = (values: Partial<SeriesPostConnection>) => {
  return new SeriesPostConnectionMethods(values);
};

export default seriesPostConnection;
