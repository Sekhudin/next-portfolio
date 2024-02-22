import Image, { type StaticImageData } from 'next/image';
import { cn, OmitParameter, PropsWithClassName } from 'src/utils';

type Props = OmitParameter<typeof Image, ''>;
const ImageBase = ({ className, src, alt, ...props }: Props) => (
  <div className={cn(`relative overflow-hidden`, className)}>
    {src && alt && <Image src={src} alt={alt} className="object-cover" priority fill {...props} />}
  </div>
);

export const NoImage = ({ className }: PropsWithClassName) => (
  <div className={cn('flex items-center justify-center bg-primary/10', className)}>No Image</div>
);
export type { StaticImageData };
export default ImageBase;
