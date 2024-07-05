import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import Debugger from 'packages/utils/debugger';
import { HASHNODE_CLIENT, GQL_Client, GQL_Credential, MODE } from 'configs/env.config';

Debugger.apolloError();
const httpLink = new HttpLink({
  uri: HASHNODE_CLIENT.EP,
  credentials: GQL_Credential.INCLUDE,
  headers: {
    Authorization: HASHNODE_CLIENT.ACCESS_TOKEN,
  },
});

const inMemoryCache = new InMemoryCache();
const client = new ApolloClient({
  name: GQL_Client.NAME,
  version: GQL_Client.VERSION,
  cache: inMemoryCache,
  link: from([httpLink]),
  connectToDevTools: MODE.isDevelopment,
});

export default client;
