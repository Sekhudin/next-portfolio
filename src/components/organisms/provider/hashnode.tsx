'use client';
import { ApolloProvider } from '@apollo/client';
import client from 'src/config/graphql-client/hashnode';

const HashnodeProvider = ({ children }: React.PropsWithChildren) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default HashnodeProvider;
