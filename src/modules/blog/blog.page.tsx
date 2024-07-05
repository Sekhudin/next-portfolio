import SeriesButton from 'modules/hashnode/components/buttons/series.button';
import MyProfile from 'modules/hashnode/components/profiles/my.profile';
import PostsList from 'modules/hashnode/components/lists/posts.list';
import BlogSummary from './components/summaries/blog.summary';
import PostListSeparator from './components/separators/post-list.separator';

const Blog = () => {
  return (
    <main className="min-h-96 grow flex flex-col gap-y-4">
      <BlogSummary />
      <div className="grow flex">
        <PostListSeparator>
          <div className="grow w-full">
            <SeriesButton className="my-6">Series</SeriesButton>
            <PostsList page={1} pageSize={5} nSkeleton={4} />
          </div>
        </PostListSeparator>
      </div>

      <div className="h-fit mt-6">
        <p
          className="scroll-m-20 text-lg font-semibold tracking-tight
          text-zinc-500 dark:text-zinc-500 mb-2">
          Word Artisan:
        </p>
        <MyProfile />
      </div>
    </main>
  );
};

export default Blog;
