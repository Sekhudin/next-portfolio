import { Separator } from 'src/components/ui/separator';
import ProfileImage from 'src/components/atoms/image/profile';
import DescriptionSection from './description-section';
import ContactSection from './contact-section';
import FollowSection from './follow-section';

export const About = () => (
  <main className="h-full grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-x-14 gap-y-6">
    <section className="row-span-2 row-start-2 lg:row-span-2 lg:row-start-1">
      <DescriptionSection />
    </section>

    <section className="px-4 lg:px-6">
      <ProfileImage />
    </section>

    <section className="flex flex-col gap-y-12 py-10">
      <FollowSection />
      <Separator />
      <ContactSection />
    </section>
  </main>
);
export default About;
