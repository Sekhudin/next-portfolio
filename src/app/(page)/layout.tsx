import ScrollLayout from 'src/components/organisms/layout/page';

export default function Layout({ children }: React.PropsWithChildren) {
  return <ScrollLayout>{children}</ScrollLayout>;
}
