import { memo, useEffect, useState } from 'react';
import './index.less';
import { ScheduleContext, SchedulePageType, ScheduleState } from './config';
import Tab from './tab';
import Steps from './steps';
import Details from './details';
import Timeline from './timeline';
import QuickApply from '@/components/quickApply';
import Accordion from './accordion';

const Flow = memo(() => {
  return (
    <>
      <Steps />
      <Details />
      <Timeline />
    </>
  );
});

const FAQ = memo(() => {
  return (
    <>
      <Accordion />
    </>
  );
});

const Schedule = memo(() => {
  const value = useState(ScheduleState);
  const { page } = value[0];

  useEffect(() => {}, []);
  return (
    <section className='Schedule'>
      <ScheduleContext.Provider value={value}>
        <div className='w-full pb-40 max-w-5xl flex flex-col justify-start items-center pt-10'>
          <Tab />
          {page === SchedulePageType.Process ? <Flow /> : <FAQ />}
        </div>
        <QuickApply />
      </ScheduleContext.Provider>
    </section>
  );
});
export default Schedule;
