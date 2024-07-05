import React from 'react';
import { toast } from 'sonner';
import { useReactForm, zodResolver, formUtil } from 'packages/form';
import type { UseReactFormFunc, DefaultValues, OnValid, OnInvalid } from 'packages/form/types';
import CommonAbsoluteLoader from 'components/shared/absolute.loader';
import CommonFixedLoader from 'components/shared/fixed.loader';
import Exception from 'packages/exception';

const useForm: UseReactFormFunc = (props) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const form = useReactForm(props);

  const AbsoluteLoader = () => CommonAbsoluteLoader({ loading: loading });
  const FixedLoader = () => CommonFixedLoader({ loading: loading });

  const onValid: OnValid = async (value, ev) => {
    try {
      setLoading(true);
      const result = await props.service(value);
      const messageToast = formUtil.createMessageToast({
        title: 'Successfull',
        description: props.okMsg,
      });
      toast.success(...messageToast);
      let resetValue: DefaultValues | null = null;

      switch (typeof props.defaultValues) {
        case 'object':
          resetValue = props.defaultValues;
          break;
        case 'function':
          resetValue = await props.defaultValues();
          break;
      }

      if (resetValue) {
        form.reset(resetValue);
      }

      if (props.callback) {
        props.callback(result);
      }

      setLoading(false);
    } catch (error) {
      const messageToast = Exception.catchToast(error, 'Failed');
      toast.error(...messageToast);
      if (props.errorCallback) {
        props.errorCallback(error);
      }
      setLoading(false);
    }
  };

  const onInvalid: OnInvalid = (error, ev) => {
    const { title, description } = Exception.catchInvalidForm(error);
    toast.error(title, { description });
  };

  return { form, onValid, onInvalid, loading, AbsoluteLoader, FixedLoader };
};

export const formResolver = zodResolver;
export default useForm;
