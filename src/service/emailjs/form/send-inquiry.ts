import z from 'zod';
import { TIME_FRAME } from 'src/config/work-service';
import Str from 'src/utils/string';

export type _SendInquiryDI = typeof SendInquiry;
namespace SendInquiry {
  export const Schema = z.object({
    name: z.string().min(1, { message: 'required' }).transform(Str.toTitleCase),
    email: z.string().email().toLowerCase().trim(),
    entity: z.string().trim().optional(),
    timeFrame: z.enum(TIME_FRAME),
    brief: z.string().min(20).transform(Str.toCapitalFirst),
  });

  export const Default: z.infer<typeof Schema> = {
    name: '',
    email: '',
    entity: '',
    brief: '',
    timeFrame: 'undecided',
  };

  export const TimeFrame = TIME_FRAME;
}

export default SendInquiry;
