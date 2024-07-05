import ThemeToggle from 'components/toggles/theme.toggle';
import TranslateToggle from 'components/toggles/translate.toggle';
import MyAvatarLink from 'components/links/my-avatar.link';
import MainNav from 'components/navs/main.nav';
import { cn, Props } from 'packages/utils/cn';

export default function CommonHeader({ className }: Props) {
  return (
    <header
      id="main-header"
      className={cn(
        `h-16 sm:h-[70px] fixed top-0 inset-x-0 z-10 bg-transparent duration-300 transition-all`,
        className
      )}>
      <div className="w-full h-full flex items-center justify-center px-4 sm:px-16 lg:px-28">
        <div className="w-full max-w-2xl lg:max-w-5xl flex justify-between space-x-2 lg:space-x-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-start">
            <MyAvatarLink
              className="h-10 w-10 sm:h-12 sm:w-12"
              mainClassName="fixed top-32 h-20 w-20 sm:h-24 sm:w-24 text-4xl"
            />
          </div>

          <MainNav
            className="grow flex items-end justify-end md:justify-center"
            cellularClassName="px-2.5 py-[6px] sm:px-4 sm:py-2.5"
          />

          <div className="flex items-end justify-end space-x-2 lg:space-x-4">
            <ThemeToggle className="px-1.5 py-1.5 sm:px-4 sm:py-2" />
            <TranslateToggle className="p-1 sm:p-2" />
          </div>
        </div>
      </div>
    </header>
  );
}

export function GapCommonHeader({ className }: Props) {
  return <div className={cn(`w-full h-16 sm:h-[70px]`, className)} />;
}
