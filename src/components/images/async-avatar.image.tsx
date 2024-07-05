import type { CSSProperties } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from 'packages/ui/avatar';
import { cn, Props } from 'packages/utils/cn';
import Str from 'packages/utils/string';

type AsyncAvatarProps = Props &
  React.PropsWithoutRef<Omit<Parameters<typeof AvatarImage>[0], 'src' | 'alt'>> & {
    src?: string | null;
    loading?: boolean;
    fallback?: React.ReactNode;
    fallbackStyle?: CSSProperties;
    alt?: string | null;
  };

export default function AsyncAvatar({
  className,
  src,
  loading,
  fallback,
  fallbackStyle,
  alt,
  ...v
}: AsyncAvatarProps) {
  return (
    <Avatar className={cn(`w-14 h-14`, className)}>
      {src && <AvatarImage src={src} alt="avatar-sekhudin" {...v} />}
      <AvatarFallback
        className="dark:bg-indigo-700/20 dark:text-indigo-600 font-semibold"
        style={fallbackStyle}>
        {Str(alt).getFirstCharacters(2)}
      </AvatarFallback>
    </Avatar>
  );
}
