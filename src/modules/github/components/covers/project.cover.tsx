'use client';
import React from 'react';
import { Small } from 'components/typography/p';
import { Avatar, AvatarImage, AvatarFallback } from 'packages/ui/avatar';
import { Skeleton, SkeletonParagraph } from 'packages/ui/skeleton';
import { cn, Children } from 'packages/utils/cn';
import ConditionalContainer from 'src/components/containers/conditional.container';

type CoverImageProps = React.ComponentPropsWithRef<typeof AvatarImage> & {
  fallback?: Children;
  description?: string;
};

const ProjectCover = ({ className, description, fallback = null, ...props }: CoverImageProps) => {
  const [loading, setLoading] = React.useState(true);
  const [loaded, setLoaded] = React.useState(false);

  return (
    <React.Fragment>
      <ConditionalContainer isVisible={loading}>
        <Skeleton className={cn('z-10', className)} />
        <SkeletonParagraph
          className="font-light dark:font-extralight mt-2 w-10/12"
          size={'sm'}
          n={1}
          diffLast
        />
      </ConditionalContainer>

      <Avatar className={cn('relative h-fit w-full rounded-md border-red-600')}>
        <AvatarImage
          className={cn('object-cover aspect-auto', className)}
          width={500}
          height={500}
          onLoadingStatusChange={(status) => {
            if (status === 'loaded' || status === 'error') {
              setLoading(false);
            }

            if (status === 'loaded') {
              setLoaded(true);
            }
          }}
          crossOrigin="anonymous"
          {...props}
        />

        <AvatarFallback className="w-fit rounded-none h-fit bg-inherit">
          <ConditionalContainer isVisible={!loading}>{fallback}</ConditionalContainer>
        </AvatarFallback>
      </Avatar>

      <ConditionalContainer isVisible={!loading && loaded}>
        <Small className="font-light dark:font-extralight first-letter:uppercase text-wrap leading-5 mt-2">
          {description}
        </Small>
      </ConditionalContainer>
    </React.Fragment>
  );
};

export default ProjectCover;
