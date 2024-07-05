import { Squirrel } from 'lucide-react';
import { H3 } from 'components/typography/h';
import ConditionalContainer from 'components/containers/conditional.container';
import { cn, Props } from 'packages/utils/cn';

export default function CommonNotFound({ className, message }: Props<{ message?: string }>) {
  return (
    <div className={cn(`flex flex-col items-center justify-center`, className)}>
      <Squirrel className="w-20 h-20 stroke-indigo-600/50" />
      <H3>Not Found</H3>
      <ConditionalContainer isVisible={message}>
        <p className="text-sm">{message}</p>
      </ConditionalContainer>
    </div>
  );
}
