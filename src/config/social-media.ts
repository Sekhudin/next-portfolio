import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import HOC from 'src/components/atoms/hoc/rounded-icon';
import type { BaseSocialMedia } from './types';

export const GITHUB: BaseSocialMedia = {
  name: 'Github',
  href: 'https://github.com/Sekhudin',
  tooltip: 'Sekhudin',
  alt: 'Follow on Github',
  plainIcon: GithubIcon,
  IconComponent: HOC(GithubIcon),
};

export const LINKEDIN: BaseSocialMedia = {
  name: 'Linkedin',
  href: 'https://www.linkedin.com/in/sekhudin/',
  tooltip: 'Sekhudin',
  alt: 'Follow on Linkedin',
  plainIcon: LinkedinIcon,
  IconComponent: HOC(LinkedinIcon),
};

export const TWITTER: BaseSocialMedia = {
  name: 'Twitter',
  href: 'https://twitter.com/sekhudin_y',
  tooltip: 'Sekhudin_y',
  alt: 'Follow on Twitter',
  plainIcon: TwitterIcon,
  IconComponent: HOC(TwitterIcon),
};

export const IG: BaseSocialMedia = {
  name: 'Instagram',
  href: 'https://www.instagram.com/sekhudin_y/',
  tooltip: 'Sekhudin_y',
  alt: 'Follow on IG',
  plainIcon: InstagramIcon,
  IconComponent: HOC(InstagramIcon),
};

export const SOCIAL_MEDIA: BaseSocialMedia[] = [GITHUB, LINKEDIN, TWITTER, IG];
