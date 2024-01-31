import mail from '@emailjs/browser';
import SendInquiry from './form/send-inquiry';

namespace Email {
  export async function sendInquiry(form: SendInquiry.Form) {
    return await mail.send(
      `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
      `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      form,
      `${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`
    );
  }
}

export { SendInquiry };
export default Email;
