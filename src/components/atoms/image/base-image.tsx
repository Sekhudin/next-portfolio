import Image, { type ImageProps, type StaticImageData } from 'next/image';
import { cn } from 'src/utils';

const ImageBase = ({ className, src, alt, ...props }: ImageProps) => (
  <div className={cn(`relative overflow-hidden`, className)}>
    {src && alt && (
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        sizes="width: 700px; heigh: 700px"
        priority
        fill
        {...props}
      />
    )}
  </div>
);

export type { StaticImageData };
export default ImageBase;
