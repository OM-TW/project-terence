import { memo, useState } from 'react';
import Aside from './aside';
import Carousel from './carousel';
import { CourseContext, CourseState } from './config';
import Detail from './detail';
import './index.less';

const Course = memo(() => {
  const value = useState(CourseState);
  const { trigger } = value[0];
  return (
    <section id='course' className='Course'>
      <CourseContext.Provider {...{ value }}>
        <Aside />
        <Carousel />
        {trigger && <Detail />}
      </CourseContext.Provider>
    </section>
  );
});
export default Course;
