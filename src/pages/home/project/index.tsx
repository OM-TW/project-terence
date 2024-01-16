import { memo, useEffect } from 'react';
import './index.less';
import Aside from './aside';
import Phase from './phase';

const Project = memo(() => {
  useEffect(() => {}, []);
  return (
    <section id='project' className='Project'>
      <Aside />
      <Phase />
    </section>
  );
});
export default Project;
