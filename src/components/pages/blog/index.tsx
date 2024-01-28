import React from 'react';
import { H4 } from 'src/components/atoms/typography/h';
import HashnodeProvider from 'src/components/shared/provider/hashnode';
import MeProfile, { MeProfileFallback } from 'src/components/shared/hashnode/me';
import DescriptionSection from './section/description-section';
import PostsSection from './section/posts-section';

const Blog = () => {
  return (
    <HashnodeProvider>
      <main className="min-h-96 grow flex flex-col gap-y-4">
        <section>
          <DescriptionSection />
        </section>

        <section className="grow flex">
          <PostsSection />
        </section>

        <section className="h-fit mt-6">
          <H4 className="mb-2 text-zinc-500 dark:text-zinc-500">Word Artisan:</H4>
          <React.Suspense fallback={<MeProfileFallback />}>
            <MeProfile />
          </React.Suspense>
        </section>
      </main>
    </HashnodeProvider>
  );
};

export default Blog;
