import mail from '@emailjs/browser';
import type { _SendInquiryDI } from './form/send-inquiry';

namespace EmailService {
  async function send<T extends Record<string, any>>(form: T) {
    return await mail.send(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      form,
      `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
    );
  }

  export async function sendInquiry(form: _SendInquiryDI['Default']) {
    return await send(form);
  }
}

type _EmailServiceDI = {
  sendInquiry: typeof EmailService.sendInquiry;
};

export type { _EmailServiceDI };
export default EmailService;
