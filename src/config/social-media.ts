import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import type { BaseSocialMedia } from './types';

export const GITHUB: BaseSocialMedia = {
  display: 'Github',
  href: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB}`,
  tooltip: 'Sekhudin',
  ariaLabel: 'Follow on Github',
  icon: GithubIcon,
};

export const LINKEDIN: BaseSocialMedia = {
  display: 'Linkedin',
  href: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN}`,
  tooltip: 'Sekhudin',
  ariaLabel: 'Follow on Linkedin',
  icon: LinkedinIcon,
};

export const TWITTER: BaseSocialMedia = {
  display: 'Twitter',
  href: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER}`,
  tooltip: 'Sekhudin_y',
  ariaLabel: 'Follow on Twitter',
  icon: TwitterIcon,
};

export const IG: BaseSocialMedia = {
  display: 'Instagram',
  href: `https://www.instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM}`,
  tooltip: 'Sekhudin_y',
  ariaLabel: 'Follow on IG',
  icon: InstagramIcon,
};

export const SOCIAL_MEDIA: BaseSocialMedia[] = [GITHUB, LINKEDIN, TWITTER, IG];
