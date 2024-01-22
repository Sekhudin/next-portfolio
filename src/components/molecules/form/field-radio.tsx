import React from 'react';
import { RadioGroup, RadioGroupItem } from 'src/components/ui/radio-group';
import { Small } from 'src/components/atoms/typography/p';
import { cn } from 'src/utils';

export type RadioProps = {
  items: string[] | readonly string[];
  radioClassName?: string;
} & React.ComponentPropsWithoutRef<typeof RadioGroup>;

const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ items, value, radioClassName, ...props }, ref) => (
    <RadioGroup className={cn(``, radioClassName)} ref={ref} value={value} {...props}>
      {items.map((v, key) => (
        <div key={key} className="flex gap-x-2 items-center">
          <RadioGroupItem value={v} aria-label={v} />
          <Small className="first-letter:uppercase font-light">
            {v}
          </Small>
        </div>
      ))}
    </RadioGroup>
  )
);

Radio.displayName = 'Radio';
export default Radio;
