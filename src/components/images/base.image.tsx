import React from 'react';
import Image, { ImageProps } from 'next/image';
import ConditionalContainer from 'components/containers/conditional.container';
import { cn, Props, Children } from 'packages/utils/cn';

type ImageBaseProps = Omit<ImageProps, 'src' | 'alt'> & {
  fallback?: Children;
  src?: ImageProps['src'] | null;
  alt?: ImageProps['alt'] | null;
};

const NoImage = ({ className }: Props) => (
  <div className={cn('flex items-center justify-center bg-primary/10', className)}>No Image</div>
);

const ImageBase = ({
  className,
  src,
  alt,
  fallback = <NoImage className={className} />,
  ...props
}: ImageBaseProps) => (
  <ConditionalContainer isVisible={src} fallback={fallback}>
    <div className={cn(`relative overflow-hidden`, className)}>
      <Image
        src={src || ''}
        alt={alt || 'image'}
        className="object-cover"
        priority
        fill
        sizes="80"
        {...props}
      />
    </div>
  </ConditionalContainer>
);

export default ImageBase;
