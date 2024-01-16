import { H1 } from 'src/components/atoms/typography/h';
import { cn, PropsWithClassName } from 'src/utils';

const TitleSection = ({ className }: PropsWithClassName) => (
  <div className={cn(`max-w-[90%] md:max-w-[80%] 2xl:max-w-[70%]`, className)}>
    <H1>Available for front-end projects and other.</H1>
  </div>
);

export default TitleSection;
