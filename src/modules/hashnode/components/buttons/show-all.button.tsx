import { Button, ButtonProps } from 'packages/ui/button';
import { cn, Props } from 'packages/utils/cn';

type ShowAllButtonProps = Props<ButtonProps & { containerClass?: string }>;
const ShowAllButton = ({ className, containerClass, ...props }: ShowAllButtonProps) => (
  <div className={containerClass}>
    <Button
      className={cn(`text-indigo-700 hover:underline underline-offset-2`, className)}
      variant={'plain'}
      size={'sm'}
      {...props}
    />
  </div>
);

export default ShowAllButton;
