import { ExternalLink } from 'lucide-react';
import { Separator } from 'src/components/ui/separator';
import ICON from 'src/components/atoms/hoc/icon';
import { PlainAnchor, Div } from 'src/components/atoms/typography/p';
import { Card, CardContent } from 'src/components/ui/card';
import { BaseTools } from 'src/config/types';
import { cn, PropsWithClassName } from 'src/utils';

const ExternalLinkIcon = ICON(ExternalLink);
export default function HOC(v: BaseTools) {
  const NewTools = ({ className }: PropsWithClassName) => (
    <div className={cn(``, className)}>
      <Div className="grid grid-cols-3 place-items-center justify-items-center gap-x-8 mb-4">
        <Separator />
        <h2
          className="w-full text-sm font-semibold border-2 bg-zinc-50 dark:bg-zinc-900
          border-dashed text-center rounded-md px-4 py-2">
          {v.title}
        </h2>
        <Separator />
      </Div>

      <Div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {v.stacks.map((_, key) => (
          <PlainAnchor key={key} className="w-full group">
            <Card
              className={`bg-background dark:bg-zinc-800 border dark:border-zinc-600/50
            group-hover:border-zinc-700 group-hover:dark:border-indigo-700`}>
              <CardContent className="relative flex items-center p-4 m-0">
                <Div className="flex flex-col gap-y-2 mr-4">
                  <span className="text-sm font-semibold">{_.display}</span>
                  <span className="text-xs font-extralight">{_.sub}</span>
                </Div>
                <span className="absolute top-2 right-2 hidden group-hover:block">
                  <ExternalLinkIcon className="h-5 w-5" />
                </span>
              </CardContent>
            </Card>
          </PlainAnchor>
        ))}
      </Div>
    </div>
  );
  return NewTools;
}
