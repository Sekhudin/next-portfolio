import { MinusIcon } from 'lucide-react';
import { H1 } from 'components/typography/h';
import { P, SpanPoint } from 'components/typography/p';
import { cn, Props } from 'packages/utils/cn';

const BlogSummary = ({ className }: Props) => (
  <div className={cn(``, className)}>
    <H1 className="md:w-10/12 lg:w-9/12">{`Writing on software design and building products.`}</H1>
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

export default BlogSummary;
