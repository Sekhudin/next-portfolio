import HOC from 'components/HOCs/work-service.hoc.tsx';
import RateHOC from 'components/HOCs/rate-service.hoc';
import * as Service from 'configs/work-service.config';

export const WebDev = HOC(Service.WEB_DEV);
export const MobileDev = HOC(Service.MOBILE_DEV);
export const BackendDev = HOC(Service.BE_DEV);

export const HourlyRate = RateHOC(Service.HOUR_RATE);
