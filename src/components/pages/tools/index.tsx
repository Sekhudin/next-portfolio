import DescriptionSection from './description-section';
import ToolsSection from './tools-section';

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
