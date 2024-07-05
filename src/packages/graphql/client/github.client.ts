import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import Debugger from 'packages/utils/debugger';
import { GITHUB_CLIENT, MODE } from 'configs/env.config';

Debugger.apolloError();
const httpLink = new HttpLink({
  uri: GITHUB_CLIENT.EP,
  headers: {
    Authorization: GITHUB_CLIENT.BEARER_ACCESS_TOKEN,
  },
});

const inMemoryCache = new InMemoryCache();
const client = new ApolloClient({
  cache: inMemoryCache,
  link: from([httpLink]),
  connectToDevTools: MODE.isDevelopment,
});

export default client;
