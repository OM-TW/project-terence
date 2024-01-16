import ScrollDown from '@/components/scrollDown';
import { memo } from 'react';
import Grid from './grid';
import './index.less';
import Pattern from './pattern';

const Application = memo(() => (
  <section id='application' className='Application'>
    <Grid />
    <Pattern />
    <ScrollDown />
  </section>
));
export default Application;
