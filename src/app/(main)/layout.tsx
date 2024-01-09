import { ScrollArea } from 'src/components/ui/scroll-area';
import Container from 'src/components/atoms/container';
import { HeaderGap } from 'src/components/organisms/header';

export default function Layout({ children, ...props }: React.PropsWithChildren) {
  return (
    <ScrollArea className="h-screen w-screen overflow-x-hidden">
      <main className="h-screen w-screen overflow-hidden flex flex-col">
        <Container header={<HeaderGap />}>{children}</Container>
      </main>
    </ScrollArea>
  );
}
