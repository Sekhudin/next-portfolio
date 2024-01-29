import { Loader2Icon } from 'lucide-react';

const AbsoluteLoader = ({ loading }: { loading: boolean }) => (
  <>
    {loading && (
      <div className="absolute max-h-screen inset-0 flex items-center justify-center cursor-not-allowed">
        <Loader2Icon className="w-6 h-6 animate-spin stroke-indigo-700" />
      </div>
    )}
  </>
);

export default AbsoluteLoader;
