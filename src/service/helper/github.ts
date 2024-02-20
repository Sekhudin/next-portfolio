import { LayoutTemplate, TabletSmartphone, Monitor, type LucideIcon } from 'lucide-react';
import {
  TECHSTACK_REGEXP,
  API_DOCS_REGEXP,
  HIDDEN_REPO_REGEXP,
  APP_TYPE_REGEXP,
} from 'src/config/regexp';

export type ReturnSplitDescription = {
  plain: string;
  techstack: string[] | null;
  appIcon: LucideIcon | null;
  apiDocs?: string;
};

namespace UtilGithub {
  export function analyzeDescription(text?: string | null): ReturnSplitDescription {
    const dictIconType: Record<string, LucideIcon> = {
      'web-app': LayoutTemplate,
      'mobile-app': TabletSmartphone,
      'desktop-app': Monitor,
    };

    let description: string = text || '';
    let techstack: string[] | null = null;
    let apiDocs: string = '';
    let appIcon: LucideIcon | null = null;

    const matchTechStack: string[] | null = description.match(TECHSTACK_REGEXP);
    const matchApi: string[] | null = description.match(API_DOCS_REGEXP);
    const typeMatch: string[] | null = description.match(APP_TYPE_REGEXP);

    if (matchTechStack) {
      techstack = matchTechStack[1].trim().split('&&');
      description = description.replace(TECHSTACK_REGEXP, '');
    }

    if (matchApi) {
      apiDocs = matchApi[1].trim();
      description = description.replace(API_DOCS_REGEXP, '');
    }

    if (typeMatch) {
      const appFor = typeMatch ? typeMatch[1] : null;
      if (appFor && dictIconType[appFor]) {
        appIcon = dictIconType[appFor];
        description = description.replace(APP_TYPE_REGEXP, '');
      }
    }

    return { techstack, apiDocs, appIcon, plain: description };
  }

  export function isRepoToHide(repoName?: string): boolean {
    if (repoName) return HIDDEN_REPO_REGEXP.test(repoName);
    return false;
  }
}

export default UtilGithub;
