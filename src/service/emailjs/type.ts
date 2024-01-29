import type { TIME_FRAME } from 'src/config/work-service';

type InquiryTimeFrame = (typeof TIME_FRAME)[number];
type InquiryForm = {
  name: string;
  email: string;
  timeFrame: InquiryTimeFrame;
  brief: string;
  entity?: string;
};

export type { InquiryForm, InquiryTimeFrame };
