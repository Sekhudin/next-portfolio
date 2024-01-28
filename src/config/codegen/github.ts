import { CodegenConfig } from '@graphql-codegen/cli';
import { onError } from './utils';

const config: CodegenConfig = {
  schema: {
    'https://api.github.com/graphql': {
      headers: {
        Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
        'User-Agent': `${process.env.NEXT_PUBLIC_GITHUB_APP_NAME}`,
      },
    },
  },
  generates: {
    'src/types/graphql/github.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  hooks: { onError },
  ignoreNoDocuments: true,
};

export default config;
