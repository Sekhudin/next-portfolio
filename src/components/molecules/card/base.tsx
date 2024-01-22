import { Card, CardContent } from 'src/components/ui/card';
import { cn, PropsWithChildren } from 'src/utils';

const BaseCard = ({ className, children }: PropsWithChildren) => (
  <Card className={`bg-background dark:bg-zinc-800`}>
    <CardContent className={cn(`p-4 m-0`, className)}>{children}</CardContent>
  </Card>
);

export default BaseCard;
