import { Card, CardContent } from 'packages/ui/card';
import { cn, Props, WithChildren } from 'packages/utils/cn';

const BaseCard = ({ className, children }: Props<WithChildren>) => (
  <Card className={`bg-background dark:bg-zinc-800`}>
    <CardContent className={cn(`p-4 m-0`, className)}>{children}</CardContent>
  </Card>
);

export default BaseCard;
