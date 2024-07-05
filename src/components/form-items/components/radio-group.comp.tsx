import React from 'react';
import {
  RadioGroup as UiRadioGroup,
  RadioGroupItem as UiRadioGroupItem,
} from 'packages/ui/radio-group';
import { Small } from 'components/typography/p';
import { cn } from 'packages/utils/cn';

export type RadioProps = {
  items: string[] | readonly string[];
  radioClassName?: string;
} & React.ComponentPropsWithoutRef<typeof UiRadioGroup>;

const RadioGroup = React.forwardRef<HTMLDivElement, RadioProps>(
  ({ items, value, radioClassName, ...props }, ref) => (
    <UiRadioGroup className={cn(``, radioClassName)} ref={ref} value={value} {...props}>
      {items.map((v, key) => (
        <div key={key} className="flex gap-x-2 items-center">
          <UiRadioGroupItem value={v} aria-label={v} />
          <Small className="first-letter:uppercase font-light">{v}</Small>
        </div>
      ))}
    </UiRadioGroup>
  )
);

RadioGroup.displayName = 'RadioGroup';
export default RadioGroup;
