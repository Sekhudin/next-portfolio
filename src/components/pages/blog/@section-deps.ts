'use client';
import useApollosSuspenseQuery from 'src/hooks/use-suspense-query';
import HashnodeMeProfile from 'src/components/shared/hashnode/me';
import HashnodePostList from 'src/components/shared/hashnode/post-list';

import HashnodeQueryMe from 'src/service/hashnode/queries/me';
import HashnodeQueryPosts from 'src/service/hashnode/queries/posts';
import { hrefTo } from 'src/utils/component';
import type { Deps } from 'src/utils';

export const { hashnodeQueryMeDeps }: Deps<'hashnodeQueryMeDeps', typeof HashnodeMeProfile> = {
  hashnodeQueryMeDeps: {
    _useQuery: useApollosSuspenseQuery,
    _service: HashnodeQueryMe,
  },
};

export const { hashnodeQueryPostsDeps }: Deps<'hashnodeQueryPostsDeps', typeof HashnodePostList> = {
  hashnodeQueryPostsDeps: {
    _useQuery: useApollosSuspenseQuery,
    _service: HashnodeQueryPosts,
    _hrefTo: hrefTo,
  },
};
