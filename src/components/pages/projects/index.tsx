import React from 'react';
import { H4 } from 'src/components/atoms/typography/h';
import GithubProvider from 'src/components/shared/provider/github';
import MeProfile, { MeProfileFallback } from 'src/components/shared/github/me';
import DescriptionSection from './section/description-section';
import ProjectSection from './section/projects-section';

const Projects = () => {
  return (
    <GithubProvider>
      <main>
        <section className="mb-8 md:mb-14">
          <DescriptionSection />
        </section>

        <section>
          <ProjectSection />
        </section>

        <section className="h-fit mt-6">
          <H4 className="mb-2 text-zinc-500 dark:text-zinc-500">Follow on Github:</H4>
          <React.Suspense fallback={<MeProfileFallback />}>
            <MeProfile />
          </React.Suspense>
        </section>
      </main>
    </GithubProvider>
  );
};

export default Projects;
