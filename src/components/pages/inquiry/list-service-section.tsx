import {
  WebDevService,
  MobileDevService,
  BackendDevService,
  HourlyRate,
} from 'src/components/molecules/list/work-service';

const ListServiceSection = () => {
  return (
    <div>
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
