'use client';
import { Small } from 'src/components/atoms/typography/p';
import {
  Form,
  FieldInput,
  FieldTextArea,
  FieldRadioGroup,
  Submit,
} from 'src/components/molecules/form';
// import useForm, { resolver } from 'src/hooks/use-form';
import EmailService, { SendInquiry } from 'src/service/emailjs';
import type { _useFormDI, _formResolverDI } from 'src/types/dependencies/hooks';
import { cn, PropsWithClassName, ArrayItem } from 'src/utils';

type DI = {
  deps: {
    useForm: _useFormDI;
    formResolver: _formResolverDI;
  };
};

export default function SendInquiryForm({ className, deps }: PropsWithClassName<DI>) {
  const { form, onValid, onInvalid, loading, FixedLoader } = deps.useForm({
    service: EmailService.sendInquiry,
    resolver: deps.formResolver(SendInquiry.Schema),
    defaultValues: SendInquiry.Default,
    okMsg: 'Email sent successfully',
    failMsg: 'Email failed to send',
  });

  const radioOnValueChange = (v: ArrayItem<typeof SendInquiry.TimeFrame>) => {
    form.setValue('timeFrame', v);
  };

  return (
    <Form {...form}>
      <form
        className={cn(`relative w-full`, className)}
        method="POST"
        onSubmit={form.handleSubmit(onValid, onInvalid)}>
        <FixedLoader />
        <FieldInput<SendInquiry.Form, SendInquiry.Field>
          className="lg:w-9/12"
          name="name"
          label="Your Name"
          description="example: John Doe"
          required
        />

        <FieldInput<SendInquiry.Form, SendInquiry.Field>
          className="lg:w-9/12"
          name="email"
          label="Email Address"
          description="example: jhondoe@mail.com"
          required
        />

        <FieldInput<SendInquiry.Form, SendInquiry.Field>
          className="lg:w-9/12"
          name="entity"
          label="Entity"
        />

        <FieldRadioGroup<SendInquiry.Form, SendInquiry.Field>
          className="lg:w-9/12"
          radioClassName="grid grid-cols-2 gap-6"
          items={SendInquiry.TimeFrame as readonly string[]}
          onValueChange={radioOnValueChange}
          name="timeFrame"
          label="Time Frame"
          required
        />

        <FieldTextArea<SendInquiry.Form, SendInquiry.Field>
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
