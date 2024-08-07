import HOC from 'components/HOCs/image-static.hoc';
import { avatar } from 'packages/public/images';
import { cn, Props } from 'packages/utils/cn';

const ProfileImage = HOC(avatar);
export default function AboutProfile({ className }: Props) {
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
