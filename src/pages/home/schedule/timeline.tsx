import { Fragment, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { ScheduleTimeline } from './config';
import './timeline.less';

const Timeline = memo(() => {
  const now = new Date().getTime();
  // const now = new Date('2024-4-16').getTime();
  const checked = ScheduleTimeline.reduce(
    (prev, next) => {
      const date = new Date(next.date).getTime();
      if (now > date) return next;
      return prev;
    },
    { date: '', name: '' },
  );

  return (
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
          {ScheduleTimeline.map((data) => {
            const date = new Date(data.date).getTime();
            return (
              <div key={data.name}>
                <div>{data.date.split('-').slice(1).join('/')}</div>
                <div>
                  <div
                    className={twMerge(
                      'check',
                      now > date ? 'over' : '',
                      data.date === checked.date ? 'now' : '',
                    )}
                  />
                </div>
                <div>{data.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
export default Timeline;
