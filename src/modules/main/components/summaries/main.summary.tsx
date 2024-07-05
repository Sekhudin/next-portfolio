import { H1 } from 'components/typography/h';
import { P, SpanPoint } from 'components/typography/p';
import * as AnchorText from 'components/anchors/text.anchor';

export default function MainSummary() {
  return (
    <>
      <H1 className="lg:max-w-xl">Software Engineer. Imaginator. Freelancer.</H1>
      <P className="w-11/12 md:w-9/12 xl:w-[85%] leading-7">
        {`Hello, I'm Sekhudin. I'm a `}
        <SpanPoint>{'software engineer'}</SpanPoint>
        {' based in Purbalingga, Indonesia. I thoroughly enjoy using '}
        <SpanPoint>{'TypeScript, React, and NodeJS'}</SpanPoint>
        {' to craft tech products.'}
      </P>

      <P>
        {`Moreover, I actively write informative articles on the `}
        <span>
          <AnchorText.Hasnode />
        </span>
        {` platform.`}
      </P>
    </>
  );
}
