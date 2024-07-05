import type { LucideIcon } from 'lucide-react';
import type { MapCallbackfn } from 'types/common';
import type {
  GithubDescriptionFormatter,
  GithubRepoTypeFromDescription,
  GithubUrlTypeFromDescription,
} from 'types/configs';
import Arr from 'packages/utils/array';
import * as Regx from 'configs/regex';

class DescriptionFormatterEntity implements GithubDescriptionFormatter {
  protected repoToHide = ['sekhudin', 'nest', 'rest-nestjs'];
  private urlTypes: GithubUrlTypeFromDescription[] = ['api', 'homePage'];
  private repoTypes: GithubRepoTypeFromDescription[] = ['web', 'mobile', 'desktop', 'package'];

  hide!: boolean;
  rawDescription!: string;
  description!: string;
  icon!: LucideIcon | null;
  tags!: string[] | null;
  type!: GithubRepoTypeFromDescription;
  url!: Partial<Record<GithubUrlTypeFromDescription, string>>;

  constructor(description?: string | null) {
    if (description && typeof description === 'string') {
      this.rawDescription = description;
      this.description = description;
    } else {
      this.rawDescription = '';
      this.description = '';
    }

    this.hide = false;
    this.icon = null;
    this.tags = null;
    this.url = {
      api: '',
      homePage: '',
    };
  }

  protected parseType() {
    this.repoTypes.forEach((type, _) => {
      const match = Regx.githubTypePattern[type].test(this.description);
      if (match) {
        this.type = type;
        this.icon = Regx.githubIconDictionary[type];
      }
      this.description = this.description.replace(Regx.githubTypePattern[type], '').trim();
    });
  }

  protected parseUrl() {
    this.urlTypes.forEach((type, _) => {
      const resultMatch = this.description.match(Regx.githubUrlPattern[type]);
      this.description = this.description.replace(Regx.githubUrlPattern[type], '').trim();
      if (resultMatch && resultMatch[1]) {
        this.url = {
          ...this.url,
          [type]: resultMatch[1].trim(),
        };
      }
    });
  }

  protected parseTags() {
    const resultMatch = this.description.match(Regx.githubTagsPattern.tag);
    if (resultMatch && resultMatch[1]) {
      this.description = this.description.replace(Regx.githubTagsPattern.tag, '').trim();
      this.tags = resultMatch[1].split(Regx.githubTagsPattern.splitter);
    }
    this.description = this.description.replace(Regx.githubTagsPattern.splitter, '').trim();
  }
}

class DescriptionFormatterMethods extends DescriptionFormatterEntity {
  constructor(description?: string | null) {
    super(description);
  }

  isType(type: GithubRepoTypeFromDescription) {
    return this.type === type;
  }

  getDescription() {
    return this.description;
  }

  getIcon() {
    return this.icon;
  }

  getTags() {
    return this.tags;
  }

  getUrl(key: GithubUrlTypeFromDescription) {
    return this.url[key];
  }

  getClassName() {
    if (this.hide) {
      return 'cursor-not-allowed';
    }
    return 'cursor-pointer';
  }

  mapTags(cb: MapCallbackfn<string>) {
    return Arr(this.tags).map(cb);
  }

  parse(repoName: string) {
    this.hide = this.repoToHide.includes(repoName.toLowerCase().trim());
    this.parseType();
    this.parseTags();
    this.parseUrl();
    return this;
  }
}

const descriptionFormat = (description?: string | null) => {
  return new DescriptionFormatterMethods(description);
};
export default descriptionFormat;
