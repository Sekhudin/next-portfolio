import type { Tag as HashnodeTag, Post as HashnodePost } from 'src/types/graphql/hashnode';
import {
  TECHSTACK_REGEXP,
  INTEGRATION_REGEXP,
  API_DOCS_REGEXP,
  HIDDEN_REPO_REGEXP,
} from 'src/config/regexp';

type HttpUrlType = 'hashnode-profile';
export type ReturnSplitDescription = {
  plain: string;
  techstack?: string;
  integration?: string;
  apiDocs?: string;
};

namespace Util {
  export function page(current: number, pageSize: number, totalData: number) {
    const total: number = Math.ceil(totalData / pageSize);
    const status: string = `${current} of ${total}`;
    return { current, total, status };
  }

  export function httpUrl(type: HttpUrlType, extra: string): string {
    if (type === 'hashnode-profile') return `https://hashnode.com/@${extra}`;
    return '/';
  }

  export function hasnodeUniqueTags(posts: Array<Pick<HashnodePost, 'tags'>>): Array<HashnodeTag> {
    const uniqueSet = new Set<HashnodeTag>();
    for (const post of posts) {
      if (post.tags) {
        post.tags.forEach((tag) => {
          if (tag.id) {
            uniqueSet.add(tag);
          }
        });
      }
    }
    return Array.from(uniqueSet);
  }

  export function splitDescription(text?: string | null): ReturnSplitDescription {
    let description: string = text || '';
    let techstack: string = '';
    let integration: string = '';
    let apiDocs: string = '';

    const matchTechStack: string[] | null = description.match(TECHSTACK_REGEXP);
    const matchIntegration: string[] | null = description.match(INTEGRATION_REGEXP);
    const matchApi: string[] | null = description.match(API_DOCS_REGEXP);
    if (matchTechStack) {
      techstack = matchTechStack[1].trim();
      description = description.replace(TECHSTACK_REGEXP, '');
    }

    if (matchIntegration) {
      integration = matchIntegration[1].trim();
      description = description.replace(INTEGRATION_REGEXP, '');
    }

    if (matchApi) {
      apiDocs = matchApi[1].trim();
      description = description.replace(API_DOCS_REGEXP, '');
    }

    return { techstack, integration, apiDocs, plain: description };
  }

  export function isRepoToHide(repoName?: string): boolean {
    if (repoName) return HIDDEN_REPO_REGEXP.test(repoName);
    return false;
  }
}

export default Util;
