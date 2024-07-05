import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import { SOCIAL_MEDIA as SOSMED } from 'configs/env.config';
import type { BaseSocialMedia } from 'src/types/configs';

export const GITHUB: BaseSocialMedia = {
  display: 'Github',
  href: `https://github.com/${SOSMED.GITHUB}`,
  tooltip: 'Sekhudin',
  ariaLabel: 'Follow on Github',
  icon: GithubIcon,
};

export const LINKEDIN: BaseSocialMedia = {
  display: 'Linkedin',
  href: `https://www.linkedin.com/in/${SOSMED.LINKEDIN}`,
  tooltip: 'Sekhudin',
  ariaLabel: 'Follow on Linkedin',
  icon: LinkedinIcon,
};

export const TWITTER: BaseSocialMedia = {
  display: 'Twitter',
  href: `https://twitter.com/${SOSMED.LINKEDIN}`,
  tooltip: 'Sekhudin_y',
  ariaLabel: 'Follow on Twitter',
  icon: TwitterIcon,
};

export const IG: BaseSocialMedia = {
  display: 'Instagram',
  href: `https://www.instagram.com/${SOSMED.INSTAGRAM}`,
  tooltip: 'Sekhudin_y',
  ariaLabel: 'Follow on IG',
  icon: InstagramIcon,
};

export const SOCIAL_MEDIA: BaseSocialMedia[] = [GITHUB, LINKEDIN, TWITTER, IG];
