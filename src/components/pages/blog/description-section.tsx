import { MinusIcon } from 'lucide-react';
import { H1 } from 'src/components/atoms/typography/h';
import { P, SpanPoint } from 'src/components/atoms/typography/p';
import { cn, PropsWithClassName } from 'src/utils';

const DescriptionSection = ({ className }: PropsWithClassName) => (
  <div className={cn(``, className)}>
    <H1 className="drop-shadow-lg md:w-10/12">
      {`Writing on software design, Web, and building products.`}
    </H1>
    <P className="md:w-10/12">
      <SpanPoint>{`Code Chronicles:`}</SpanPoint>
      {` My Journey through Programming, Product Development, and Life. `}
      <span className="italic text-sm flex space-x-1 items-center mt-2 md:mt-4">
        <MinusIcon />
        {`Brief and Lengthy Musings Unveiled Over Time`}
      </span>
    </P>
  </div>
);

export default DescriptionSection;
