import Image from 'next/image';
import { avatar } from 'src/components/shared/static-file';
import { cn, PropsWithClassName } from 'src/utils';

export default function AboutProfile({ className }: PropsWithClassName) {
  return (
    <div
      className={cn(
        `relative w-72 h-72 rounded-xl overflow-hidden rotate-6 drop-shadow-lg
        lg:shadow-2xl lg:dark:shadow-indigo-700/50 lg:dark:shadow-2xl`,
        className
      )}>
      <Image
        src={avatar}
        alt="Sekhudin"
        className="object-cover"
        sizes="width: 700px; heigh: 700px"
        priority
        fill
      />
    </div>
  );
}
