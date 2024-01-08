import { ScrollArea } from 'src/components/ui/scroll-area';
import Container from 'src/components/atoms/container';
import { Header, HeaderSpace } from 'src/components/organisms/header';

export default function Layout({ children, ...props }: React.PropsWithChildren) {
  return (
    <>
      <Header className="z-10" />
      <ScrollArea className="h-screen w-screen overflow-x-hidden">
        <main className="min-h-screen h-fit flex flex-col">
          <HeaderSpace />
          <Container>{children}</Container>
        </main>
      </ScrollArea>
    </>
  );
}
