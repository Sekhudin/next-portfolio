import Image, { type StaticImageData, type ImageProps } from 'next/image';
import { cn } from 'packages/utils/cn';

export default function HOC(v: StaticImageData) {
  if (typeof v === 'string') throw new Error('');
  const NewImage = ({ className, alt, ...props }: Omit<ImageProps, 'src'>) => (
    <div className={cn(`relative`, className)}>
      <Image
        src={v}
        alt={alt}
        className="object-cover"
        sizes="width: 700px; heigh: 700px"
        placeholder="blur"
        blurDataURL={v.blurDataURL}
        priority
        fill
        {...props}
      />
    </div>
  );
  return NewImage;
}
