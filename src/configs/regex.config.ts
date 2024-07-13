import { LayoutTemplate, TabletSmartphone, Monitor, Library } from 'lucide-react';
import type {
  GithubTypeDictionary,
  GithubIconDictionary,
  GithubTypePattern,
  GithubUrlPattern,
} from 'types/configs';

const TypeWeb: RegExp = /<web\/>/;
const TypeDesktop: RegExp = /<desktop\/>/;
const TypeMobile: RegExp = /<mobile\/>/;
const TypePackage: RegExp = /<package\/>/;

const ApiDocs: RegExp = /<api>(.*?)<\/api>/i;
const HomePage: RegExp = /<home>(.*?)<\/home>/i;
const Tags: RegExp = /<tag>(.*?)<\/tag>/i;
const TagsSplitter: string = '&&';

export const githubTypePattern: GithubTypePattern = {
  web: TypeWeb,
  mobile: TypeMobile,
  desktop: TypeDesktop,
  package: TypePackage,
};

export const githubUrlPattern: GithubUrlPattern = {
  api: ApiDocs,
  homePage: HomePage,
};

export const githubTagsPattern: Record<'tag' | 'splitter', RegExp | string> = {
  tag: Tags,
  splitter: TagsSplitter,
};

export const githubIconDictionary: GithubIconDictionary = {
  web: LayoutTemplate,
  mobile: TabletSmartphone,
  desktop: Monitor,
  package: Library,
};

export const githubTypeDictionary: GithubTypeDictionary = {
  web: 'web',
  mobile: 'mobile',
  desktop: 'desktop',
  package: 'package',
};
