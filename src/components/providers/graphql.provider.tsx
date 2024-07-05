'use client';
import { ApolloProvider } from '@apollo/client';
import client from 'src/packages/graphql/client';

export const GithubProvider = ({ children }: React.PropsWithChildren) => (
  <ApolloProvider client={client.github}>{children}</ApolloProvider>
);

export const HashnodeProvider = ({ children }: React.PropsWithChildren) => (
  <ApolloProvider client={client.hashnode}>{children}</ApolloProvider>
);
