import {
  WebDevService,
  MobileDevService,
  BackendDevService,
  HourlyRate,
} from 'src/components/molecules/list/work-service';
import { cn, PropsWithClassName } from 'src/utils';

const ListServiceSection = ({ className }: PropsWithClassName) => {
  return (
    <div className={cn(``, className)}>
      <div className="mb-4">
        <HourlyRate />
      </div>

      <WebDevService className="mb-4" />
      <MobileDevService className="mb-4" />
      <BackendDevService />
    </div>
  );
};

export default ListServiceSection;
