import { memo } from 'react';
import Aside from './aside';
import './index.less';
import Phase from './phase';

const Project = memo(() => (
  <section id='project' className='Project'>
    <Aside />
    <Phase />
  </section>
));
export default Project;
