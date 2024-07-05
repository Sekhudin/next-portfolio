import { CircleDot } from 'lucide-react';
import { Small } from 'components/typography/p';
import { cn, Props } from 'packages/utils/cn';
import type { BaseWorkService } from 'types/configs';

export const RateHOC = (rate: string | number) => {
  const NewRate = ({ className }: Props) => (
    <Small className={cn(`dark:font-light`, className)}>
      {'Hourly rate starts from '}
      <span className="font-semibold dark:text-indigo-700">{rate}</span>
    </Small>
  );
  return NewRate;
};

const HOC = (work: BaseWorkService) => {
  const NewService = ({ className }: Props) => (
    <div className={cn(``, className)}>
      <Small className="font-semibold mb-4">{work.title}</Small>
      <ul className="flex flex-col gap-y-4 px-2">
        {work.services.map((v, key) => (
          <li key={key} className="flex items-center gap-x-2">
            <CircleDot
              className="h-1.5 w-1.5 stroke-zinc-800 dark:stroke-indigo-700
              fill-zinc-800 dark:fill-indigo-700"
            />
            <Small className="font-light">{v}</Small>
          </li>
        ))}
      </ul>
    </div>
  );
  return NewService;
};

export default HOC;
