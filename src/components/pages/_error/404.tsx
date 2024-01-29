import { SquirrelIcon } from 'lucide-react';
import { H3 } from 'src/components/atoms/typography/h';
import { Button } from 'src/components/ui/button';

const NotFound = () => {
  return (
    <div className="w-full h-96 flex items-center justify-center mt-32">
      <div className="flex flex-col items-center justify-center gap-y-3">
        <SquirrelIcon className="w-20 h-20 stroke-pink-600/50" />
        <H3>Not Found</H3>
        <a href="/">
          <Button className="px-6">Back to Main</Button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
