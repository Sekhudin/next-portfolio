import type {
  Content,
  Maybe,
  Node,
  Scalars,
  SeriesPostConnection,
  SeriesEdge,
  SortOrder,
  User,
} from 'types/hashnode';

class SeriesEdgeEntity implements SeriesEdge {
  cursor!: string;
  node!: Node & {
    __typename?: 'Series';
    author: User;
    coverImage?: Maybe<Scalars['String']['output']>;
    createdAt: Scalars['DateTime']['output'];
    cuid?: Maybe<Scalars['ID']['output']>;
    description?: Maybe<Content>;
    id: Scalars['ID']['output'];
    name: Scalars['String']['output'];
    posts: SeriesPostConnection;
    slug: Scalars['String']['output'];
    sortOrder: SortOrder;
  };
  __typename?: 'SeriesEdge' | undefined;

  constructor(values: Partial<SeriesEdge>) {
    Object.assign(this, values);
  }
}

class SeriesEdgeMethods extends SeriesEdgeEntity {
  constructor(values: Partial<SeriesEdge>) {
    super(values);
  }
}

const seriesEdge = (values: Partial<SeriesEdge>) => new SeriesEdgeMethods(values);
export default seriesEdge;
