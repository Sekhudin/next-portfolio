import GithubClient from './github.client';
import HashnodeClient from './hashnode.client';

class GraphqlClient {
  github = GithubClient;
  hashnode = HashnodeClient;
}

const client = new GraphqlClient();
export default client;
