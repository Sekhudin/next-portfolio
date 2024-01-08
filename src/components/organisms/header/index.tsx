import Toggle from 'src/components/molecules/theme/toggle';
import Translate from 'src/components/molecules/translate';
import AvatarMain from 'src/components/molecules/link/avatar-main';
import NavigationMain from 'src/components/molecules/link/navigation-main';
import { cn, PropsWithClassName } from 'src/utils';

export function Header({ className }: PropsWithClassName) {
  return (
    <header
      className={cn(
        `h-16 sm:h-[70px] fixed top-0 inset-x-0 bg-white/20 dark:bg-zinc-900/20 backdrop-blur-sm`,
        className
      )}>
      <div className="w-full h-full flex items-center justify-center px-4 sm:px-16 lg:px-28">
        <div className="w-full max-w-2xl lg:max-w-5xl flex justify-between space-x-2 lg:space-x-4">
          <div className="flex items-center justify-start">
            <AvatarMain
              className="h-10 w-10 sm:h-12 sm:w-12"
              mainClassName="fixed top-32 h-20 w-20 sm:h-24 sm:w-24"
            />
          </div>

          <NavigationMain
            className="grow flex items-end justify-end md:justify-center"
            cellularClassName="px-2.5 py-[6px] sm:px-4 sm:py-2.5"
          />

          <div className="flex items-end justify-end space-x-2 lg:space-x-4">
            <Toggle className="px-1.5 py-1.5 sm:px-4 sm:py-2" />
            <Translate className="p-1 sm:p-2" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function HeaderSpace({ className }: PropsWithClassName) {
  return <div className={cn(`w-full h-16 sm:h-[70px]`, className)} />;
}
