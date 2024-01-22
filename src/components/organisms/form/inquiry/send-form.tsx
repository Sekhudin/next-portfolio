'use client';
import { Small } from 'src/components/atoms/typography/p';
import {
  Form,
  FieldInput,
  FieldTextArea,
  FieldRadioGroup,
  Submit,
} from 'src/components/molecules/form';
import useForm, { type Schema, type FieldName, TIME_FRAME } from './use-send-form';

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

        <FieldTextArea<Schema, FieldName>
          name="brief"
          label="Project Brief"
          rows={8}
          description="Please tell me about yourself, including your project objective,
          when you need it, and whether you are familiar with domain, hosting, etc."
          required
        />

        <Small className="dark:font-light">
          {`I will get back to you in less than `}
          <span className="font-semibold dark:text-indigo-700">{'3 working days.'}</span>
        </Small>

        <div className="flex justify-end">
          <Submit disabled={loading} />
        </div>
      </form>
    </Form>
  );
}
