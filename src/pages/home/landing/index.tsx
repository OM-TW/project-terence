import { memo, useEffect } from 'react';
import './index.less';
import Grid from './grid';
import Header from './header';
import Quick from './quick';
import { IReactProps } from '@/settings/type';
import Tie from './tie';

const Container = memo(({ children }: IReactProps) => (
  <div className='w-full h-1/2'>{children}</div>
));

const Landing = memo(() => {
  useEffect(() => {}, []);
  return (
    <section className='Landing'>
      <Container>
        <Grid />
        <Header />
        <Quick />
      </Container>
      <Container>
        <Tie />
      </Container>
    </section>
  );
});
export default Landing;
