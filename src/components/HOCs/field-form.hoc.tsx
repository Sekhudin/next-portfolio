import type React from 'react';
import type { FieldPath, FieldValues, ControllerProps } from 'react-hook-form';
import { FormField } from 'packages/ui/form';
import FormItem, { type FormItemProps } from './items/form.item';

type Controller<TF extends FieldValues, FN extends FieldPath<TF> = FieldPath<TF>> = Omit<
  ControllerProps<TF, FN>,
  'render'
>;

type FieldElementProps<T extends Record<string, any>> = Omit<T, keyof ControllerProps>;

const HOC = <T extends Record<string, any> = {}>(FieldElement: React.ComponentType<T>) => {
  const NewField = <
    TF extends FieldValues = FieldValues,
    FN extends FieldPath<TF> = FieldPath<TF>
  >({
    name,
    control,
    defaultValue,
    disabled,
    rules,
    shouldUnregister,
    label,
    description,
    className,
    required,
    ...v
  }: Controller<TF, FN> & FieldElementProps<T> & Omit<FormItemProps, 'children'>) => {
    const fieldProps: Controller<TF, FN> = {
      name,
      control,
      defaultValue,
      disabled,
      rules,
      shouldUnregister,
    };
    const itemProps: FormItemProps = { className, label, description, required };
    const props: T = { ...v } as unknown as T;
    return (
      <FormField<TF, FN>
        {...fieldProps}
        render={({ field }) => (
          <FormItem {...itemProps}>
            <FieldElement {...props} {...field} />
          </FormItem>
        )}
      />
    );
  };
  return NewField;
};

export default HOC;
