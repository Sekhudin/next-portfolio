'use client';
import {
  Form,
  FieldInput,
  FieldTextArea,
  FieldRadioGroup,
  Submit,
} from 'src/components/molecules/form';
import useForm, { type Schema, type FieldName, TIME_FRAME } from './send-form';

export default function SendForm() {
  const { form, onSubmit, onInvalid, loading } = useForm();

  const radioOnValueChange = (v: (typeof TIME_FRAME)[number]) => {
    form.setValue('timeFrame', v);
  };

  return (
    <Form {...form}>
      <form method="POST" onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
        <FieldInput<Schema, FieldName>
          className="lg:w-9/12"
          name="name"
          label="Your Name"
          description="example: John Doe"
          required
        />

        <FieldInput<Schema, FieldName>
          className="lg:w-9/12"
          name="email"
          label="Email Address"
          description="example: jhondoe@mail.com"
          required
        />

        <FieldInput<Schema, FieldName> className="lg:w-9/12" name="entity" label="Entity" />

        <FieldRadioGroup<Schema, FieldName>
          className="lg:w-9/12"
          radioClassName="grid grid-cols-2 gap-6"
          items={TIME_FRAME as readonly string[]}
          onValueChange={radioOnValueChange}
          name="timeFrame"
          label="Time Frame"
          required
        />

        <FieldTextArea<Schema, FieldName> name="brief" label="Project Brief" rows={8} required />

        <div className="flex justify-end">
          <Submit />
        </div>
      </form>
    </Form>
  );
}
