import { Div } from 'src/components/atoms/typography/p';
import Container from 'src/components/molecules/container/footer';
import Navigation from 'src/components/molecules/navigation/navigation-footer';
import { cn, PropsWithClassName } from 'src/utils';

export default function Footer({ className }: PropsWithClassName) {
  const date = new Date();
  const year = date.getFullYear().toString();
  return (
    <div className={cn(`bg-transparent`, className)}>
      <Container className="px-10 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-5 md:space-y-0">
          <Navigation />
          <Div className="flex space-x-0.5 text-sm">
            <span>&copy;</span>
            <span>{year}</span>
            <span className="first-letter:uppercase">sekhudin.</span>
            <span className="first-letter:uppercase">All rights reserved.</span>
          </Div>
        </div>
      </Container>
    </div>
  );
}
