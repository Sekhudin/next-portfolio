import { TIME_FRAME } from 'src/config/work-service';

const [tf, ...tframe] = TIME_FRAME;
const INQUIRY_TIME_FRAME = [tf, ...tframe] as const;

export { INQUIRY_TIME_FRAME };
