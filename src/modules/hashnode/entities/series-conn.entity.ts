import Arr from 'packages/utils/array';
import { MapCallbackfn } from 'types/common';
import type { PageInfo, SeriesConnection, SeriesEdge } from 'types/hashnode';

class SeriesConnectionEntity implements SeriesConnection {
  edges!: SeriesEdge[];
  pageInfo!: PageInfo;
  __typename?: 'SeriesConnection' | undefined;
  totalDocuments!: number;

  constructor(values: Partial<SeriesConnection>) {
    Object.assign(this, values);
  }
}

class SeriesConnectionMethods extends SeriesConnectionEntity {
  constructor(values: Partial<SeriesConnection>) {
    super(values);
  }

  map(cb: MapCallbackfn<SeriesEdge>) {
    return Arr(this.edges).map(cb);
  }
}

const seriesConnection = (values: Partial<SeriesConnection>) => new SeriesConnectionMethods(values);
export default seriesConnection;
