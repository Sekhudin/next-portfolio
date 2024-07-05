import { Div } from 'components/typography/p';
import FooterContainer from 'components/containers/footer.container';
import FooterNav from 'components/navs/footer.nav';
import { cn, Props } from 'packages/utils/cn';

export default function CommonFooter({ className }: Props) {
  const date = new Date();
  const year = date.getFullYear().toString();
  return (
    <div className={cn(`bg-transparent`, className)}>
      <FooterContainer className="px-10 md:px-0">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-5 md:space-y-0">
          <FooterNav />
          <Div className="flex space-x-0.5 text-sm">
            <span>&copy;</span>
            <span>{year}</span>
            <span className="first-letter:uppercase">sekhudin.</span>
            <span className="first-letter:uppercase">All rights reserved.</span>
          </Div>
        </div>
      </FooterContainer>
    </div>
  );
}
