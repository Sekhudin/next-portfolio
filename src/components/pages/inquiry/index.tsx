import TitleSection from './title-section';
import ListServiceSection from './list-service-section';
import FormSection from './form-section';

const Inquiry = () => {
  return (
    <main className="">
      <section className="mb-10">
        <TitleSection />
      </section>

      <div className="flex flex-col md:flex-row gap-y-10 md:gap-x-8">
        <section className="md:w-[60%] lg:w-[40%]">
          <ListServiceSection />
        </section>

        <section className="md:grow">
          <FormSection />
        </section>
      </div>
    </main>
  );
};

export default Inquiry;
