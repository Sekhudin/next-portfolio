import { LanguasgeList, DevtoolsList, FrameworkList } from 'src/components/molecules/list/tools';
import { cn, PropsWithClassName } from 'src/utils';

export default function ToolsSection({ className }: PropsWithClassName) {
  return (
    <div className={cn(``, className)}>
      <LanguasgeList className="mt-12" />
      <FrameworkList className="mt-12" />
      <DevtoolsList className="mt-12" />
    </div>
  );
}
