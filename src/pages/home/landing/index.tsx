import { memo, useEffect } from 'react';
import './index.less';
import Grid from './grid';

const Landing = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='Landing'>
      <Grid />
    </section>
  );
});
export default Landing;
