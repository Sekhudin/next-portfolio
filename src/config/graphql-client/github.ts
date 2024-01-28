import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_GITHUB_EP}`,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
  },
});

const createGithubClient = () => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([httpLink]),
  });
  return client;
};

const githubClient = createGithubClient();
export default githubClient;
