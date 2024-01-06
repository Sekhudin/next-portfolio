import Toggle from 'src/components/molecules/theme/toggle';
import Translate from 'src/components/molecules/translate';
import MyAvatar from 'src/components/molecules/image/avatar';
import MainNavigationBar from 'src/components/organisms/navbar/main';
import { cn, PropsWithClassName } from 'src/utils';

export function Header({ className }: PropsWithClassName) {
  return (
    <header
      className={cn(
        `h-20 fixed top-0 inset-x-0 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-sm px-4`,
        className
      )}>
      <div className="w-full h-full flex items-center justify-center sm:px-8 lg:px-12">
        <div className="w-full max-w-2xl lg:max-w-5xl flex justify-between gap-x-2 lg:gap-x-4">
          <div className="flex items-center justify-start">
            <MyAvatar />
          </div>

          <MainNavigationBar className="grow flex items-center justify-end md:justify-center" />

          <div className="flex items-center justify-end gap-x-2 lg:gap-x-4">
            <Toggle />
            <Translate />
          </div>
        </div>
      </div>
    </header>
  );
}

export function HeaderSpace({ className }: PropsWithClassName) {
  return <div className={cn(`w-full h-20`, className)} />;
}
