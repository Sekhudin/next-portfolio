'use client';
import { Small } from 'src/components/atoms/typography/p';
import {
  Form,
  FieldInput,
  FieldTextArea,
  FieldRadioGroup,
  Submit,
} from 'src/components/molecules/form';
import type { _UseFormDI, _FormResolverDI, _SendInquiryDI } from 'src/types/dependencies/form';
import type { _EmailServiceDI } from 'src/types/dependencies/service';
import { cn, PropsWithClassName } from 'src/utils';

type DI = {
  deps: {
    _useForm: _UseFormDI;
    _formResolver: _FormResolverDI;
    _form: _SendInquiryDI;
    _service: _EmailServiceDI['sendInquiry'];
  };
};

type Props = PropsWithClassName<DI>;
export default function SendInquiryForm({ className, deps }: Props) {
  type InquiryForm = _SendInquiryDI['Default'];
  type InquiryField = keyof _SendInquiryDI['Default'];
  type TimeFrame = _SendInquiryDI['TimeFrame'][number];

  const { form, onValid, onInvalid, loading, FixedLoader } = deps._useForm({
    service: deps._service,
    resolver: deps._formResolver(deps._form.Schema),
    defaultValues: deps._form.Default,
    okMsg: 'Email sent successfully',
    failMsg: 'Email failed to send',
  });

  const radioOnValueChange = (v: TimeFrame) => {
    form.setValue('timeFrame', v);
  };

  return (
    <Form {...form}>
      <form
        className={cn(`relative w-full`, className)}
        method="POST"
        onSubmit={form.handleSubmit(onValid, onInvalid)}>
        <FixedLoader />
        <FieldInput<InquiryForm, InquiryField>
          className="lg:w-9/12"
          name="name"
          label="Your Name"
          description="example: John Doe"
          required
        />

        <FieldInput<InquiryForm, InquiryField>
          className="lg:w-9/12"
          name="email"
          label="Email Address"
          description="example: jhondoe@mail.com"
          required
        />

        <FieldInput<InquiryForm, InquiryField> className="lg:w-9/12" name="entity" label="Entity" />

        <FieldRadioGroup<InquiryForm, InquiryField>
          className="lg:w-9/12"
          radioClassName="grid grid-cols-2 gap-6"
          items={deps._form.TimeFrame}
          onValueChange={radioOnValueChange}
          name="timeFrame"
          label="Time Frame"
          required
        />

        <FieldTextArea<InquiryForm, InquiryField>
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
