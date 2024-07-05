import { Small, XSmall, PlainAnchor } from 'components/typography/p';
import ExternalLinkCard from 'components/cards/external-link.card';
import { Separator } from 'packages/ui/separator';
import { cn, Props } from 'packages/utils/cn';
import type { BaseTools } from 'src/types/configs';

export default function HOC(v: BaseTools) {
  const NewTools = ({ className }: Props) => (
    <div className={cn(``, className)}>
      <div className="grid grid-cols-3 place-items-center justify-items-center gap-x-8 mb-4">
        <Separator />
        <h2
          className="w-full font-semibold border-2 bg-zinc-50 dark:bg-zinc-900
          border-dashed text-center rounded-md px-4 py-2">
          {v.title}
        </h2>
        <Separator />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {v.stacks.map((_, key) => (
          <PlainAnchor key={key} href={_.href} className="w-full group">
            <ExternalLinkCard className="flex flex-col gap-y-2 mr-4">
              <Small className="font-medium">{_.display}</Small>
              <XSmall className="font-light">{_.sub}</XSmall>
            </ExternalLinkCard>
          </PlainAnchor>
        ))}
      </div>
    </div>
  );
  return NewTools;
}
