import type { Metadata, ResolvingMetadata } from 'next';
import type { NextPageProps } from 'types/global';

export type CallbackGenerateFunc<
  TParams extends string = string,
  TQuery extends string = string
> = (props: NextPageProps<TParams, TQuery>, parent: ResolvingMetadata) => Promise<Metadata>;

export type InitFunc = (metadata: Metadata) => Metadata;
export type GenerateFunc = <TParams extends string = string, TQuery extends string = string>(
  cb: CallbackGenerateFunc<TParams, TQuery>
) => (props: NextPageProps<TParams, TQuery>, parent: ResolvingMetadata) => Promise<Metadata>;

export type { Metadata };
