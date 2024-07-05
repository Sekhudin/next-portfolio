import emailJs from '@emailjs/browser';
import * as env from 'configs/env.config';

class EmailJsService {
  private readonly serviceID = env.EMAIL_JS.SERVICE_ID;
  private readonly templateID = env.EMAIL_JS.TEMPLATE_ID;
  private readonly publicKey = env.EMAIL_JS.PUBLIC_KEY;

  async sendForm<T extends Record<string, any>>(form: T) {
    return await emailJs.send(this.serviceID, this.templateID, form, this.publicKey);
  }
}

const service = new EmailJsService();
export default service;
