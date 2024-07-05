import MyProfile from 'modules/github/components/profiles/my.profile';
import RepositoryList from 'modules/github/components/lists/repository.list';
import ProjectsSummary from './components/summaries/projects.summary';

const Projects = () => {
  return (
    <main>
      <ProjectsSummary className="mb-8 md:mb-14" />
      <div>
        <RepositoryList pageSize={5} nSkeleton={5} />
      </div>
      <div className="h-fit mt-6">
        <p
          className="scroll-m-20 text-lg font-semibold tracking-tight
          text-zinc-500 dark:text-zinc-500 mb-2">
          Follow on Github:
        </p>
        <MyProfile />
      </div>
    </main>
  );
};

export default Projects;
