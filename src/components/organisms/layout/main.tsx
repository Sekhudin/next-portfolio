import { ScrollArea } from 'src/components/ui/scroll-area';
import Container from 'src/components/atoms/container';
import { HeaderGap } from 'src/components/organisms/header';
import { cn, PropsWithChildren } from 'src/utils';

export default function Layout({ children, className }: PropsWithChildren) {
  return (
    <ScrollArea type="scroll" className={cn(`h-screen w-screen overflow-x-hidden`, className)}>
      <main className="h-screen w-screen overflow-hidden flex flex-col">
        <Container header={<HeaderGap />}>
          <div className="h-44 sm:h-48 w-full" />
          {children}
        </Container>
      </main>
    </ScrollArea>
  );
}
