'use client';
import type React from 'react';
import {
  FormControl,
  FormDescription,
  FormItem as Item,
  FormLabel,
  FormMessage,
  useFormField,
} from 'packages/ui/form';
import { cn, Props, WithChildren } from 'packages/utils/cn';

export type FormItemProps = {
  label?: string;
  description?: string;
  required?: boolean;
} & Partial<Props<WithChildren>>;

const FormItem = (v: FormItemProps) => {
  const { error } = useFormField();
  return (
    <Item className={cn(`mb-4`, v.className)}>
      {v.label && (
        <FormLabel
          className={`${
            v.required &&
            `after:content-['*'] after:text-lg
          after:text-pink-600 after:dark:text-indigo-700 after:mx-1`
          }`}>
          {v.label}
        </FormLabel>
      )}

      <FormControl>{v.children}</FormControl>

      {!error && (
        <FormDescription
          className={cn(!v.description && 'invisible', 'font-light first-letter:uppercase')}>
          {v.description || '-'}
        </FormDescription>
      )}

      <FormMessage className="font-light dark:font-medium first-letter:uppercase" />
    </Item>
  );
};

export default FormItem;
