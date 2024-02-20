import Image, { type ImageProps, type StaticImageData } from 'next/image';
import { cn, OmitParameter } from 'src/utils';

type Props = OmitParameter<typeof Image, ''>;
const ImageBase = ({ className, src, alt, ...props }: Props) => (
  <div className={cn(`relative overflow-hidden`, className)}>
    {src && alt && <Image src={src} alt={alt} className="object-cover" priority fill {...props} />}
  </div>
);

export type { StaticImageData };
export default ImageBase;
