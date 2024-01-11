import React, { HTMLAttributes } from 'react';
import type { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'src/components/ui/form';
import { cn } from 'src/utils';

export default function HOC<T extends HTMLAttributes<object>>(FieldElement: React.ComponentType) {
  const NewField = <
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
  >({
    name,
    render,
  }: ControllerProps<TFieldValues, TName> & T) => (
    <FormField<TFieldValues, TName>
      name={name}
      render={({ field }) => (
        <FormItem className={cn(``)}>
          {true && <FormLabel>{}</FormLabel>}

          <FormControl>
            <FieldElement />
          </FormControl>

          {true && <FormDescription>{}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
  return NewField;
}
