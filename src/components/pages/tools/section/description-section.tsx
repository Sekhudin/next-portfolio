import { H1 } from 'src/components/atoms/typography/h';
import { P } from 'src/components/atoms/typography/p';
import { cn, PropsWithClassName } from 'src/utils';

export default function DescriptionSection({ className }: PropsWithClassName) {
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
