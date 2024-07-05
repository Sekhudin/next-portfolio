import { H1 } from 'components/typography/h';
import { P } from 'components/typography/p';
import { cn, Props } from 'packages/utils/cn';

export default function ToolsSummary({ className }: Props) {
  return (
    <div className={cn(`flex flex-col items-center`, className)}>
      <H1>Tools that I use</H1>
      <P className="text-center">
        I utilize a comprehensive toolkit that spans from development and thorough testing to
        seamless deployment, ensuring a smooth and efficient project journey.
      </P>
    </div>
  );
}
