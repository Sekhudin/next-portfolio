import DescriptionSection from './section/description-section';
import ToolsSection from './section/tools-section';

const Tools = () => {
  return (
    <main>
      <section>
        <DescriptionSection />
      </section>

      <section className='mt-10'>
        <ToolsSection />
      </section>
    </main>
  );
};

export default Tools;
