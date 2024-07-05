import { Loader2Icon } from 'lucide-react';
import ConditionalContainer from '../containers/conditional.container';

const FixedLoader = ({ loading }: { loading: boolean }) => (
  <ConditionalContainer isVisible={loading}>
    <div className="fixed inset-0 z-50 flex justify-center cursor-not-allowed">
      <Loader2Icon className="w-6 h-6 animate-spin mt-[40%] stroke-indigo-700" />
    </div>
  </ConditionalContainer>
);

export default FixedLoader;
