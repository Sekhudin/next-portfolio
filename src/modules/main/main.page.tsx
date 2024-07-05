import * as SosMed from 'src/components/anchors/social-media.anchor';
import MainSummary from './components/summaries/main.summary';

const Page = () => (
  <main className="w-full max-w-2xl">
    <div>
      <MainSummary />
    </div>

    <div
      className={`w-fit flex items-center space-x-3 dark:bg-secondary
      dark:border dark:border-zinc-600/50 dark:p-1.5 mt-6 rounded-full`}>
      <SosMed.Github />
      <SosMed.Linkedin />
      <SosMed.Twitter />
      <SosMed.Instagram />
    </div>
  </main>
);

export default Page;
