'use client';
import { ScrollArea } from 'packages/ui/scroll-area';
import PageContainer, {
  GapContainerBottom,
  GapDynamicTop,
} from 'components/containers/page.container';
import type { NextLayoutProps} from 'packages/utils/cn';
import Event from 'packages/utils/event';
import { GapCommonHeader } from './common.header';
import CommonFooter from './common.footer';

const PageGroupLayout = ({ children }: NextLayoutProps) => (
  <ScrollArea
    className={`h-screen w-screen overflow-x-hidden`}
    type="scroll"
    scrollCaptureY={Event.hideHeaderOnScroll}>
    <main className="min-h-screen h-fit flex flex-col">
      <GapCommonHeader />
      <PageContainer header={<GapDynamicTop />} footer={<GapContainerBottom />}>
        {children}
      </PageContainer>
      <CommonFooter />
    </main>
  </ScrollArea>
);

export default PageGroupLayout;
