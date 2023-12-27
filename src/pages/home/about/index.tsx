import { memo, useEffect } from 'react';
import './index.less';
import Aside from './aside';
import Phase from './phase';

const About = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='About'>
      <Aside />
      <Phase />
    </section>
  );
});
export default About;
