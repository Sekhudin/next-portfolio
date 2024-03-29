import { CodegenConfig } from '@graphql-codegen/cli';
import { onError } from './utils';

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_HASHNODE_EP}`,
  generates: {
    'src/types/graphql/hashnode.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  hooks: { onError },
  ignoreNoDocuments: true,
};

export default config;
