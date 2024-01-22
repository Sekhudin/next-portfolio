import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { GQLClient, Credential } from 'src/types/graphql';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_HASHNODE_EP}`,
  credentials: Credential.INCLUDE,
  headers: {
    Authorization: `${process.env.NEXT_PUBLIC_HASHNODE_ACCESS_TOKEN}`,
    'Access-Control-Allow-Origin': '*',
  },
});

const hashnodeCliet = () => {
  const client = new ApolloClient({
    name: GQLClient.NAME,
    version: GQLClient.VERSION,
    cache: new InMemoryCache(),
    link: from([httpLink]),
  });
  return client;
};

const hashnodeClient = hashnodeCliet();
export default hashnodeClient;
