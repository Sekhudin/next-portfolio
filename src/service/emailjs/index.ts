import mail from '@emailjs/browser';
import type { InquiryForm } from './type';

namespace Email {
  export async function sendInquiry(form: InquiryForm) {
    return await mail.send(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      form,
      `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
    );
  }
}

export type * from './type';
export * from './constant';
export default Email;
