import { CircleDot } from 'lucide-react';
import { Div, Span, SpanPoint, P } from 'src/components/atoms/typography/p';
import type { BaseWorkService } from 'src/config/types';
import { cn, PropsWithClassName } from 'src/utils';

export const RateHOC = (rate: string | number) => {
  const NewRate = ({ className }: PropsWithClassName) => (
    <Div className={cn(`text-sm dark:font-light`, className)}>
      <span>{'Hourly rate starts from '}</span>
      <SpanPoint className="dark:text-indigo-700 dark:font-semibold">{rate}</SpanPoint>
    </Div>
  );
  return NewRate;
};

const HOC = (work: BaseWorkService) => {
  const NewService = ({ className }: PropsWithClassName) => (
    <div className={cn(``, className)}>
      <P className="text-sm font-semibold dark:font-semibold mb-2">{work.title}</P>
      <ul className="flex flex-col gap-y-2 px-2">
        {work.services.map((v, key) => (
          <li key={key} className="flex items-center gap-x-2">
            <CircleDot
              className="h-1.5 w-1.5 stroke-zinc-800 dark:stroke-indigo-700
              fill-zinc-800 dark:fill-indigo-700"
            />
            <Span className="text-sm font-normal dark:font-light">{v}</Span>
          </li>
        ))}
      </ul>
    </div>
  );
  return NewService;
};

export default HOC;
