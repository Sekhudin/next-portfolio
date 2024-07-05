import { HASHNODE_CLIENT } from 'configs/env.config';
import type { BaseAnchor } from 'src/types/configs';

export const HASHNODE: BaseAnchor = {
  display: 'Hashnode',
  href: `https://${HASHNODE_CLIENT.HOST}/`,
  tooltip: '',
  ariaLabel: 'Sekhudin Hashnode Platform',
};

export const KAMPUS_MERDEKA: BaseAnchor = {
  display: 'Kampus Merdeka',
  href: 'https://kampusmerdeka.kemdikbud.go.id/',
  tooltip: '',
  ariaLabel: 'Kampus Merdeka',
};

export const ORBIT_FA: BaseAnchor = {
  display: 'Orbit Future Academy',
  href: 'https://orbitfutureacademy.id/',
  tooltip: '',
  ariaLabel: 'Orbit Future Academy',
};
