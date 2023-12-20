import { memo, useEffect, useState } from 'react';
import './index.less';
import { ScheduleContext, ScheduleState } from './config';
import Tab from './tab';
import Steps from './steps';
import Details from './details';

const Schedule = memo(() => {
  const value = useState(ScheduleState);
  useEffect(() => {}, []);
  return (
    <section className='Schedule'>
      <ScheduleContext.Provider value={value}>
        <div className='w-full max-w-5xl flex flex-col justify-center items-center'>
          <Tab />
          <Steps />
          <Details />
        </div>
      </ScheduleContext.Provider>
    </section>
  );
});
export default Schedule;
