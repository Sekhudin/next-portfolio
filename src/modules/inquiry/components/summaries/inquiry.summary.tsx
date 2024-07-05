import { H1 } from 'components/typography/h';
import { cn, Props } from 'packages/utils/cn';

const InquirySummary = ({ className }: Props) => (
  <div className={cn(`max-w-[90%] md:max-w-[80%] 2xl:max-w-[70%]`, className)}>
    <H1>Available for front-end projects and other.</H1>
  </div>
);

export default InquirySummary;
