import DescriptionSection from './section/description-section';
import SocialMediaSection from './section/social-media-section';

export const Page = () => (
  <main className="w-full max-w-2xl">
    <section>
      <DescriptionSection />
    </section>

    <section className="mt-6">
      <SocialMediaSection />
    </section>
  </main>
);

export default Page;
