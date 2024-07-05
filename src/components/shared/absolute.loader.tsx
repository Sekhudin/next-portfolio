import { Loader2Icon } from 'lucide-react';
import ConditionalContainer from '../containers/conditional.container';

const AbsoluteLoader = ({ loading }: { loading: boolean }) => (
  <ConditionalContainer isVisible={loading}>
    <div className="absolute max-h-screen inset-0 flex items-center justify-center cursor-not-allowed">
      <Loader2Icon className="w-6 h-6 animate-spin stroke-indigo-700" />
    </div>
  </ConditionalContainer>
);

export default AbsoluteLoader;
