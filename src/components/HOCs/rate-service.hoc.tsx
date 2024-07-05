import { Small } from 'components/typography/p';
import { cn, Props } from 'packages/utils/cn';

const RateHOC = (rate: string | number) => {
  const NewRate = ({ className }: Props) => (
    <Small className={cn(`dark:font-light`, className)}>
      {'Hourly rate starts from '}
      <span className="font-semibold dark:text-indigo-700">{rate}</span>
    </Small>
  );
  return NewRate;
};

export default RateHOC;
