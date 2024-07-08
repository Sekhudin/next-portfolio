import type Link from 'next/link';
import type React from 'react';
import type { LucideIcon } from 'lucide-react';

export type GithubUrlTypeFromDescription = 'homePage' | 'api';
export type GithubRepoTypeFromDescription = 'web' | 'mobile' | 'desktop' | 'package';
export interface GithubDescriptionFormatter {
  hide: boolean;
  rawDescription: string;
  description: string;
  icon: LucideIcon | null;
  type: GithubRepoTypeFromDescription;
  tags: string[] | null;
  url: Partial<Record<GithubUrlTypeFromDescription, string>>;
}

export type GithubIconDictionary = Record<GithubRepoTypeFromDescription, LucideIcon>;
export type GithubTypeDictionary = Record<
  GithubRepoTypeFromDescription,
  GithubRepoTypeFromDescription
>;
export type GithubTypePattern = Record<GithubRepoTypeFromDescription, RegExp>;
export type GithubUrlPattern = Record<GithubUrlTypeFromDescription, RegExp>;

export type InquiryTimeFrame = '2 Weeks' | '1-3 Months' | '> 3 Months' | 'undecided';
export type BaseContact = BaseAnchor & { icon: LucideIcon; contact: string };
export type BaseSocialMedia = BaseAnchor & { icon: LucideIcon };
export type BaseLink = BaseAnchor & {
  href: React.ComponentPropsWithoutRef<typeof Link>['href'];
  options?: Omit<React.ComponentPropsWithoutRef<typeof Link>, keyof BaseLink | 'onClick'>;
};
export type BaseTools = {
  title: string;
  stacks: Omit<BaseAnchor & { sub: string }, 'tooltip'>[];
};
export type BaseAnchor = {
  display: string;
  href: string;
  tooltip: string;
  ariaLabel: string;
};

export type BaseWorkService = {
  title: string;
  services: string[];
};
