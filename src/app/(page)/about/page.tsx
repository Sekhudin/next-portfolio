import type { Metadata } from 'next';
import { Separator } from 'src/components/ui/separator';
import { Div, SpanPoint, P } from 'src/components/atoms/typography/p';
import { H1 } from 'src/components/atoms/typography/h';
import ProfileAvatar from 'src/components/molecules/image/about-profile';
import FollowGithub from 'src/components/molecules/anchor/follow-github';
import FollowTwitter from 'src/components/molecules/anchor/follow-twitter';
import ContactGmail from 'src/components/molecules/anchor/contact-gmail';
import ContactWhatsapp from 'src/components/molecules/anchor/contact-whatsapp';

export const metadata: Metadata = {
  title: 'About | Sekhudin',
  description: `Explore my story as a web and mobile developer. Proficient in HTML, CSS, and Javascript.
  Mastery of popular frameworks and dedicated to creating exceptional online experiences.`,
};

export default function Page() {
  return (
    <div className="h-full flex flex-col-reverse lg:flex-row gap-x-12">
      <Div className="w-full lg:w-6/12 2xl:w-7/12 py-6">
        <H1 className="w-full drop-shadow-lg">{`Hello I'am Sekhudin`}</H1>

        <P className="w-11/12 md:w-8/12 lg:w-10/12">
          {`A software engineer with `}
          <SpanPoint>{`1 year`}</SpanPoint>
          {` of `}
          <SpanPoint>{`freelance`}</SpanPoint>
          {` experience in `}
          <SpanPoint>{`software development`}</SpanPoint>
          {` and a total of `}
          <SpanPoint>{`3 years`}</SpanPoint>
          {` of `}
          <SpanPoint>{`personal programming experience.`}</SpanPoint>
        </P>

        <P className="w-11/12 md:w-9/12 lg:w-10/12">
          {`I hold a `}
          <SpanPoint>{`Bachelor's degree`}</SpanPoint>
          {` in `}
          <SpanPoint>{`Computer Science.`}</SpanPoint>
          {` I am passionate about continually honing my skills and expanding
          my knowledge in the ever-evolving field of technology.`}
        </P>

        <P className="w-11/12 md:w-8/12 lg:w-19/12">
          {`With a `}
          <SpanPoint>{`love for coding`}</SpanPoint>
          {`, I'm always on the lookout for opportunities
          to deliver innovative and high-quality solutions. `}
          <SpanPoint>{`Let's collaborate`}</SpanPoint>
          {` and create something extraordinary!`}
        </P>
      </Div>

      <div className="grow">
        <div className="rounded-lg mx-4 mb-12">
          <ProfileAvatar className="lg:w-11/12 lg:h-96" />
        </div>

        <div className="">
          <div className="flex flex-col space-y-2">
            <FollowGithub />
            <FollowTwitter />
          </div>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <Separator />
            <ContactGmail />
            <ContactWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}
