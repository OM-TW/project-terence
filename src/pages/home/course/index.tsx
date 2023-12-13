import { memo, useEffect } from 'react';
import './index.less';
import Aside from './aside';
import Carousel from './carousel';

const Course = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='Course'>
      <Aside />
      <Carousel />
    </section>
  );
});
export default Course;
