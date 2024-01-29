import { GITHUB, TWITTER } from 'src/config/social-media';
import HOC from './follow-hoc';

export const FollowGithub = HOC(GITHUB);
export const FollowTwitter = HOC(TWITTER);
