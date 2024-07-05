import { Avatar, AvatarImage, AvatarFallback } from 'packages/ui/avatar';
import { avatar } from 'packages/public/images';
import { cn, Props } from 'packages/utils/cn';

export default function MyAvatar({ className }: Props) {
  return (
    <Avatar className={cn(`w-14 h-14`, className)}>
      <AvatarImage
        src={avatar.src}
        height={avatar.height}
        width={avatar.width}
        alt="avatar-sekhudin"
      />
      <AvatarFallback className="dark:bg-indigo-700/20 dark:text-indigo-600 font-semibold">
        SE
      </AvatarFallback>
    </Avatar>
  );
}
