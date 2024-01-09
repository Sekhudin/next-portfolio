import { H1 } from 'src/components/atoms/typography/h';
import { P, SpanPoint } from 'src/components/atoms/typography/p';
import HashnodeLink from 'src/components/molecules/anchor/hashnode';
import SocialMediaLinks from 'src/components/molecules/anchor/social-media';

export default function Home() {
  return (
    <>
      <div className="h-44 sm:h-48 w-full" />
      <div className="w-full max-w-2xl">
        <H1 className="drop-shadow-lg max-w-md lg:max-w-xl">Software Engineer. Freelancer.</H1>
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

// Hello, I'm Sekhudin, a software engineer with 1 year of freelance experience in software development and a total of 3 years of personal programming experience. I hold a Bachelor's degree in Computer Science. I am passionate about continually honing my skills and expanding my knowledge in the ever-evolving field of technology. With a love for coding, I'm always on the lookout for opportunities to deliver innovative and high-quality solutions. Let's collaborate and create something extraordinary!

// id
// Halo, saya Sekhudin, seorang insinyur perangkat lunak. Saya memiliki pengalaman freelance di bidang pengembangan software selama 1 tahun, dan total pengalaman pribadi dalam pemrograman selama 3 tahun. Saya adalah lulusan S1 Informatika yang bersemangat untuk terus mengembangkan keterampilan dan pengetahuan saya di dunia teknologi. Dengan kecintaan saya pada pemrograman, saya selalu mencari peluang untuk menghadirkan solusi inovatif dan berkualitas. Mari berkolaborasi dan ciptakan sesuatu yang luar biasa!
