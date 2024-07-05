'use client';
import { ScrollArea } from 'packages/ui/scroll-area';
import PageContainer from 'components/containers/page.container';
import type { NextLayoutProps } from 'packages/utils/cn';
import Event from 'packages/utils/event';
import { GapCommonHeader } from './common.header';

const MainGroupLayout = ({ children }: NextLayoutProps) => (
  <ScrollArea
    className={`h-screen w-screen overflow-x-hidden`}
    type="scroll"
    scrollCaptureY={Event.hideHeaderOnScroll}>
    <main className="h-screen w-screen overflow-hidden flex flex-col">
      <PageContainer header={<GapCommonHeader />}>
        <div className="h-44 sm:h-48 w-full" />
        {children}
      </PageContainer>
    </main>
  </ScrollArea>
);

export default MainGroupLayout;
