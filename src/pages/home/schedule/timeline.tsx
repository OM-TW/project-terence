import { Fragment, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ScheduleTimeline } from './config';
import './timeline.less';

const Timeline = memo(() => (
  <div className='Timeline'>
    <h1>2024第十六屆申請時間表</h1>
    <div className='steps'>
      <div className='line'>
        {ScheduleTimeline.map((data, index) => {
          if (index !== ScheduleTimeline.length - 1) {
            return (
              <Fragment key={JSON.stringify(data)}>
                <div className='b' />
                <div className='l' />
              </Fragment>
            );
          }
          return <div key={JSON.stringify(data)} className='b' />;
        })}
      </div>
      <div className='info'>
        {ScheduleTimeline.map((data, index) => {
          return (
            <div key={data.name}>
              <div>{data.date}</div>
              <div>
                <div
                  className={twMerge('check', index < 3 ? 'over' : '', index === 3 ? 'now' : '')}
                />
              </div>
              <div>{data.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
));
export default Timeline;
