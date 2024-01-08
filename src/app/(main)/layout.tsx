import { ScrollArea } from 'src/components/ui/scroll-area';
import { Header, HeaderSpace } from 'src/components/organisms/header';

export default function Layout({ children, ...props }: React.PropsWithChildren) {
  return (
    <>
      <Header className="z-10" />
      <ScrollArea className="h-screen w-screen overflow-x-hidden">
        <main className="min-h-screen h-fit flex flex-col">
          <HeaderSpace />
          <div className="grow min-h-fit flex justify-center px-4 sm:px-16 lg:px-28">
            <div className="w-full max-w-2xl lg:max-w-5xl">{children}</div>
          </div>
        </main>
      </ScrollArea>
    </>
  );
}
