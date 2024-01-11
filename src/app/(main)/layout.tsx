import ScrollLayout from 'src/components/organisms/layout/main';

export default function Layout({ children }: React.PropsWithChildren) {
  return <ScrollLayout>{children}</ScrollLayout>;
}
