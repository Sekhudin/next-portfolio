import { ScrollArea } from 'src/components/ui/scroll-area';
import Container from 'src/components/molecules/container/page';
import { HeaderGap } from 'src/components/organisms/header';
import eventHiddenHeader from 'src/utils/event-function/hidden-header';
import { cn, PropsWithChildren } from 'src/utils';

const Layout = ({ children }: Omit<PropsWithChildren, 'className'>) => (
  <ScrollArea
    className={cn(`h-screen w-screen overflow-x-hidden`)}
    type="scroll"
    scrollCaptureY={eventHiddenHeader}>
    <main className="h-screen w-screen overflow-hidden flex flex-col">
      <Container header={<HeaderGap />}>
        <div className="h-44 sm:h-48 w-full" />
        {children}
      </Container>
    </main>
  </ScrollArea>
);

export default Layout;
