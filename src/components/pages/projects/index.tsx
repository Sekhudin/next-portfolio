import GithubProvider from 'src/components/organisms/provider/github';
import DescriptionSection from './section/description-section';
import ProjectSection from './section/projects-section';
import ProfileSection from './section/profile-section';
import { projectSectionDeps, profileSectionDeps } from './@index';

const Projects = () => {
  return (
    <GithubProvider>
      <main>
        <section className="mb-8 md:mb-14">
          <DescriptionSection />
        </section>

        <section>
          <ProjectSection deps={projectSectionDeps} />
        </section>

        <section className="h-fit mt-6">
          <ProfileSection deps={profileSectionDeps} />
        </section>
      </main>
    </GithubProvider>
  );
};

export default Projects;
