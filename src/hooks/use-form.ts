"use client"
import {
  useForm as useHookForm,
  type UseFormProps,
  type UseFormReturn,
  type FieldValues,
  type SubmitHandler,
  type SubmitErrorHandler,
  type DefaultValues,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useAsyncTask from './core/use-async-task';
import { toast } from 'src/components/ui/use-toast';
import AbsoluteLoaderComponent from 'src/components/atoms/loader/absolute';
import FixedLoaderComponent from 'src/components/atoms/loader/fixed';
import { catchInvalidForm, catchError } from 'src/utils/exception';

type Message = {
  title: string;
  message: string;
};
type UseHookFormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> = UseFormProps<TFieldValues, TContext> & {
  service: (params: TFieldValues) => Promise<unknown>;
  okMsg?: Message | string;
  failMsg?: Message | string;
  callback?: (data: unknown) => void;
  errorCallback?: (e: any) => void;
};

type LoaderElement = () => React.JSX.Element;
type UseHookFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
> = {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>;
  onValid: SubmitHandler<TFieldValues>;
  onInvalid: SubmitErrorHandler<TFieldValues>;
  AbsoluteLoader: LoaderElement;
  FixedLoader: LoaderElement;
} & Pick<ReturnType<typeof useAsyncTask>, 'loading'>;

type ToastMessage = (
  defTitle: string,
  defMessage: string,
  v?: Message | string
) => Record<'title' | 'description', string>;

const toastMessage: ToastMessage = (title, description, v) => {
  const result: ReturnType<ToastMessage> = { title, description };
  if (!v) return result;
  if (typeof v === 'string') {
    result.description = v;
    return result;
  }
  result.title = v.title;
  result.description = v.message;
  return result;
};

const useForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined
>({
  service,
  okMsg,
  failMsg,
  callback,
  errorCallback,
  defaultValues,
  ...props
}: UseHookFormProps<TFieldValues, TContext>): UseHookFormReturn<
  TFieldValues,
  TContext,
  TTransformedValues
> => {
  const { loading, setLoading } = useAsyncTask();
  const form = useHookForm<TFieldValues, TContext, TTransformedValues>({
    defaultValues,
    ...props,
  });

  const AbsoluteLoader: LoaderElement = () => AbsoluteLoaderComponent({ loading: loading });
  const FixedLoader: LoaderElement = () => FixedLoaderComponent({ loading: loading });
  const onValid: SubmitHandler<TFieldValues> = async (formValue, ev) => {
    try {
      setLoading(true);
      const result = await service(formValue);
      const message = toastMessage('OK', 'Successfull', okMsg);
      toast({ variant: 'success', ...message });
      let resetValue: DefaultValues<TFieldValues> | TFieldValues | null = null;

      if (typeof defaultValues === 'object') {
        resetValue = defaultValues;
      }

      if (typeof defaultValues === 'function') {
        resetValue = await defaultValues();
      }

      if (resetValue) {
        form.reset(resetValue);
      }

      if (callback) {
        callback(result);
      }
      setLoading(false);
    } catch (error) {
      const { message } = catchError(error);
      const { title, description } = toastMessage('Fail', message.description, failMsg);
      toast({ variant: 'error', title, description });
      if (errorCallback) {
        errorCallback(error);
      }
      setLoading(false);
    }
  };

  const onInvalid: SubmitErrorHandler<TFieldValues> = (error, ev) => {
    const { title, description } = catchInvalidForm<TFieldValues>(error);
    toast({ variant: 'error', title, description });
  };

  return { form, onValid, onInvalid, loading, AbsoluteLoader, FixedLoader };
};

export const formResolver = zodResolver;
export default useForm;
