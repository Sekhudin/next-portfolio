import { Separator } from 'packages/ui/separator';
import { cn, Props, WithChildren } from 'packages/utils/cn';

const PostListSeparator = ({ className, children }: Props<WithChildren>) => (
  <div className={cn(`grow flex`, className)}>
    <Separator className="hidden md:block mr-4 lg:mr-6" orientation="vertical" />
    <div className="grow flex mb-8 lg:mb-12">{children}</div>
  </div>
);

export default PostListSeparator;
