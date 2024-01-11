import { Input, InputProps } from 'src/components/ui/input';
export { Form, FormField, useFormField } from 'src/components/ui/form';
import HOC from './hoc';

type s = typeof Input
export const FieldInput = HOC<InputProps>(Input);
