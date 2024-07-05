import { NextLinkButton } from 'packages/ui/next-link';
import CommonNotFound from './common.notfound';

const NotFoundError = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center mt-32">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <CommonNotFound />
        <NextLinkButton href={'/'} className="px-6">
          Back to Main
        </NextLinkButton>
      </div>
    </div>
  );
};

export default NotFoundError;
