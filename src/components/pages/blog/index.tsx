import HashnodeProvider from 'src/components/organisms/provider/hashnode';
import DescriptionSection from './section/description-section';
import PostsSection from './section/posts-section';
import ProfileSection from './section/profile-section';
import { profileSectionDeps, postSectionDeps } from './@index';

const Blog = () => {
  return (
    <HashnodeProvider>
      <main className="min-h-96 grow flex flex-col gap-y-4">
        <section>
          <DescriptionSection />
        </section>

        <section className="grow flex">
          <PostsSection deps={postSectionDeps} />
        </section>

        <section className="h-fit mt-6">
          <ProfileSection deps={profileSectionDeps} />
        </section>
      </main>
    </HashnodeProvider>
  );
};

export default Blog;
