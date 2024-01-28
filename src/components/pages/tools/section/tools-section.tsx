import { LanguasgeList, DevtoolsList, FrameworkList } from 'src/components/molecules/list/tools';

export default function ToolsSection() {
  return (
    <div>
      <LanguasgeList className="mt-12" />
      <FrameworkList className="mt-12" />
      <DevtoolsList className="mt-12" />
    </div>
  );
}
