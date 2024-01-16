import { H1 } from 'src/components/atoms/typography/h';
import { P, SpanPoint } from 'src/components/atoms/typography/p';

export default function DescriptionSection() {
  return (
    <div className="flex flex-col items-center">
      <H1>Tools that I use</H1>
      <P className="text-center">
        I utilize a comprehensive toolkit that spans from development and thorough testing to
        seamless deployment, ensuring a smooth and efficient project journey.
      </P>
    </div>
  );
}
