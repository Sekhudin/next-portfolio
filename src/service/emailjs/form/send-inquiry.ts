import z from 'zod';
import { TIME_FRAME } from 'src/config/work-service';
import Str from 'src/utils/string';

namespace SendInquiry {
  export const Schema = z.object({
    name: z.string().min(1, { message: 'required' }).transform(Str.toTitleCase),
    email: z.string().email().toLowerCase().trim(),
    entity: z.string().trim().optional(),
    timeFrame: z.enum(TIME_FRAME),
    brief: z.string().min(20).transform(Str.toCapitalFirst),
  });

  export const Default: _SendInquiry['Form'] = {
    name: '',
    email: '',
    entity: '',
    brief: '',
    timeFrame: 'undecided',
  };

  export const TimeFrame = TIME_FRAME;
}

type _SendInquiry = {
  Form: z.infer<typeof SendInquiry.Schema>;
  Field: keyof _SendInquiry['Form'];
  ItemTimeFrame: _SendInquiryDI['TimeFrame'][number];
};

type _SendInquiryDI = {
  Schema: typeof SendInquiry.Schema;
  Default: typeof SendInquiry.Default;
  TimeFrame: typeof SendInquiry.TimeFrame;
};

export type { _SendInquiry, _SendInquiryDI };
export default SendInquiry;
