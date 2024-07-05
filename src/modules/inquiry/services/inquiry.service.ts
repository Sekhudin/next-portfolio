import emailJsService from 'packages/emailjs';

class InquiryService {
  async sendInquiry(form: Record<string, any>) {
    return await emailJsService.sendForm(form);
  }
}

const service = new InquiryService();
export default service;
