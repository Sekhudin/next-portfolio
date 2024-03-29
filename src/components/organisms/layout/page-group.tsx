import { ScrollArea } from 'src/components/ui/scroll-area';
import Container, {
  DynamicGapTop,
  ContainerGapBottom,
} from 'src/components/molecules/container/page';
import { HeaderGap } from 'src/components/organisms/header';
import Footer from 'src/components/organisms/footer';
import eventHiddenHeader from 'src/utils/event-function/hidden-header';
import { cn, PropsWithChildren } from 'src/utils';

const Layout = ({ children }: Omit<PropsWithChildren, 'className'>) => (
  <ScrollArea
    className={cn(`h-screen w-screen overflow-x-hidden`)}
    type="scroll"
    scrollCaptureY={eventHiddenHeader}>
    <main className="min-h-screen h-fit flex flex-col">
      <HeaderGap />
      <Container header={<DynamicGapTop />} footer={<ContainerGapBottom />}>
        {children}
      </Container>
      <Footer />
    </main>
  </ScrollArea>
);

export default Layout;
