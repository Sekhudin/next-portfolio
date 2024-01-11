import * as z from 'zod';
import { TIME_FRAME } from 'src/config/work-service';

const [TF, ...TFRAME] = TIME_FRAME;
const schema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  entity: z.string().optional(),
  timeFrame: z.enum([TF, ...TFRAME]),
  brief: z.string().min(20),
});

export type Schema = z.infer<typeof schema>;
export const defaultValues: Schema = {
  name: '',
  email: '',
  timeFrame: '2 Week',
  brief: '',
  entity: '',
};
export default schema;
