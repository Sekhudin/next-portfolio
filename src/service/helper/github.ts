import {
  LayoutTemplate as WebIcon,
  TabletSmartphone as MobileIcon,
  Monitor as DesktopIcon,
  Library as PackageIcon,
  type LucideIcon,
} from 'lucide-react';
import {
  IS_PACKAGE_,
  IS_WEB_,
  IS_DESKTOP_,
  IS_MOBILE_,
  DOCS_URL_,
  HOME_URL_,
  TAG_,
  TAG_SPLITTER_,
  REPO_HIDDEN,
} from 'src/config/regexp';

type ReturnRepoType = {
  plain: string;
  icon: LucideIcon | null;
  isPackage: boolean;
  isWeb: boolean;
  isDesktop: boolean;
  isMobile: boolean;
};

type ReturnReplacer = {
  desc: string;
  result: string | null;
};

export type ReturnDescription = {
  tags: string[] | null;
  api_url: string | null;
  home_url: string | null;
} & ReturnRepoType;

namespace UtilGithub {
  export function isRepoToHide(reponame: string): boolean {
    return REPO_HIDDEN.includes(reponame);
  }

  export function analyzeDescription(textDescription?: string | null): ReturnDescription {
    const { plain: plain1, ...repo } = repoType(textDescription);
    const { desc: plain2, result: api_url } = replacer(plain1, DOCS_URL_);
    const { desc: plain3, result: home_url } = replacer(plain2, HOME_URL_);
    const { desc: plain, result } = replacer(plain3, TAG_);
    const tags = result ? result.split(TAG_SPLITTER_) : null;

    return { plain, api_url, home_url, tags, ...repo };
  }

  function repoType(textDescription?: string | null): ReturnRepoType {
    let desc = textDescription || '';
    let icon: LucideIcon | null = null;
    const isPackage: boolean = IS_PACKAGE_.test(desc);
    const isWeb: boolean = IS_WEB_.test(desc);
    const isDesktop: boolean = IS_DESKTOP_.test(desc);
    const isMobile: boolean = IS_MOBILE_.test(desc);

    if (isPackage) {
      icon = PackageIcon;
      desc = desc.replace(IS_PACKAGE_, '').trim();
    }

    if (isWeb) {
      icon = WebIcon;
      desc = desc.replace(IS_WEB_, '').trim();
    }

    if (isDesktop) {
      icon = DesktopIcon;
      desc = desc.replace(IS_DESKTOP_, '').trim();
    }

    if (isMobile) {
      icon = MobileIcon;
      desc = desc.replace(IS_MOBILE_, '').trim();
    }

    return { plain: desc, icon, isPackage, isWeb, isDesktop, isMobile };
  }

  function replacer(desc: string, pattern: RegExp): ReturnReplacer {
    const resultMatch: string[] | null = desc.match(pattern);
    let result: string | null = null;
    if (resultMatch) {
      result = resultMatch[1].trim();
      desc = desc.replace(pattern, '').trim();
    }
    return { desc, result };
  }
}

export default UtilGithub;
