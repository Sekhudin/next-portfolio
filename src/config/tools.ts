import { BaseTools } from './types';

export const LANGUAGE: BaseTools = {
  title: 'Programming Languages',
  stacks: [
    {
      display: 'Typescript',
      sub: 'Programming Language',
      href: 'https://www.typescriptlang.org/',
      ariaLabel: '',
    },
    {
      display: 'Javascript',
      sub: 'Programming Language',
      href: 'https://devdocs.io/javascript/',
      ariaLabel: '',
    },
    {
      display: 'Python',
      sub: 'Programming Language',
      href: 'https://www.python.org/',
      ariaLabel: '',
    },
  ],
};

export const FRAMEWORK: BaseTools = {
  title: 'Frameworks',
  stacks: [
    {
      display: 'Next.js',
      sub: 'Web Development',
      href: 'https://nextjs.org/',
      ariaLabel: '',
    },
    {
      display: 'NestJS',
      sub: 'Backend Framework',
      href: 'https://nestjs.com/',
      ariaLabel: '',
    },
    {
      display: 'Express.js',
      sub: 'Backend Framework',
      href: 'https://expressjs.com/',
      ariaLabel: '',
    },
    {
      display: 'Tailwind CSS',
      sub: 'CSS Framework',
      href: 'https://tailwindcss.com/',
      ariaLabel: '',
    },
  ],
};

export const DEVTOOLS: BaseTools = {
  title: 'Development, Testing, Deployment Tools',
  stacks: [
    {
      display: 'Git',
      sub: 'Version Control System',
      href: 'https://git-scm.com/',
      ariaLabel: '',
    },
    {
      display: 'Docker',
      sub: 'Containerization Platform',
      href: 'https://www.docker.com/',
      ariaLabel: '',
    },
    {
      display: 'PostgreSQL',
      sub: 'Relational Database',
      href: 'https://www.postgresql.org/',
      ariaLabel: '',
    },
    {
      display: 'MongoDB',
      sub: 'NoSQL Database',
      href: 'https://www.mongodb.com/',
      ariaLabel: '',
    },
    {
      display: 'VS Code',
      sub: 'IDE',
      href: 'https://code.visualstudio.com/',
      ariaLabel: '',
    },
    {
      display: 'Android Studio',
      sub: 'IDE',
      href: 'https://developer.android.com/',
      ariaLabel: '',
    },
  ],
};

export const TOOLS: BaseTools[] = [LANGUAGE, FRAMEWORK, DEVTOOLS];
