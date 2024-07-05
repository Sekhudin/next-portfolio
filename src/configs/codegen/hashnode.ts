import { CodegenConfig } from '@graphql-codegen/cli';
import { HASHNODE_CLIENT } from '../env.config';
import Debugger from '../../packages/utils/debugger';

const config: CodegenConfig = {
  schema: `${HASHNODE_CLIENT.EP}`,
  generates: {
    'src/types/hashnode.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
  },
  hooks: { onError: Debugger.showError },
  ignoreNoDocuments: true,
};

export default config;
