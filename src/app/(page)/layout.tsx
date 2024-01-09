import { ScrollArea } from 'src/components/ui/scroll-area';
import Container, { DynamicGapTop, ContainerGapBottom } from 'src/components/atoms/container';
import { HeaderGap } from 'src/components/organisms/header';
import Footer from 'src/components/organisms/footer';

export default function Layout({ children, ...props }: React.PropsWithChildren) {
  return (
    <ScrollArea type="scroll" className="h-screen w-screen overflow-x-hidden">
      <main className="min-h-screen h-fit flex flex-col">
        <HeaderGap />
        <Container header={<DynamicGapTop />} footer={<ContainerGapBottom />}>
          {children}
        </Container>
        <Footer />
      </main>
    </ScrollArea>
  );
}
