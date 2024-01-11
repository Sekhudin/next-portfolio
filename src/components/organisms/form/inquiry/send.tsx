'use client';
import { Form, FormField, FieldInput } from 'src/components/molecules/form-field/field';
import useForm from './send.form';

export default function SendForm() {
  const { form, onSubmit, onInvalid, loading } = useForm();

  return (
    <Form {...form}>
      <form method="POST" onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
        {/*  */}
      </form>
    </Form>
  );
}
