import { CodegenConfig } from '@graphql-codegen/cli';
import { GITHUB_CLIENT } from '../env.config';
import Debugger from '../../packages/utils/debugger';

const config: CodegenConfig = {
  schema: {
    'https://api.github.com/graphql': {
      headers: {
        Authorization: `bearer ${GITHUB_CLIENT.ACCESS_TOKEN}`,
        'User-Agent': `${GITHUB_CLIENT.APP_NAME}`,
      },
    },
  },
  generates: {
    'src/types/github.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  hooks: { onError: Debugger.showError },
  ignoreNoDocuments: true,
};

export default config;
