import { Button, ButtonProps } from 'packages/ui/button';
import { cn } from 'packages/utils/cn';

const SubmitItem = ({ children, className, ...props }: Omit<ButtonProps, 'type'>) => (
  <Button
    className={cn(`bg-indigo-700 hover:bg-indigo-700/90`, className)}
    type="submit"
    {...props}>
    {children || 'Submit'}
  </Button>
);

export default SubmitItem;
