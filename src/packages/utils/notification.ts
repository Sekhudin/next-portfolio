import { CreateMessageToast, MessageToast } from 'types/notification';

class Notifcation {
  createMessageToast: CreateMessageToast = (value, data) => {
    const result: MessageToast = { title: '', description: '' };

    switch (typeof value) {
      case 'string':
        result.description = value;
        break;
      case 'object':
        result.title = value.title;
        result.description = value.description;
        break;
    }
    return [result.title, { ...data, description: result.description }];
  };
}

const notification = new Notifcation();
export default notification;
