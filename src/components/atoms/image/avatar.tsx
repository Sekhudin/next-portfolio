import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar';
import { avatar } from 'src/components/shared/static-file';
import { cn, PropsWithClassName } from 'src/utils';

export default function MyAvatar({ className }: PropsWithClassName) {
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
