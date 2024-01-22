import { H1 } from 'src/components/atoms/typography/h';
import { P, SpanPoint } from 'src/components/atoms/typography/p';
import { AnchorHasnode } from 'src/components/molecules/anchor/anchor';
import { cn, PropsWithClassName } from 'src/utils';

export default function DescriptionSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(``, className)}>
      <H1 className="drop-shadow-lg lg:max-w-xl">Software Engineer. Imaginator. Freelancer.</H1>
      <P className="w-11/12 md:w-9/12 leading-7">
        {`Hello, I'm Sekhudin. I'm a `}
        <SpanPoint>{'software engineer'}</SpanPoint>
        {' based in Purbalingga, Indonesia. I thoroughly enjoy using '}
        <SpanPoint>{'TypeScript, React, and Node'}</SpanPoint>
        {' to craft tech products.'}
      </P>

      <P>
        {`Moreover, I actively write informative articles on the `}
        <span>
          <AnchorHasnode />
        </span>
        {` platform.`}
      </P>
    </div>
  );
}
