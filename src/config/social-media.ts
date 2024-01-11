import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import type { BaseSocialMedia } from './types';

export const GITHUB: BaseSocialMedia = {
  display: 'Github',
  href: 'https://github.com/Sekhudin',
  tooltip: 'Sekhudin',
  ariaLabel: 'Follow on Github',
  icon: GithubIcon,
};

export const LINKEDIN: BaseSocialMedia = {
  display: 'Linkedin',
  href: 'https://www.linkedin.com/in/sekhudin/',
  tooltip: 'Sekhudin',
  ariaLabel: 'Follow on Linkedin',
  icon: LinkedinIcon,
};

export const TWITTER: BaseSocialMedia = {
  display: 'Twitter',
  href: 'https://twitter.com/sekhudin_y',
  tooltip: 'Sekhudin_y',
  ariaLabel: 'Follow on Twitter',
  icon: TwitterIcon,
};

export const IG: BaseSocialMedia = {
  display: 'Instagram',
  href: 'https://www.instagram.com/sekhudin_y/',
  tooltip: 'Sekhudin_y',
  ariaLabel: 'Follow on IG',
  icon: InstagramIcon,
};

export const SOCIAL_MEDIA: BaseSocialMedia[] = [GITHUB, LINKEDIN, TWITTER, IG];
