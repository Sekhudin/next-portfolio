'use client';
import MeProfile, { MeProfileFallback } from 'src/components/shared/github/me';
import type { _SuspenseComponentDI } from 'src/types/dependencies/util';
import type { PropsWithClassName, Deps } from 'src/utils';

type Props = PropsWithClassName<{
  deps: Deps<'deps', typeof MeProfile>['deps'] & {
    SuspenseComponent: _SuspenseComponentDI;
  };
}>;
const ProfileSection = ({ deps }: Omit<Props, 'className'>) => {
  return (
    <>
      <p
        className="scroll-m-20 text-lg font-semibold tracking-tight
          text-zinc-500 dark:text-zinc-500 mb-2">
        Follow on Github:
      </p>
      <deps.SuspenseComponent fallback={<MeProfileFallback />}>
        <MeProfile deps={{ _useQuery: deps._useQuery, _service: deps._service }} />
      </deps.SuspenseComponent>
    </>
  );
};

export default ProfileSection;
