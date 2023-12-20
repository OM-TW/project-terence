import ScrollDown from '@/components/scrollDown';
import { memo, useEffect } from 'react';
import Grid from './grid';
import './index.less';
import Pattern from './pattern';

const Application = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='Application'>
      <Grid />
      <Pattern />
      <ScrollDown />
    </section>
  );
});
export default Application;
