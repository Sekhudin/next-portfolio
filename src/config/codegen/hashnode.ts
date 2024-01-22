import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `${process.env.NEXT_PUBLIC_HASHNODE_EP}`,
  documents: ['../../service/hashnode/queries/me.graphql'],
  generates: {
    'src/types/graphql/hashnode.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
