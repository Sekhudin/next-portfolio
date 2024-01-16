import Image, { type StaticImageData } from 'next/image';
import { cn } from 'src/utils';

type StaticHOC = Parameters<typeof Image>[0];
export default function HOC(v: StaticImageData) {
  if (typeof v === 'string') throw new Error('');
  const NewImage = ({ className, alt, ...props }: Omit<StaticHOC, 'src'>) => (
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
