import { avatar } from 'src/components/shared/static-file';
import { cn, PropsWithClassName } from 'src/utils';
import HOC from './static-hoc';

const ProfileImage = HOC(avatar);
export default function AboutProfile({ className }: PropsWithClassName) {
  return (
    <ProfileImage
      className={cn(
        `w-72 h-72 lg:w-11/12 lg:h-96 rounded-xl overflow-hidden rotate-3 drop-shadow-lg
        lg:shadow-2xl lg:dark:shadow-indigo-700/50 lg:dark:shadow-2xl`,
        className
      )}
      alt="Sekhudin Profile"
    />
  );
}
