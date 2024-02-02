'use client';
import useForm, { formResolver } from 'src/hooks/use-form';
import SendInquiry from 'src/service/emailjs/form/send-inquiry';
import EmailService from 'src/service/emailjs';

import type SendInquiryForm from 'src/components/organisms/form/inquiry/send';
import type { Deps } from 'src/utils';

export const { inquiryFormDeps }: Deps<'inquiryFormDeps', typeof SendInquiryForm> = {
  inquiryFormDeps: {
    _useForm: useForm,
    _formResolver: formResolver,
    _form: SendInquiry,
    _service: EmailService.sendInquiry,
  },
};
