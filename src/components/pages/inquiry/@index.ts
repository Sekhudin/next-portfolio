'use client';
import useForm, { formResolver } from 'src/hooks/use-form';
import SendInquiry from 'src/service/emailjs/form/send-inquiry';
import EmailService from 'src/service/emailjs';

import type FormInquirySection from './section/form-inquiry-section';
import type { Deps } from 'src/utils';

export const { formInquiryDeps }: Deps<'formInquiryDeps', typeof FormInquirySection> = {
  formInquiryDeps: {
    _useForm: useForm,
    _formResolver: formResolver,
    _form: SendInquiry,
    _service: EmailService.sendInquiry,
  },
};
