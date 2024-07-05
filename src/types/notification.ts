import type { ExternalToast } from 'sonner';

export type MessageToast = {
  title: string;
  description?: string;
};
export type CreateMessageToast = (
  value: string | MessageToast,
  data?: ExternalToast
) => [message: string, data?: ExternalToast];
