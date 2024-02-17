import type { CSSProperties } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from 'src/components/ui/avatar';
import { cn, PropsWithClassName } from 'src/utils';
import Str from 'src/utils/string';

type AsyncAvatarProps = PropsWithClassName &
  React.PropsWithoutRef<Omit<Parameters<typeof AvatarImage>[0], 'src'>> & {
    src?: string | null;
    loading?: boolean;
    fallback?: React.ReactNode;
    fallbackStyle?: CSSProperties;
  };

export default function AsyncAvatar({
  className,
  src,
  loading,
  fallback,
  fallbackStyle,
  ...v
}: AsyncAvatarProps) {
  return (
    <Avatar className={cn(`w-14 h-14`, className)}>
      {src && <AvatarImage src={src} alt="avatar-sekhudin" {...v} />}
      <AvatarFallback
        className="dark:bg-indigo-700/20 dark:text-indigo-600 font-semibold"
        style={fallbackStyle}>
        {Str.toFallback(v.alt)}
      </AvatarFallback>
    </Avatar>
  );
}
