import * as ListServices from 'components/lists/work-service.list';
import InquirySummary from './components/summaries/inquiry.summary';
import InquiryForm from './components/forms/inquiry.form';

const Inquiry = () => {
  return (
    <main>
      <InquirySummary className="mb-10" />

      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-8">
        <div className="md:w-[40%]">
          <div className="mb-4">
            <ListServices.HourlyRate />
          </div>

          <ListServices.WebDev className="mb-4" />
          <ListServices.MobileDev className="mb-4" />
          <ListServices.BackendDev />
        </div>

        <div className="md:w-[60%]">
          <div className="w-full">
            <InquiryForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inquiry;
