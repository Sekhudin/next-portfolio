import { Separator } from 'packages/ui/separator';
import * as Contact from 'components/anchors/contact.anchor';
import * as Follow from 'components/anchors/follow.anchor';
import AboutSummary from './components/summaries/about.summary';
import ProfileImage from './components/images/profile.image';

export const About = () => (
  <main className="h-full grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-x-14 gap-y-6">
    <div className="row-span-2 row-start-2 lg:row-span-2 lg:row-start-1">
      <AboutSummary />
    </div>

    <div className="px-4 lg:px-6">
      <ProfileImage />
    </div>

    <div className="flex flex-col gap-y-12 py-10">
      <div className={`flex flex-col space-y-2`}>
        <Follow.Github />
        <Follow.Twitter />
      </div>

      <Separator />

      <div className={`flex flex-col space-y-2`}>
        <Contact.Gmail />
        <Contact.Whatsapp />
      </div>
    </div>
  </main>
);
export default About;
