import ToolsSummary from './components/summaries/tools.summary';
import * as ListTools from 'components/lists/tools.list';

const Tools = () => {
  return (
    <main>
      <ToolsSummary />

      <div className={`mt-10`}>
        <ListTools.Languages className="mt-12" />
        <ListTools.Frameworks className="mt-12" />
        <ListTools.Devtools className="mt-12" />
      </div>
    </main>
  );
};

export default Tools;
