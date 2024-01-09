import { H1 } from 'src/components/atoms/typography/h';
import { P, SpanPoint } from 'src/components/atoms/typography/p';
import HashnodeLink from 'src/components/molecules/anchor/hashnode';
import SocialMediaLinks from 'src/components/molecules/anchor/social-media';

export default function Home() {
  return (
    <>
      <div className="h-44 sm:h-48 w-full" />
      <div className="w-full max-w-2xl">
        <H1 className="drop-shadow-lg lg:max-w-xl">Software Engineer. Imaginator. Freelancer.</H1>
        <P className="w-11/12 md:w-9/12">
          {`Hello, I'm Sekhudin. I'm a `}
          <SpanPoint>{'software engineer'}</SpanPoint>
          {' based in Purbalingga, Indonesia. I thoroughly enjoy using '}
          <SpanPoint>{'TypeScript, React, and Node'}</SpanPoint>
          {' to craft tech products.'}
        </P>

        <P>
          {`Moreover, I actively write informative articles on the `}
          <span>
            <HashnodeLink />
          </span>
          {` platform.`}
        </P>

        <div className="mt-6">
          <SocialMediaLinks />
        </div>
      </div>
    </>
  );
}
