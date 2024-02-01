import React from 'react';
import GithubProvider from 'src/components/organisms/provider/github';
import MeProfile, { MeProfileFallback } from 'src/components/shared/github/me';
import DescriptionSection from './section/description-section';
import ProjectSection from './section/projects-section';
import { githubQueryMeDeps, githubQueryReposDeps } from './@section-deps';

const Projects = () => {
  return (
    <GithubProvider>
      <main>
        <section className="mb-8 md:mb-14">
          <DescriptionSection />
        </section>

        <section>
          <ProjectSection deps={githubQueryReposDeps} />
        </section>

        <section className="h-fit mt-6">
          <p
            className="scroll-m-20 text-lg font-semibold tracking-tight
          text-zinc-500 dark:text-zinc-500 mb-2">
            Follow on Github:
          </p>
          <React.Suspense fallback={<MeProfileFallback />}>
            <MeProfile deps={githubQueryMeDeps} />
          </React.Suspense>
        </section>
      </main>
    </GithubProvider>
  );
};

export default Projects;
