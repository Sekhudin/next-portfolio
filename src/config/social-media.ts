import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import HOC, { type HOCIcon } from 'src/components/atoms/hoc/rounded-icon';

type SocialMedia = {
  name: string;
  description: string;
  href: string;
  IconComponent: typeof GithubIcon | HOCIcon;
};

const CONFIG: SocialMedia[] = [
  {
    name: 'Github',
    description: 'Sekhudin',
    href: 'https://github.com/Sekhudin',
    IconComponent: HOC(GithubIcon),
  },
  {
    name: 'Linkedin',
    description: 'Sekhudin',
    href: 'https://www.linkedin.com/in/sekhudin/',
    IconComponent: HOC(LinkedinIcon),
  },
  {
    name: 'Twitter',
    description: 'Sekhudin_y',
    href: 'https://twitter.com/sekhudin_y',
    IconComponent: HOC(TwitterIcon),
  },
  {
    name: 'Instagram',
    description: 'Sekhudin_y',
    href: 'https://www.instagram.com/sekhudin_y/',
    IconComponent: HOC(InstagramIcon),
  },
];

export default CONFIG;
