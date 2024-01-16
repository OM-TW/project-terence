import QuickApply from '@/components/quickApply';
import { memo, useState } from 'react';
import Accordion from './accordion';
import { ScheduleContext, SchedulePageType, ScheduleState } from './config';
import Details from './details';
import './index.less';
import Steps from './steps';
import Tab from './tab';
import Timeline from './timeline';

const Flow = memo(() => (
  <>
    <Steps />
    <Details />
    <Timeline />
  </>
));

const FAQ = memo(() => (
  <>
    <Accordion />
  </>
));

const Schedule = memo(() => {
  const value = useState(ScheduleState);
  const { page } = value[0];
  return (
    <section className='Schedule'>
      <ScheduleContext.Provider value={value}>
        <div className='w-full pb-56 max-w-5xl flex flex-col justify-start items-center pt-10'>
          <Tab />
          {page === SchedulePageType.Process ? <Flow /> : <FAQ />}
        </div>
        {page === SchedulePageType.Process && <QuickApply />}
      </ScheduleContext.Provider>
    </section>
  );
});
export default Schedule;
