import { ExternalLink } from 'lucide-react';
import ICON from 'components/HOCs/icon.hoc';
import { Card, CardContent } from 'packages/ui/card';
import { cn, Props, WithChildren } from 'packages/utils/cn';

const ExternalLinkIcon = ICON(ExternalLink);
const ExternalLinkCard = ({ className, children }: Props<WithChildren>) => (
  <Card
    className={`bg-background dark:bg-secondary/50 border dark:border-zinc-600/50 shadow-none
    group-hover:border-zinc-500 group-hover:dark:border-indigo-700 duration-150 delay-100`}>
    <CardContent className={cn(`relative flex items-center p-4 m-0`)}>
      <div className={cn(``, className)}>{children}</div>
      <span
        className="absolute top-2 right-2 opacity-0
        group-hover:opacity-100 duration-150 delay-100">
        <ExternalLinkIcon className="h-5 w-5" />
      </span>
    </CardContent>
  </Card>
);

export default ExternalLinkCard;
