'use client';
import { Small } from 'components/typography/p';
import {
  Form,
  InputField,
  TextAreaField,
  RadioGroupField,
  SubmitItem,
} from 'components/form-items';
import { cn, Props } from 'packages/utils/cn';
import useForm, { formResolver } from 'packages/hooks/use-form';
import inquirySchema from 'modules/inquiry/schemas/inquiry.schema';
import inquiryService from 'modules/inquiry/services/inquiry.service';

export default function InquiryForm({ className }: Props) {
  const { form, onValid, onInvalid, loading, FixedLoader } = useForm({
    service: inquiryService.sendInquiry,
    resolver: formResolver(inquirySchema.schema),
    defaultValues: inquirySchema.defaultValue,
    okMsg: 'Email sent successfully',
    failMsg: 'Email failed to send',
  });

  const radioOnValueChange = (timeFrame: string) => {
    form.setValue('timeFrame', timeFrame);
  };

  return (
    <Form {...form}>
      <form
        className={cn(`relative w-full`, className)}
        method="POST"
        onSubmit={form.handleSubmit(onValid, onInvalid)}>
        <FixedLoader />
        <InputField
          className="lg:w-9/12"
          name="name"
          label="Your Name"
          description="example: John Doe"
          required
        />

        <InputField
          className="lg:w-9/12"
          name="email"
          label="Email Address"
          description="example: jhondoe@mail.com"
          required
        />

        <InputField className="lg:w-9/12" name="entity" label="Entity" />

        <RadioGroupField
          className="lg:w-9/12"
          radioClassName="grid grid-cols-2 gap-6"
          items={inquirySchema.TimeFrame}
          onValueChange={radioOnValueChange}
          name="timeFrame"
          label="Time Frame"
          required
        />

        <TextAreaField
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
          <SubmitItem disabled={loading} />
        </div>
      </form>
    </Form>
  );
}
