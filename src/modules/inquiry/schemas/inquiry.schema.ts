import z from 'zod';
import Str from 'packages/utils/string';
import { TIME_FRAME } from 'configs/work-service.config';

class Inquiry {
  readonly TimeFrame = TIME_FRAME;
  readonly schema = z.object({
    name: z
      .string()
      .min(1, { message: 'name cannot be empty.' })
      .transform((v) => Str(v).toTitleCase()),
    email: z.string().email().toLowerCase().trim(),
    entity: z.string().trim().optional(),
    timeFrame: z.enum(this.TimeFrame),
    brief: z
      .string()
      .min(20, { message: 'brief must be at least 20 characters long.' })
      .transform((v) => Str(v).capitalizeFirstLetter()),
  });

  readonly defaultValue: z.infer<this['schema']> = {
    name: '',
    email: '',
    entity: '',
    brief: '',
    timeFrame: 'undecided',
  };

  init(values: Partial<z.infer<this['schema']>>): z.infer<this['schema']> {
    return {
      ...this.defaultValue,
      ...values,
    };
  }
}

const inquiry = new Inquiry();
export default inquiry;
