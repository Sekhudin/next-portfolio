import z from 'zod';
import Str from 'packages/utils/string';
import { TIME_FRAME } from 'configs/work-service.config';

class Inquiry {
  readonly TimeFrame = TIME_FRAME;

  getSchema = () => {
    return z.object({
      name: z
        .string()
        .min(1, { message: 'required' })
        .transform((v) => Str(v).toTitleCase()),
      email: z.string().email().toLowerCase().trim(),
      entity: z.string().trim().optional(),
      timeFrame: z.enum(this.TimeFrame),
      brief: z
        .string()
        .min(20)
        .transform((v) => Str(v).capitalizeFirstLetter()),
    });
  };

  getDefaultValue() {
    const value: z.infer<ReturnType<Inquiry['getSchema']>> = {
      name: '',
      email: '',
      entity: '',
      brief: '',
      timeFrame: 'undecided',
    };
    return value;
  }
}

const inquiry = new Inquiry();
export default inquiry;
