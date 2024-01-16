import type { BaseWorkService } from './types';

type TimeFrame = '2 Weeks' | '1-3 Months' | '> 3 Months' | 'undecided';
export const TIME_FRAME: TimeFrame[] = [
  '2 Weeks',
  '1-3 Months',
  '> 3 Months',
  'undecided',
] as const;

export const HOUR_RATE: string = '$2.5';

export const WEB_DEV: BaseWorkService = {
  title: 'Web Development',
  services: ['Next.js / React / Typescript', 'Landing Page'],
};

export const MOBILE_DEV: BaseWorkService = {
  title: 'Mobile Development',
  services: ['React Native'],
};

export const BE_DEV: BaseWorkService = {
  title: 'Backend',
  services: ['Firebase', 'MongoDB', 'PostgreSQL', 'NestJS / NodeJS'],
};

export const WORK_SERVICE: BaseWorkService[] = [WEB_DEV, MOBILE_DEV, BE_DEV];
