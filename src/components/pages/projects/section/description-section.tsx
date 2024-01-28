import { H1 } from 'src/components/atoms/typography/h';
import { cn, PropsWithClassName } from 'src/utils';

const DescriptionSection = ({ className }: PropsWithClassName) => (
  <div className={cn(``, className)}>
    <H1 className="md:w-10/12 lg:w-9/12">{`Projects.`}</H1>
  </div>
);

export default DescriptionSection;
