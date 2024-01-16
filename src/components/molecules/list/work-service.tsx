import { WEB_DEV, MOBILE_DEV, BE_DEV, HOUR_RATE } from 'src/config/work-service';
import HOC, { RateHOC } from './work-service-hoc.tsx';

export const WebDevService = HOC(WEB_DEV);
export const MobileDevService = HOC(MOBILE_DEV);
export const BackendDevService = HOC(BE_DEV);

export const HourlyRate = RateHOC(HOUR_RATE);
