'use client';
import { Separator } from 'src/components/ui/separator';
import PostList, { PostlistFallback } from 'src/components/shared/hashnode/post-list';
import type { _SuspenseComponentDI } from 'src/types/dependencies/util';
import { cn, PropsWithClassName, PropsWithChildren, Deps } from 'src/utils';

const WithSeparator = ({ children, className }: PropsWithChildren) => (
  <div className={cn(`grow flex`, className)}>
    <Separator className="hidden md:block mr-4 lg:mr-6" orientation="vertical" />
    <div className="grow flex mb-8 lg:mb-12">{children}</div>
  </div>
);

type Props = PropsWithClassName<{
  deps: Deps<'deps', typeof PostList>['deps'] & {
    SuspenseComponent: _SuspenseComponentDI;
  };
}>;
const PostsSection = ({ className, deps }: Props) => {
  return (
    <deps.SuspenseComponent
      fallback={
        <WithSeparator className={cn(className)}>
          <PostlistFallback className="md:max-w-2xl xl:max-w-3xl" />
        </WithSeparator>
      }>
      <WithSeparator className={cn(className)}>
        <PostList
          className="md:max-w-2xl xl:max-w-3xl"
          page={1}
          pageSize={5}
          deps={{
            LinkComponent: deps.LinkComponent,
            _useQuery: deps._useQuery,
            _useState: deps._useState,
            _service: deps._service,
            _hrefTo: deps._hrefTo,
          }}
        />
      </WithSeparator>
    </deps.SuspenseComponent>
  );
};

export default PostsSection;
