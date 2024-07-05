import { Form, FormField } from 'packages/ui/form';
import { Input as InputComp } from 'packages/ui/input';
import { Textarea as TextAreaComp } from 'packages/ui/textarea';
import FormItem from 'components/HOCs/items/form.item';
import HOC from 'components/HOCs/field-form.hoc';
import RadioGroupComp from './components/radio-group.comp';
import SubmitItem from './submit.item';

export const InputField = HOC(InputComp);
export const TextAreaField = HOC(TextAreaComp);
export const RadioGroupField = HOC(RadioGroupComp);

export { Form, FormField, FormItem, SubmitItem };
