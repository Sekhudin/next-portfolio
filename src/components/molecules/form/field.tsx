import { Input, InputProps } from 'src/components/ui/input';
import { Textarea, TextareaProps } from 'src/components/ui/textarea';
import RadioGroup, { type RadioProps } from './field-radio';
import HOC from './field-hoc';

export const FieldInput = HOC<InputProps>(Input);
export const FieldTextArea = HOC<TextareaProps>(Textarea);
export const FieldRadioGroup = HOC<RadioProps>(RadioGroup);
