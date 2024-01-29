'use client';
import { Small } from 'src/components/atoms/typography/p';
import AbsoluteLoader from 'src/components/atoms/loader/absolute';
import {
  Form,
  FieldInput,
  FieldTextArea,
  FieldRadioGroup,
  Submit,
} from 'src/components/molecules/form';
import useForm, {
  INQUIRY_TIME_FRAME,
  type InquiryForm,
  type FieldName,
  type InquiryTimeFrame,
} from './use-form';
import { cn, PropsWithClassName } from 'src/utils';

export default function SendForm({ className }: PropsWithClassName) {
  const { form, onSubmit, onInvalid, loading } = useForm();

  const radioOnValueChange = (v: InquiryTimeFrame) => {
    form.setValue('timeFrame', v);
  };

  return (
    <Form {...form}>
      <form
        className={cn(`relative w-full`, className)}
        method="POST"
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}>
        <AbsoluteLoader loading={loading} />
        <FieldInput<InquiryForm, FieldName>
          className="lg:w-9/12"
          name="name"
          label="Your Name"
          description="example: John Doe"
          required
        />

        <FieldInput<InquiryForm, FieldName>
          className="lg:w-9/12"
          name="email"
          label="Email Address"
          description="example: jhondoe@mail.com"
          required
        />

        <FieldInput<InquiryForm, FieldName> className="lg:w-9/12" name="entity" label="Entity" />

        <FieldRadioGroup<InquiryForm, FieldName>
          className="lg:w-9/12"
          radioClassName="grid grid-cols-2 gap-6"
          items={INQUIRY_TIME_FRAME as readonly string[]}
          onValueChange={radioOnValueChange}
          name="timeFrame"
          label="Time Frame"
          required
        />

        <FieldTextArea<InquiryForm, FieldName>
          className="w-full"
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

        <div className="flex justify-end mt-6">
          <Submit disabled={loading} />
        </div>
      </form>
    </Form>
  );
}
