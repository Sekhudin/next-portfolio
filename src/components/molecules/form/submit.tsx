import { Button, ButtonProps } from 'src/components/ui/button';
import { cn } from 'src/utils';

const Submit = ({ children, className, ...props }: Omit<ButtonProps, 'type'>) => (
  <Button
    className={cn(`dark:bg-indigo-700 hover:dark:bg-indigo-700/90 dark:text-primary`, className)}
    type="submit"
    variant="default"
    {...props}>
    {children || 'Submit'}
  </Button>
);

export default Submit;
