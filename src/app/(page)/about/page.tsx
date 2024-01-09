import type { Metadata } from 'next';
import ProfileImage from 'src/components/molecules/image/about-profile';
import DescriptionSection from 'src/components/organisms/about/description-section';
import ContactAndFollow from 'src/components/organisms/about/contact-and-follow';

export const metadata: Metadata = {
  title: 'About | Sekhudin',
  description: `Explore my story as a web and mobile developer. Proficient in HTML, CSS, and Javascript.
  Mastery of popular frameworks and dedicated to creating exceptional online experiences.`,
};

export default function Page() {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-x-14 gap-y-6">
      <div className="row-span-2 row-start-2 lg:row-span-2 lg:row-start-1">
        <DescriptionSection />
      </div>

      <div className="px-4 lg:px-6">
        <ProfileImage />
      </div>

      <div className="py-10">
        <ContactAndFollow />
      </div>
    </div>
  );
}
